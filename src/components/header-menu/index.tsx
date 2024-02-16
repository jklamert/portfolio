import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import ThemeChanger from '../theme-changer';
import { MouseEvent } from 'react';

interface HeaderMenuProps {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}

function onJumpTagClicked(e: MouseEvent<HTMLAnchorElement>) {
  console.debug('onJumpTagClicked: ', e);
  const id = e.currentTarget?.id;
  let el = document.getElementById(`${id}Container`);

  if (window?.innerWidth > 1024 && id === 'experience') {
    const tag = 'educationContainer';
    el = document.getElementById(tag);
  }

  if (el?.scrollIntoView) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

/**
 * Renders an HeaderMenu component.
 * @param theme - Currently selected theme string.
 * @param loading - A boolean indicating if the header is loading.
 * @param setTheme - Method to set the theme of the app.
 * @param themeConfig - Theme configuration
 * @returns JSX element representing the HeaderMenu.
 */
const HeaderMenu: React.FC<HeaderMenuProps> = ({
  theme,
  setTheme,
}): JSX.Element => {
  return (
    <div className="navbar shadow-lg bg-base-200 fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a id="about" onClick={onJumpTagClicked}>
                About
              </a>
            </li>
            <li>
              <a id={'skills'} onClick={onJumpTagClicked}>
                Skills
              </a>
            </li>

            <li>
              <a id={'education'} onClick={onJumpTagClicked}>
                Education
              </a>
            </li>
            <li>
              <a id={'experience'} onClick={onJumpTagClicked}>
                Experience
              </a>
            </li>
            <li>
              <a id={'project'} onClick={onJumpTagClicked}>
                Projects
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Jason Klamert</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a id="about" onClick={onJumpTagClicked}>
              About
            </a>
          </li>
          <li>
            <a id={'skills'} onClick={onJumpTagClicked}>
              Skills
            </a>
          </li>

          <li>
            <a id={'education'} onClick={onJumpTagClicked}>
              Education
            </a>
          </li>
          <li>
            <a id={'experience'} onClick={onJumpTagClicked}>
              Experience
            </a>
          </li>
          <li>
            <a id={'project'} onClick={onJumpTagClicked}>
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeChanger theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default HeaderMenu;
