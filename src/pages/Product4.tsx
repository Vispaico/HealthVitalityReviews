import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

const Product4: React.FC = () => {
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
              src="https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097964003_b5bb7ed1.webp"
              alt="Lean Bliss"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lean Bliss Review
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(4.5)}</div>
                <span className="ml-2 text-lg font-semibold">4.5/5</span>
                <span className="ml-2 text-gray-600">(Based on 6-week test)</span>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-3">My Verdict</h3>
              <p className="text-purple-700">
                Lean Bliss helped curb my cravings and supported healthy weight management. 
                The natural approach to appetite control impressed me with gradual, sustainable results.
              </p>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
              Get Lean Bliss (Official Site)
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
              <li>• Natural appetite suppression</li>
              <li>• Supports healthy metabolism</li>
              <li>• No jittery side effects</li>
              <li>• 180-day money-back guarantee</li>
              <li>• Helps control sugar cravings</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Gradual results require patience</li>
              <li>• Best combined with healthy diet</li>
              <li>• Individual results may vary</li>
              <li>• Only available online</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Weight Management Journey</h2>
          <p className="text-gray-700 mb-6">
            Struggling with late-night cravings and portion control, I was looking for natural support. 
            Lean Bliss caught my attention with its unique approach to blood sugar balance and appetite control.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">6-Week Transformation:</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Weeks 1-2:</h4>
              <p>Reduced sugar cravings, especially in the afternoon. More stable energy levels.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Weeks 3-4:</h4>
              <p>Noticeable reduction in portion sizes. Feeling satisfied with smaller meals.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Weeks 5-6:</h4>
              <p>Lost 8 pounds naturally. Improved relationship with food and eating habits.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Weight Management Journey</h3>
          <p className="text-gray-700 mb-6">
            Take control of your cravings naturally. Lean Bliss offers a gentle approach with a 180-day guarantee.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
            Get Lean Bliss Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product4;