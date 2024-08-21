'use client';

import { fonts } from '@/fonts/fonts';
import { toast } from 'sonner';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-[1rem] text-center p-[2rem]">
      <h1 className={`text-[4rem] ${fonts.calSans} leading-[4rem]`}>xkill</h1>
      <span className="text-[1.7rem] lg:text-[2.5rem] leading-[2rem] lg:leading-[2.5rem]">
        Level Up Your Tech Career in
      </span>
      <div className="text-[#1B6EF3] text-[1.8rem] px-[1rem] py-[0.5rem] bg-[#DEEAFF] leading-[1.4rem] rounded-md">
        xyz
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] lg:leading-[2.5rem]">
          Master Interviews,
        </div>
        <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] lg:leading-[2.5rem]">
          Land Jobs, and Thrive
        </div>
      </div>
      <div
        className="bg-[#1B6EF3] px-[1rem] py-[0.8rem] rounded-lg cursor-pointer"
        onClick={() => {
          toast.info('Get Started');
        }}
      >
        <span className="text-[1.2rem] text-[#F2F2F2] leading-[1.2rem] py-[1rem]">
          Get Started
        </span>
      </div>
    </div>
  );
}
