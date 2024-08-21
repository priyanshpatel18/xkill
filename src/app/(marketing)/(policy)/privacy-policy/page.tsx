import { privacyPolicyContent } from '@/components/landing/footer/privacy-policy/privacy-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-start justify-center -mt-6 mb-12 px-4 md:px-36">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 w-full text-center md:max-w-screen-2xl mx-auto">
        Privacy Policy
      </h1>
      {privacyPolicyContent.map((item) => {
        return (
          <div className="my-6 font-normal text-lg" key={item.id}>
            <p>{item.description}</p>
          </div>
        );
      })}
    </main>
  );
}
