import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

const Product3: React.FC = () => {
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
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097960812_e6260546.webp"
              alt="SightCare"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SightCare Review
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(4.6)}</div>
                <span className="ml-2 text-lg font-semibold">4.6/5</span>
                <span className="ml-2 text-gray-600">(Based on 30-day test)</span>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">My Verdict</h3>
              <p className="text-green-700">
                SightCare showed promising results for eye health support. I experienced improved 
                visual clarity and reduced eye strain, especially during long computer sessions.
              </p>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
              Get SightCare (Official Site)
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
              <li>• Supports healthy vision</li>
              <li>• Reduces digital eye strain</li>
              <li>• Natural antioxidant formula</li>
              <li>• 60-day money-back guarantee</li>
              <li>• Easy to swallow capsules</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Results take time to manifest</li>
              <li>• Must be taken consistently</li>
              <li>• Not suitable for severe conditions</li>
              <li>• Limited availability</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Eye Health Journey</h2>
          <p className="text-gray-700 mb-6">
            As someone who spends 8+ hours daily on screens, eye health is crucial for me. 
            I noticed increasing eye strain and decided to try SightCare based on its natural ingredient profile.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Progress:</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 1:</h4>
              <p>Started taking 2 capsules daily. No immediate changes but no side effects.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 2:</h4>
              <p>Slight reduction in end-of-day eye fatigue. Colors seemed more vivid.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Week 3-4:</h4>
              <p>Significant improvement in visual comfort during long work sessions.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Vision Today</h3>
          <p className="text-gray-700 mb-6">
            Don't wait until eye problems worsen. SightCare offers natural support with a 60-day guarantee.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
            Get SightCare Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product3;