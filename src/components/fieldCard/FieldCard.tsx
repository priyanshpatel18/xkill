'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'next-view-transitions';
import { fieldType } from './data';

interface Props {
  field: fieldType;
}

export default function FieldCard({ field }: Props) {
  return (
    <Link
      href={`/explore/${field.redirectLink}`}
      key={field.id}
      className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2.5rem] rounded-lg"
    >
      <Card className="bg-transparent border-0 rounded-lg relative">
        <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
          (0/{field.totalExercises})
        </span>
        <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer mb-[1rem]">
          {field.title}
        </CardTitle>
        <CardContent className="flex flex-col gap-[3rem] p-0">
          <span className="text-sm">70% Companies test this subject</span>
          <Button className="w-auto text-lg text-primary border-2 border-background-blur bg-transparent hover:bg-card-btnhover rounded-xl">
            Start
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
