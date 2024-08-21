import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'next-view-transitions';
import Image, { StaticImageData } from 'next/image';
import { subFieldType } from './exploreFieldContent';

interface exploreCardProps {
  title: string;
  bgImage: StaticImageData;
  redirectLink: string;
  subFields: subFieldType[] | undefined;
}

export default function ExploreCard({
  title,
  bgImage,
  subFields,
  redirectLink,
}: exploreCardProps) {
  return (
    <Card className="bg-card relative border-0">
      <CardHeader className="pb-0 lg:pb-4">
        <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer">
          <Link href={`/explore/${redirectLink.toLowerCase()}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col">
          {subFields?.map((field) => (
            <Link
              href={`/explore/${field.redirectLink}`}
              key={field.id}
              className=""
            >
              <span className="tracking-wide capitalize font-normal text-sm sm:text-base md:text-lg lg:text-xl hover:underline">
                {field.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="self-end">
          {bgImage && (
            <Image
              src={bgImage}
              alt="bgImage"
              className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] select-none"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
