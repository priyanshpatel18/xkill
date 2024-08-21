'use client';

import FieldCard from '@/components/fieldCard/FieldCard';
import { programmingData } from '@/components/fieldCard/data';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'next-view-transitions';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function page() {
  const [currentField, setCurrentField] = useState<string>('');
  const params = useParams();

  useEffect(() => {
    const field = params.field?.toString().toLowerCase();
    switch (field) {
      case 'programming':
        setCurrentField(params.field.toString());
        break;
      case 'dbms':
        setCurrentField('Database Management Systems');
        break;
      case 'os':
        setCurrentField('Operating Systems');
        break;
      case 'app':
        setCurrentField('Mobile App Development');
        break;
      case 'web':
        setCurrentField('Web Development');
        break;
      default:
        setCurrentField('');
    }
  }, [params]);

  return (
    <div className="min-h-screen mt-[10vh] p-[2rem]">
      <Breadcrumbs currentField={currentField} />
      <div className="text-3xl font-bold tracking-wider capitalize mb-[1.5rem]">
        {currentField}
      </div>
      <div className="sm:flex-1 m-0 lg:mx-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {programmingData.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
}

function Breadcrumbs({ currentField }: { currentField: string }) {
  return (
    <Breadcrumb className="capitalize text-[1rem] text-primary mb-[1.5rem]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link
            href="/explore"
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            Explore
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>{currentField}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
