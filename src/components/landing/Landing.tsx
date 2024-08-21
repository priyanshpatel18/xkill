import { fonts } from '@/fonts/fonts';
import { Link } from 'next-view-transitions';
import { MutableRefObject } from 'react';

interface landingProps {
  textRef: MutableRefObject<null>;
}

export default function Landing({ textRef }: landingProps) {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-[1rem] text-center p-[2rem]">
      <h1 className={`text-[4rem] ${fonts.calSans} leading-[4rem]`}>xkill</h1>
      <span className="text-[1.7rem] lg:text-[2.5rem] leading-[2rem] lg:leading-[2.5rem]">
        Level Up Your Tech Career in
      </span>
      <div
        ref={textRef}
        className="text-[#1B6EF3] text-[1.4rem] lg:text-[1.8rem] px-[1rem] py-[0.5rem] bg-[#DEEAFF] leading-[1.4rem] rounded-md"
      >
        Machine Learning
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] lg:leading-[2.5rem]">
          Master Interviews,
        </div>
        <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] lg:leading-[2.5rem]">
          Land Jobs, and Thrive
        </div>
      </div>
      <Link
        href="/explore"
        className="bg-[#1B6EF3] px-[1rem] py-[0.8rem] rounded-lg cursor-pointer"
      >
        <span className="text-[1.2rem] text-[#F2F2F2] leading-[1.2rem] py-[1rem]">
          Explore Now
        </span>
      </Link>
    </div>
  );
}
