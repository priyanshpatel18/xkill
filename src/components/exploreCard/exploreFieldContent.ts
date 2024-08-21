import { StaticImageData } from 'next/image';
import programmingBG from '@/assets/programmingBG.png';
import osBG from '@/assets/osBG.png';
import dbmsBG from '@/assets/dbmsBG.png';
import webBG from '@/assets/webBG.png';
import appBG from '@/assets/appBG.png';

export interface subFieldType {
  id: number;
  title: string;
  redirectLink: string;
}
export interface exploreCardType {
  id: number;
  title: string;
  redirectLink: string;
  bgImage: StaticImageData;
  subFields: subFieldType[];
}

export const exploreFields: exploreCardType[] = [
  {
    id: 1,
    title: 'Programming',
    redirectLink: '/programming',
    bgImage: programmingBG,
    subFields: [
      {
        id: 1,
        title: 'Introduction to Programming',
        redirectLink: '/programming/intro',
      },
      {
        id: 2,
        title: 'Control Structures',
        redirectLink: '/programming/control-structures',
      },
      {
        id: 3,
        title: 'Functions and Methods',
        redirectLink: '/programming/functions-and-methods',
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        redirectLink: '/programming/oop',
      },
      {
        id: 5,
        title: 'Advanced Programming',
        redirectLink: '/programming',
      },
    ],
  },
  {
    id: 2,
    title: 'Operating Systems',
    redirectLink: '/os',
    bgImage: osBG,
    subFields: [
      {
        id: 1,
        title: 'Process Management',
        redirectLink: '/os/process-management',
      },
      {
        id: 2,
        title: 'Memory Management',
        redirectLink: '/os/memory-management',
      },
      {
        id: 3,
        title: 'File Systems',
        redirectLink: '/os/file-systems',
      },
      {
        id: 4,
        title: 'Concurrency and Synchronization',
        redirectLink: '/os/concurrency-and-synchronization',
      },
      {
        id: 5,
        title: 'Virtualization and Containers',
        redirectLink: '/os/virtualization-and-containers',
      },
    ],
  },
  {
    id: 3,
    title: 'Database Management Systems',
    redirectLink: '/dbms',
    bgImage: dbmsBG,
    subFields: [
      {
        id: 1,
        title: 'Core Concepts',
        redirectLink: '/dbms/core',
      },
      {
        id: 2,
        title: 'RDBMS',
        redirectLink: '/dbms/rdbms',
      },
      {
        id: 3,
        title: 'Database Design and Normalization',
        redirectLink: '/dbms/design-and-normalization',
      },
      {
        id: 4,
        title: 'Querying and SQL',
        redirectLink: '/dbms/querying-and-sql',
      },
      {
        id: 5,
        title: 'Transactions and Concurrency',
        redirectLink: '/dbms/transactions-and-concurrency',
      },
    ],
  },
  {
    id: 4,
    title: 'Web Development',
    redirectLink: '/web',
    bgImage: webBG,
    subFields: [
      {
        id: 1,
        title: 'Basics',
        redirectLink: '/web/basics',
      },
      {
        id: 2,
        title: 'JavaScript Fundamentals',
        redirectLink: '/web/javascript',
      },
      {
        id: 3,
        title: 'Frontend Frameworks',
        redirectLink: '/web/frontend',
      },
      {
        id: 4,
        title: 'Backend Development',
        redirectLink: '/web/backend',
      },
      {
        id: 5,
        title: 'Database Integration',
        redirectLink: '/web/database',
      },
    ],
  },
  {
    id: 5,
    title: 'Mobile App Development',
    redirectLink: '/app',
    bgImage: appBG,
    subFields: [
      {
        id: 1,
        title: 'Introduction to Mobile Development',
        redirectLink: '/app/intro',
      },
      {
        id: 2,
        title: 'Native App Development',
        redirectLink: '/app/native',
      },
      {
        id: 3,
        title: 'Cross-Platform App Development',
        redirectLink: '/app/cross-platform',
      },
      {
        id: 4,
        title: 'User Interface (UI) Design',
        redirectLink: '/app/ui',
      },
      {
        id: 5,
        title: 'Backend Integration and APIs',
        redirectLink: '/app/backend',
      },
    ],
  },
];
