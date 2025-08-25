import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

const Product2: React.FC = () => {
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
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097957242_06f9d1e8.webp"
              alt="Aizen Power"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aizen Power Review
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(4.7)}</div>
                <span className="ml-2 text-lg font-semibold">4.7/5</span>
                <span className="ml-2 text-gray-600">(Based on 30-day test)</span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">My Verdict</h3>
              <p className="text-blue-700">
                Aizen Power delivered impressive results in enhancing performance and confidence. 
                The natural formula provides sustained benefits without harsh side effects.
              </p>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              Get Aizen Power (Official Site)
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
              <li>• Clinically proven ingredients</li>
              <li>• Enhanced performance and stamina</li>
              <li>• 180-day money-back guarantee</li>
              <li>• No prescription required</li>
              <li>• Discreet shipping</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Results vary by individual</li>
              <li>• Requires consistent daily use</li>
              <li>• Not available in stores</li>
              <li>• Higher price point</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Honest Experience</h2>
          <p className="text-gray-700 mb-6">
            After researching Aizen Power extensively, I decided to give it a try. The ingredient 
            profile looked promising, and the 180-day guarantee provided confidence in the purchase.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Timeline of Results:</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Days 1-7:</h4>
              <p>Initial adjustment period. Mild improvements in energy and focus.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Days 8-21:</h4>
              <p>Noticeable enhancement in performance and confidence levels.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Days 22-30:</h4>
              <p>Sustained improvements with consistent daily use. Very satisfied with results.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Try Aizen Power?</h3>
          <p className="text-gray-700 mb-6">
            The 180-day guarantee makes this a risk-free investment in your health and confidence.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Get Aizen Power Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product2;