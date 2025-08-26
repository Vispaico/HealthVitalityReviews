import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Shield, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Trust My Reviews?
            </h2>
            
            <p className="text-lg text-gray-600">
              I'm Neil, a dad of 3 and health enthusiast sharing honest reviews of supplements 
              I've researched and tested. My goal? Help you make informed choices without the hype.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Products Tested</div>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Readers Helped</div>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              Follow My Journey on X
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=3299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Neil - Health supplement reviewer"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Trust Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;