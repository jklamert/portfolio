import { skeleton } from '../../utils';
import { Skill } from '../../interfaces/sanitized-config';
import LazyImage from '../lazy-image';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: Skill[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Skills</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => {
                  const { title, icon, url } = skill;
                  return (
                    <a
                      className="card card-compact  compact bg-base-100 cursor-pointer"
                      key={index}
                      href={url}
                      onClick={(e) => {
                        e.preventDefault();

                        window?.open(url, '_blank');
                      }}
                    >
                      <div className="p-8 h-full w-full">
                        <div className="flex items-center flex-col">
                          <div className="w-full">
                            <div className="px-4">
                              <div className="text-center w-full">
                                {/* <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                                  {title}
                                </h2> */}
                                {url && (
                                  <div className="avatar opacity-90">
                                    <div className="w-20 h-20 mask mask-squircle">
                                      <LazyImage
                                        src={icon}
                                        alt={'thumbnail'}
                                        placeholder={skeleton({
                                          widthCls: 'w-full',
                                          heightCls: 'h-full',
                                          shape: '',
                                        })}
                                      />
                                    </div>
                                  </div>
                                )}
                                <p className="mt-1 text-base-content text-opacity-60 text-sm">
                                  {title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    // <div
                    //   key={index}
                    //   className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                    // >
                    //   {title}
                    // </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
