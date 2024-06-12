'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardTitle } from '@/components/ui/card';
// import { Link } from 'next-view-transitions';
import { useParams } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';
import FieldCard from '@/components/SubFieldCard/FieldCard';
import { QuestionData } from '@/components/SubFieldCard/data';

export default function Content() {
  const [currentField, setCurrentField] = useState<string>('');
  const [currentSubField, setCurrentSubField] = useState<string>('');
  const params = useParams();
  useEffect(() => {
    const field = params.field?.toString().toLowerCase();
    const subFields = params.subField?.toString().toLowerCase();

    switch (field) {
      case 'programming':
        setCurrentField(params.field.toString());
        switch (subFields) {
          case 'oop':
            setCurrentSubField('Object Oriented Programming');
            break;

          case 'control-structures':
            setCurrentSubField('Controll Structure');
            break;

          case 'functions-and-methods':
            setCurrentSubField('Functions and Methods');
            break;

          case 'intro':
            setCurrentSubField('Introduction');
            break;
        }
        break;
      case 'dbms':
        setCurrentField('Database Management Systems');
        switch (subFields) {
          case 'core':
            setCurrentSubField('Core Concepts');
            break;

          case 'rdbms':
            setCurrentSubField('RDBMS');
            break;

          case 'design-and-normalization':
            setCurrentSubField('Database Design and Normalization');
            break;

          case 'querying-and-sql':
            setCurrentSubField('Querying and SQL');
            break;
          case 'transactions-and-concurrency':
            setCurrentSubField('Transactions and Concurrency');
            break;
        }
        break;
      case 'os':
        setCurrentField('Operating Systems');
        switch (subFields) {
          case 'process-management':
            setCurrentSubField('Process Management');
            break;

          case 'memory-management':
            setCurrentSubField('Controll Structure');
            break;

          case 'file-systems':
            setCurrentSubField('File Systems');
            break;

          case 'concurrency-and-synchronization':
            setCurrentSubField('Concurrency and Synchronization');
            break;
        }
        break;
      case 'app':
        setCurrentField('Mobile App Development');
        switch (subFields) {
          case 'intro':
            setCurrentSubField('Introduction');
            break;

          case 'native':
            setCurrentSubField('Native App Development');
            break;

          case 'cross-platform':
            setCurrentSubField('Cross-Platform App Development');
            break;

          case 'ui':
            setCurrentSubField('User Interface (UI) Design');
            break;

          case 'backend':
            setCurrentSubField('Backend');
            break;
        }
        break;
      case 'web':
        setCurrentField('Web Development');
        switch (subFields) {
          case 'basics':
            setCurrentSubField('Basics');
            break;

          case 'javascript':
            setCurrentSubField('JavaScript Fundamentals');
            break;

          case 'frontend':
            setCurrentSubField('Frontend Development');
            break;

          case 'backend':
            setCurrentSubField('Backend Development');
            break;

          case 'Database':
            setCurrentSubField('Database Integration');
            break;
        }
        break;
      default:
        setCurrentField('');
    }
  }, [params]);
  return (
    <div className="min-h-screen mt-[10vh] p-[2rem]">
      <Breadcrumbs
        currentField={currentField}
        currentSubField={currentSubField}
      />

      <div className="text-3xl font-bold tracking-wider capitalize mb-[1.5rem]">
        {currentSubField}
      </div>

      <div className="sm:flex-1 m-0 w-[50vw] grid gap-5">
        {QuestionData.map((data) => (
          <FieldCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

function Breadcrumbs({
  currentField,
  currentSubField,
}: {
  currentField: string;
  currentSubField: string;
}) {
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
        <BreadcrumbItem>
          <Link
            href={`/explore/${currentField.toLowerCase()}`}
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            {currentField}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>{currentSubField}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
