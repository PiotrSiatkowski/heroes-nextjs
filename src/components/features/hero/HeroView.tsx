import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { CtfImage } from '@src/components/features/contentful';
import { HeroSkillDescription } from '@src/components/features/hero/HeroSkillDescription';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props {
  hero: PageHeroFieldsFragment;
}
export const HeroView = ({ hero }: Props) => {
  const { asPath } = useRouter();
  const hash = asPath.split('#')[1];
  const inspectorProps = useContentfulInspectorMode({ entryId: hero.sys.id });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderAvatar = (className: ComponentProps<'div'>['className']) => {
    return (
      <div className={`h-32 w-1/5 border-2 border-[#2c2e2e] ${className}`}>
        {hero.avatar && (
          <CtfImage
            nextImageProps={{ className: 'w-full h-full', priority: true, sizes: undefined }}
            {...hero.avatar}
          />
        )}
      </div>
    );
  };

  const renderDetailsSquares = (className: ComponentProps<'div'>['className']) => {
    return (
      <div className={`flex w-full flex-row md:w-[60%] ${className}`}>
        <div className="flex aspect-square w-1/6 flex-col items-center justify-center border-2 border-[#2c2e2e]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="FY7TWJ3yQgg0zRhmd0sjL"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
              alt="attack damage"
            />
          </div>
          {hero.attackMin}-{hero.attackMax}
        </div>
        <div className="flex aspect-square w-1/6 flex-col items-center justify-center border-2 border-[#2c2e2e]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="FY7TWJ3yQgg0zRhmd0sjL"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
              alt="speed"
            />
          </div>
          {hero.speed}
        </div>
        <div className="flex aspect-square w-1/6 flex-col items-center justify-center border-2 border-[#2c2e2e]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="FY7TWJ3yQgg0zRhmd0sjL"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
              alt="armor"
            />
          </div>
          {hero.armor}
        </div>
        <div className="flex aspect-square w-1/6 flex-col items-center justify-center border-2 border-[#2c2e2e]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="FY7TWJ3yQgg0zRhmd0sjL"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
              alt="range"
            />
          </div>
          {(hero.range ?? 0) <= 150 ? 'Melee' : hero.range}
        </div>
        <div className="flex aspect-square w-1/6 flex-col items-center justify-center" />
        <Link
          href={{ hash: 'description' }}
          className="flex aspect-square w-1/6 flex-col items-center justify-center border-2 border-[#2c2e2e] transition-transform hover:z-50 hover:scale-125"
        >
          <div
            className={`group flex h-full w-full items-center justify-center text-4xl ${
              hash === 'description' ? 'opacity-100' : 'opacity-50 hover:opacity-70'
            }`}
          >
            <div className="pointer-events-none text-4xl text-amber-600">?</div>
          </div>
        </Link>
      </div>
    );
  };

  const renderSkillBox = (skill, image) => {
    return (
      <div className="relative aspect-square w-1/6 border-2 border-[#2c2e2e] bg-black transition-transform hover:z-50 hover:scale-125 md:w-[10%]">
        {hero.skill1Image && (
          <Link href={{ hash: skill }}>
            <div
              className={
                hash === skill || (!hash && skill === 'skill-1')
                  ? undefined
                  : 'opacity-50 hover:opacity-70'
              }
            >
              <CtfImage
                nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
                {...image}
              />
            </div>
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col overflow-hidden border-4 border-[#2c2e2e] shadow-lg md:max-w-[700px] 2xl:max-w-none 2xl:flex-row">
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {hero.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...hero.featuredImage}
          />
        )}
      </div>
      <div className="relative flex flex-1 basis-1/2 bg-[#0e191a]">
        <div
          className={`absolute z-0 h-1/4 w-full bg-gradient-to-b ${
            hero.isLegion ? 'from-green-200/20' : 'from-red-400/20'
          } to-transparent`}
        />
        <div className="z-10 flex w-full flex-col p-4 lg:p-8">
          <div className="flex justify-between">
            <div className="flex h-full w-full flex-col justify-between md:w-4/5">
              <div className="flex flex-row pb-1.5 md:h-20 md:pr-2">
                <div className="h-full md:overflow-hidden">
                  <div className="pb-1 text-4xl font-bold leading-10 md:float-left md:pr-2">
                    {hero.name}
                  </div>
                  <div className="mt-2 h-full hyphens-auto text-justify text-xs leading-[15px] md:mt-0">
                    {renderAvatar('block float-right ml-2 md:hidden min-w-[128px] min-h-[128px]')}
                    {hero.shortDescription}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap">
                <div className="flex h-12 basis-1/2 items-center border-2 border-[#2c2e2e] bg-red-900 px-1 py-3 md:basis-1/4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Strengthlogo"
                    src="https://static.wikia.nocookie.net/hon_gamepedia/images/6/6d/Strengthlogo.gif/revision/latest/scale-to-width-down/32?cb=20130323204107"
                    decoding="async"
                    loading="lazy"
                    width="32"
                    height="32"
                    data-image-name="Strengthlogo.gif"
                    data-image-key="Strengthlogo.gif"
                    data-relevant="0"
                  />
                  <div
                    className={`flex h-full items-center justify-between pl-1 ${
                      hero.attribute === 'str' ? 'text-amber-300' : 'text-inherit'
                    }`}
                  >
                    <div className="text-lg font-bold">{hero.str}</div>
                    <div className="pl-1 text-lg font-bold">(+{hero.strGain?.toFixed(1)})</div>
                  </div>
                </div>
                <div className="flex h-12 basis-1/2 items-center border-2 border-[#2c2e2e] bg-green-900 px-1 py-3 md:basis-1/4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Agilitylogo"
                    src="https://static.wikia.nocookie.net/hon_gamepedia/images/a/a2/Agilitylogo.gif/revision/latest/scale-to-width-down/32?cb=20130323203857"
                    decoding="async"
                    loading="lazy"
                    width="32"
                    height="32"
                    data-image-name="Agilitylogo.gif"
                    data-image-key="Agilitylogo.gif"
                    data-relevant="0"
                    data-src="https://static.wikia.nocookie.net/hon_gamepedia/images/a/a2/Agilitylogo.gif/revision/latest/scale-to-width-down/32?cb=20130323203857"
                    className=" lazyloaded"
                  />
                  <div
                    className={`flex h-full items-center justify-between pl-1 ${
                      hero.attribute === 'agi' ? 'text-amber-300' : 'text-inherit'
                    }`}
                  >
                    <div className="text-lg font-bold">{hero.agi}</div>
                    <div className="pl-1 text-lg font-bold">(+{hero.agiGain?.toFixed(1)})</div>
                  </div>
                </div>
                <div className="flex h-12 basis-1/2 items-center border-2 border-[#2c2e2e] bg-blue-900 px-1 py-3 md:basis-1/4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Intelligencelogo"
                    src="https://static.wikia.nocookie.net/hon_gamepedia/images/0/0f/Intelligencelogo.gif/revision/latest/scale-to-width-down/32?cb=20130323204036"
                    decoding="async"
                    loading="lazy"
                    width="32"
                    height="32"
                    data-image-name="Intelligencelogo.gif"
                    data-image-key="Intelligencelogo.gif"
                    data-relevant="0"
                    data-src="https://static.wikia.nocookie.net/hon_gamepedia/images/0/0f/Intelligencelogo.gif/revision/latest/scale-to-width-down/32?cb=20130323204036"
                    className=" lazyloaded"
                  />
                  <div
                    className={`flex h-full items-center justify-between pl-1 ${
                      hero.attribute === 'int' ? 'text-amber-300' : 'text-inherit'
                    }`}
                  >
                    <div className="text-lg font-bold">{hero.int}</div>
                    <div className="pl-1 text-lg font-bold">(+{hero.intGain?.toFixed(1)})</div>
                  </div>
                </div>
                <div className="flex h-12 basis-1/2 flex-col items-stretch border-2 border-[#2c2e2e] bg-blue-900 md:basis-1/4">
                  <div className="flex h-1/2 items-center justify-center bg-gradient-to-r from-green-800 to-green-500">
                    {150 + (hero.str ?? 0) * 19}
                  </div>
                  <div className="flex h-1/2 w-full items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500">
                    {(hero.int ?? 0) * 13}
                  </div>
                </div>
              </div>
            </div>
            {renderAvatar('hidden md:block')}
          </div>
          <div className="my-2 border-2 border-[#2c2e2e]" />
          {renderDetailsSquares('flex md:hidden')}
          <div className="flex">
            {renderSkillBox('skill-1', hero.skill1Image)}
            {renderSkillBox('skill-2', hero.skill2Image)}
            {renderSkillBox('skill-3', hero.skill3Image)}
            {renderSkillBox('skill-4', hero.skill4Image)}
            {renderDetailsSquares('hidden md:flex')}
          </div>
          <div className="relative mt-2 min-h-[400px] flex-grow border-2 border-[#2c2e2e]">
            <div className="absolute h-full w-full bg-black opacity-20" />
            <div className="absolute h-full w-full overflow-y-auto p-2 text-slate-50">
              {!isClient || hash === 'description' ? (
                <Markdown className="prose-custom prose prose-sm prose-slate max-w-none text-justify dark:prose-invert">
                  {hero.description}
                </Markdown>
              ) : (
                <HeroSkillDescription
                  entryId={hero.sys.id}
                  description={
                    !isClient || hash === 'description'
                      ? null
                      : hash === 'skill-4'
                      ? hero.skill4Description
                      : hash === 'skill-3'
                      ? hero.skill3Description
                      : hash === 'skill-2'
                      ? hero.skill2Description
                      : hero.skill1Description
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
