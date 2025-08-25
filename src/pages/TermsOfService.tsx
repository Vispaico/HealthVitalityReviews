import React from 'react';
import AppLayout from '@/components/AppLayout';

const TermsOfService: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            By accessing the website at{' '}
            <a href="https://healthvitalityreviews.com">https://healthvitalityreviews.com</a>, you are agreeing to be
            bound by these terms of service, all applicable laws and regulations, and agree that you are responsible
            for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            Health Vitality Reviews' website for personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on Health Vitality Reviews' website;
            </li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>
              transfer the materials to another person or "mirror" the materials on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated
            by Health Vitality Reviews at any time.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Disclaimer</h2>
          <p>
            The materials on Health Vitality Reviews' website are provided on an 'as is' basis. Health Vitality
            Reviews makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Health Vitality Reviews does not warrant or make any representations concerning the accuracy,
            likely results, or reliability of the use of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </p>
          <p>
            The information provided on this website is for informational purposes only and is not intended as a
            substitute for advice from your physician or other health care professional. You should not use the
            information on this site for diagnosis or treatment of any health problem or for prescription of any
            medication or other treatment.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Limitations</h2>
          <p>
            In no event shall Health Vitality Reviews or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Health Vitality Reviews' website, even if Health Vitality Reviews or
            a Health Vitality Reviews authorized representative has been notified orally or in writing of the
            possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States
            and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default TermsOfService;