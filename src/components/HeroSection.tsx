import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Honest Reviews of Top Health Supplements to{' '}
                <span className="text-green-600">Boost Your Vitality</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Hi, I'm Neil! I test and review health products to help you find what works. 
                Get my free '7-Day Vitality Boost Guide' below!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8">
                  Get Free Guide
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Join 10,000+ health enthusiasts. No spam, unsubscribe anytime.
              </p>
            </form>
          </div>

          <div className="relative">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097951026_bd0061cb.webp"
              alt="Health supplement reviewer with various bottles"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;