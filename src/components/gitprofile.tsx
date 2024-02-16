import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './error-page';
import HeadTagEditor from './head-tag-editor';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from '../constants';
import { Profile } from '../interfaces/profile';
import SkillCard from './skill-card';
import ExperienceCard from './experience-card';
import EducationCard from './education-card';
import CertificationCard from './certification-card';
import { GithubProject } from '../interfaces/github-project';
import GithubProjectCard from './github-project-card';
import ExternalProjectCard from './external-project-card';
import BlogCard from './blog-card';
import Footer from './footer';
import HeaderMenu from './header-menu';
import HeroProfile from './hero-profile';
import { Config } from '../../global';

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      if (sanitizedConfig.projects.github.mode === 'automatic') {
        if (publicRepoCount === 0) {
          return [];
        }

        const excludeRepo =
          sanitizedConfig.projects.github.automatic.exclude.projects
            .map((project) => `+-repo:${project}`)
            .join('');

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      } else {
        if (sanitizedConfig.projects.github.manual.projects.length === 0) {
          return [];
        }
        const repos = sanitizedConfig.projects.github.manual.projects
          .map((project) => `+repo:${project}`)
          .join('');

        const url = `https://api.github.com/search/repositories?q=${repos}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      }
    },
    [
      sanitizedConfig.github.username,
      sanitizedConfig.projects.github.mode,
      sanitizedConfig.projects.github.manual.projects,
      sanitizedConfig.projects.github.automatic.sortBy,
      sanitizedConfig.projects.github.automatic.limit,
      sanitizedConfig.projects.github.automatic.exclude.forks,
      sanitizedConfig.projects.github.automatic.exclude.projects,
    ],
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || ' ',
        bio: data.bio || '',
        location: data.location || '',
        company: data.company || '',
      });

      if (!sanitizedConfig.projects.github.display) {
        return;
      }

      setGithubProjects(await getGithubProjects(data.public_repos));
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, [
    sanitizedConfig.github.username,
    sanitizedConfig.projects.github.display,
    getGithubProjects,
  ]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  const hasEducations = sanitizedConfig.educations?.length;
  const hasExperiences = sanitizedConfig.experiences?.length;
  const hasSkills = sanitizedConfig.skills?.length;
  const hasBlog = sanitizedConfig.blog.display;
  const hasCertifications = sanitizedConfig.certifications?.length;
  const hasExternalProjects =
    sanitizedConfig.projects?.external?.projects?.length;
  const hasGitHubProjects = sanitizedConfig?.projects?.github?.display;

  return (
    <HelmetProvider>
      <div className="fade-in h-screen bg-base-300">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            />
            <HeaderMenu
              loading={loading}
              theme={theme}
              setTheme={setTheme}
              themeConfig={sanitizedConfig.themeConfig}
            />
            <div
              className={`pl-8 pr-8 min-h-full ${BG_COLOR} max-w-5xl text-center ml-auto mr-auto`}
            >
              <section
                id={'aboutContainer'}
                className=" rounded-box navbar-padding"
              >
                <HeroProfile loading={loading} profile={profile} />
              </section>

              {hasSkills && (
                <section
                  id={'skillsContainer'}
                  className=" rounded-box navbar-padding"
                >
                  <SkillCard
                    loading={loading}
                    skills={sanitizedConfig.skills}
                  />
                </section>
              )}

              {hasEducations || hasExperiences ? (
                <section
                  id={'educationContainer'}
                  className="grid grid-cols-1 lg:grid-cols-2 rounded-box navbar-padding lg:gap-6"
                >
                  {hasEducations ? (
                    <EducationCard
                      loading={loading}
                      educations={sanitizedConfig.educations}
                    />
                  ) : null}

                  {hasExperiences ? (
                    <div
                      id={'experienceContainer'}
                      className="navbar-padding lg:pt-0"
                    >
                      <ExperienceCard
                        experiences={sanitizedConfig.experiences}
                        loading={loading}
                      />
                    </div>
                  ) : null}
                </section>
              ) : null}

              {hasCertifications ? (
                <section
                  id={'certificationContainer'}
                  className="rounded-box navbar-padding"
                >
                  <CertificationCard
                    loading={loading}
                    certifications={sanitizedConfig.certifications}
                  />
                </section>
              ) : null}

              {hasBlog ? (
                <section
                  id={'blogContainer'}
                  className="rounded-box navbar-padding"
                >
                  <BlogCard
                    loading={loading}
                    googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                    blog={sanitizedConfig.blog}
                  />
                </section>
              ) : null}

              <section
                id={'projectContainer'}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 rounded-box pt-6 navbar-padding"
              >
                {hasExternalProjects ? (
                  <ExternalProjectCard
                    loading={loading}
                    header={sanitizedConfig.projects.external.header}
                    externalProjects={
                      sanitizedConfig.projects.external.projects
                    }
                    googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                  />
                ) : null}
              </section>

              <section
                id={'gitProjectContainer'}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 rounded-box pt-6 navbar-padding"
              >
                {hasGitHubProjects ? (
                  <GithubProjectCard
                    header={sanitizedConfig.projects.github.header}
                    limit={sanitizedConfig.projects.github.automatic.limit}
                    githubProjects={githubProjects}
                    loading={loading}
                    username={sanitizedConfig.github.username}
                    googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                  />
                ) : null}
              </section>

              {/* <section
                id={'contactContainer'}
                className="grid grid-cols-1 rounded-box navbar-padding"
              >
                <ContactForm loading={loading} />
              </section> */}
            </div>

            <div className={`${BG_COLOR} navbar-padding`}>
              <Footer loading={loading} />
            </div>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
