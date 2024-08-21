import { tncContent } from '@/components/landing/footer/tnc/tncContent';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col items-start justify-center -mt-6 mb-12 px-4 md:px-36">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 w-full text-center md:max-w-screen-2xl mx-auto">
        Terms & Conditions
      </h1>
      {tncContent.map((item) => {
        return (
          <div className="my-6 font-normal text-lg" key={item.id}>
            <p>{item.description}</p>
            {item.points?.map((point) => {
              return (
                <p className="my-3" key={point.id}>
                  {point.id}
                  {'. '}
                  {point.description}
                </p>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
