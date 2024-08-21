import Image from 'next/image';
import NotFound from '@/assets/block.svg';
import four from '@/assets/four.svg';
import { Link } from 'next-view-transitions';

export default function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex items-center">
          <Image
            src={four}
            alt="four"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
          />
          <Image
            src={NotFound}
            alt="notFound"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
          />
          <Image
            src={four}
            alt="four"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
            This is not the way
          </span>
          <span className="text-lg md:text-xl lg:text-2xl w-full md:w-[70%] lg:w-[60%]">
            Looks like we can't find that page. Maybe check the address again,
            or try{' '}
            <Link className="text-blue-600" href="/">
              returning home
            </Link>{' '}
            first.
          </span>
        </div>
      </div>
    </div>
  );
}
