import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

const Product1: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097954330_c094591b.webp"
              alt="Emperor's Vigor Tonic"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emperor's Vigor Tonic Review
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(4.8)}</div>
                <span className="ml-2 text-lg font-semibold">4.8/5</span>
                <span className="ml-2 text-gray-600">(Based on 30-day test)</span>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">My Verdict</h3>
              <p className="text-green-700">
                After 30 days of testing, Emperor's Vigor Tonic significantly boosted my energy levels 
                and improved my overall vitality. The natural ingredients work synergistically for sustained results.
              </p>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
              Get Emperor's Vigor Tonic (Official Site)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Pros
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>• Natural energy boost without jitters</li>
              <li>• Improved stamina and endurance</li>
              <li>• 60-day money-back guarantee</li>
              <li>• No artificial stimulants</li>
              <li>• Noticeable results within 2 weeks</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Only available on official website</li>
              <li>• Premium pricing</li>
              <li>• Takes 1-2 weeks for full effects</li>
              <li>• Limited stock availability</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My 30-Day Experience</h2>
          <p className="text-gray-700 mb-6">
            I started taking Emperor's Vigor Tonic with realistic expectations. As someone who's tried 
            numerous energy supplements, I was skeptical but hopeful. The first week showed minimal changes, 
            but by day 10, I noticed sustained energy throughout the day without the afternoon crash.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Week-by-Week Breakdown:</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 1:</h4>
              <p>Subtle improvements in morning energy. No side effects noticed.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 2:</h4>
              <p>Significant boost in afternoon energy. Less reliance on coffee.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 3-4:</h4>
              <p>Consistent energy levels, improved workout performance, better sleep quality.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-orange-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Try Emperor's Vigor Tonic?</h3>
          <p className="text-gray-700 mb-6">
            Based on my experience, this supplement delivers on its promises. 
            The 60-day guarantee makes it risk-free to try.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
            Get Emperor's Vigor Tonic Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product1;