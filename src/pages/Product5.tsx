import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

const Product5: React.FC = () => {
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
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097967300_b63fb5c9.webp"
              alt="Cortexi"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cortexi Review
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(4.4)}</div>
                <span className="ml-2 text-lg font-semibold">4.4/5</span>
                <span className="ml-2 text-gray-600">(Based on 30-day test)</span>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-3">My Verdict</h3>
              <p className="text-orange-700">
                Cortexi provided noticeable support for my hearing health. While results were gradual, 
                I experienced improved clarity and reduced ear discomfort during my 30-day trial.
              </p>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
              Get Cortexi (Official Site)
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
              <li>• Natural hearing support formula</li>
              <li>• Antioxidant-rich ingredients</li>
              <li>• Easy liquid dropper format</li>
              <li>• 60-day money-back guarantee</li>
              <li>• No reported side effects</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Subtle improvements take time</li>
              <li>• Not a cure for hearing loss</li>
              <li>• Requires consistent daily use</li>
              <li>• Premium pricing point</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Hearing Health Experience</h2>
          <p className="text-gray-700 mb-6">
            Years of exposure to loud environments left me concerned about my hearing health. 
            Cortexi's natural approach to auditory support made it worth trying as a preventive measure.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Progress Report:</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 1:</h4>
              <p>Started with recommended dosage. Pleasant taste, easy to incorporate into routine.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 2:</h4>
              <p>Slight improvement in clarity during conversations in noisy environments.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 3-4:</h4>
              <p>Reduced ear discomfort and improved overall auditory comfort. Positive results.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-orange-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Your Hearing Health</h3>
          <p className="text-gray-700 mb-6">
            Don't wait for hearing issues to worsen. Cortexi offers natural support with a 60-day guarantee.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
            Get Cortexi Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product5;