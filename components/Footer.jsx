import Image from 'next/image';
import images from '../assets';
import { useTheme } from 'next-themes';
import { Button } from '.';

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 justify-start items-start ${extraClasses}`}>
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold txt-xl mb-10">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={item + index}
        className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8">
      <div className="w-full minmd:4/5 flex flex-row md:flex-col sm:px-4 px-16 mt-2">
        {/* AQ: set logo image*/}
        <div className="flexStart flex-1  flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              width={32}
              height={32}
              alt="logo"
            ></Image>
            <p className="dark:text-white text-nft-dark font-semibold text-lg ml-1">
              BonzerNFTs
            </p>
          </div>
          {/* AQ: get email for latest udpates*/}
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
            ></input>
            <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="primary"
                classStyles="rounded-md"
              ></Button>
            </div>
          </div>
        </div>

        {/* Set 2nd column in footer for BonzerNFTs main links */}
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="BonzerNFTs"
            items={['Explore', 'How it Works', 'Contact Us']}
          ></FooterLinks>
          <FooterLinks
            heading="Support"
            items={[
              'Help Center',
              'Terms of Service',
              'Legal',
              'Privacy Policy',
            ]}
            extraClasses="ml-4"
          ></FooterLinks>
        </div>
      </div>

      {/* AQ: Set All rights reserved and social links */}
      <div className="flexCenter w-full m-1 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            CrpytoKet, Inc. All Rights Reserved
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, index) => (
              <div
                className="mx-2 cursor-pointer"
                key={`image ${index}`}
              >
                <Image
                  src={image}
                  key={index}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
