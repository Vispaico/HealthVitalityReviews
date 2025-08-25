import React from 'react';
import AppLayout from '@/components/AppLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            Your privacy is important to us. It is Health Vitality Reviews' policy to respect your privacy regarding any
            information we may collect from you across our website,{' '}
            <a href="https://healthvitalityreviews.com">https://healthvitalityreviews.com</a>, and other sites we own and
            operate.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information we collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by
            fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and
            how it will be used.
          </p>
          <p>
            The only personal information we collect is your email address when you voluntarily sign up for our newsletter.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How we use your information</h2>
          <p>
            We use your email address to send you our newsletter, which includes updates, articles, and promotional
            offers related to health and wellness products. You can unsubscribe from our newsletter at any time by
            clicking the "unsubscribe" link in the footer of our emails.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Security</h2>
          <p>
            We are committed to protecting the security of your personal information. We use a variety of security
            technologies and procedures to help protect your personal information from unauthorized access, use, or
            disclosure.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Cookies</h2>
          <p>
            We use cookies to store information about your preferences and to personalize the content you see. You can
            choose to disable cookies in your browser settings, but this may affect your ability to use some features
            of our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Links to other sites</h2>
          <p>
            Our website may contain links to other sites that are not operated by us. If you click on a third-party
            link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy
            of every site you visit. We have no control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Changes to this Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:contact@healthvitalityreviews.com">contact@healthvitalityreviews.com</a>.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;