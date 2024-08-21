import ExploreCard from '@/components/exploreCard/ExploreCard';
import { exploreFields } from '@/components/exploreCard/exploreFieldContent';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';

export const metadata: Metadata = {
  title: 'Explore',
};

export default function ExplorePage() {
  return (
    <div className="mt-[10vh] p-[2rem]">
      <Breadcrumbs />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exploreFields.map((field) => (
          <ExploreCard
            key={field.id}
            title={field.title}
            subFields={field.subFields}
            bgImage={field.bgImage}
            redirectLink={field.redirectLink}
          />
        ))}
      </div>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <Breadcrumb className="capitalize text-[1rem] text-primary mb-[1rem]">
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
        <BreadcrumbPage>Explore</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
