import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold text-white mb-4">Health Vitality Reviews</a>
            <p className="text-gray-300 my-4">
              Honest, research-backed reviews of health supplements to help you make informed decisions 
              about your wellness journey.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:contact@healthvitalityreviews.com">
                contact@healthvitalityreviews.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/product1" className="text-gray-300 hover:text-white transition-colors">Emperor's Vigor Tonic</a></li>
              <li><a href="/product2" className="text-gray-300 hover:text-white transition-colors">Aizen Power</a></li>
              <li><a href="/product3" className="text-gray-300 hover:text-white transition-colors">SightCare</a></li>
              <li><a href="/product4" className="text-gray-300 hover:text-white transition-colors">Lean Bliss</a></li>
              <li><a href="/product5" className="text-gray-300 hover:text-white transition-colors">Cortexi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="mailto:contact@healthvitalityreviews.com" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Health Vitality Reviews. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              <strong>Affiliate Disclaimer:</strong> This site contains affiliate links. 
              I earn a commission at no cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;