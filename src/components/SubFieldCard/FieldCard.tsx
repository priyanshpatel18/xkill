'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
// import { Link } from 'next-view-transitions';
import React from 'react';
import { fieldType } from './data';

interface Props {
  data: fieldType;
}

export default function FieldCard({ data }: Props) {
  return (
    <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
      <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
        <div>
          <h1>{`Que. ${data.id}`}</h1>
          <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
            10 points
          </span>
          <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
            {`${data.title}`}
          </CardTitle>
          <span className="text-sm text-green-500">{`${data.difficulty}`}</span>
        </div>
        <CardContent className="flex flex-row  p-0 items-center">
          <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
            Start Challenge
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
