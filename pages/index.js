import { Banner, CreatorCard, NFTCard } from '@/components';
import images from '../assets';
import { makeId } from '@/utils/makeId';

import { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
  const parentRef = useRef();
  const scrollRef = useRef();
  const [hideButtons, setHideButtons] = useState(true);
  const { theme } = useTheme();

  // handle left and right scroll button mainly for desktop version
  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // check is there a need to have scroll buttons
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.scrollWidth) {
      return setHideButtons(true);
    } else {
      return setHideButtons(false);
    }
  };

  // run isScrollable on every browser window resize by user to check scrollable buttons needed or not
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  }, []);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      {/* Set top banner */}
      <div className="w-full minmd:w-4/5">
        <Banner
          name={
            <>
              Discover, collect, and sell <br /> extraordinary NFTs
            </>
          }
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyle="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        {/* AQ: Set heading Best Creators */}
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Best Creators
          </h1>

          {/* Set Cards with refs for scrolling left and right button */}
          <div
            className="relative flex-1 max-w-full flex mt-3"
            ref={parentRef}
          >
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-non"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((item) => (
                <CreatorCard
                  key={`creator-${item}`}
                  rank={item}
                  creatorImage={images[`creator${item}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - item * 0.534}
                ></CreatorCard>
              ))}
              {hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      alt="left_arrow"
                      className={
                        theme === 'light' ? 'filter invert' : undefined
                      }
                    />
                  </div>
                  <div
                    onClick={() => handleScroll('right')}
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      alt="left_arrow"
                      className={
                        theme === 'light' ? 'filter invert' : undefined
                      }
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* AQ: Set Top NFTs */}
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">
              Top NFTs
            </h1>

            {/* Set Search bar */}
            <div className="flex-2 sm:w-full flex flex-row sm:flex-col">
              Search Bar here
            </div>
            {/* AQ" End Search bar */}
          </div>{' '}
          {/* End section row */}
          {/* AQ: Show top NFTS area*/}
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NFTCard
                key={`nft-${i}`}
                nft={{
                  i,
                  name: `Nifty NFT ${i}`,
                  price: (10 - i * 0.534).toFixed(2),
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  description: 'Cool NFT on Sale',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
