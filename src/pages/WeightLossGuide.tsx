import React from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const WeightLossGuide: React.FC = () => {
  return (
    <AppLayout>
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Simple Way How I Lost 10 Kg in 5 Weeks
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              A detailed account of my personal journey, the methods I used, and the results I achieved.
            </p>
          </div>

          <div className="mt-12 prose prose-lg max-w-none text-gray-700">
            <p>
              Welcome to my detailed guide on how I managed to lose 10 kilograms in just 5 weeks. This isn't about a magic pill or an extreme, unsustainable diet. It's about a series of simple, consistent changes that led to significant results. I'm sharing my story to show you what's possible with the right approach.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Chapter 1: The Mindset Shift</h2>
            <p>
              Before I changed what I ate or how I moved, I had to change how I thought. This chapter covers the mental preparation that was crucial for my success. I'll discuss setting realistic goals, finding your "why," and building the discipline to see it through.
            </p>
            {/* You can add more content here */}

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Chapter 2: My Simple Eating Plan</h2>
            <p>
              I didn't count every calorie. Instead, I focused on a few key principles: whole foods, portion control, and nutrient timing. I'll break down what a typical day of eating looked like for me, including my go-to meals and snacks that kept me full and energized.
            </p>
            {/* You can add more content here */}

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Chapter 3: The Workout Routine (That Wasn't Insane)</h2>
            <p>
              You don't have to spend hours in the gym. My approach was based on efficient, effective workouts that could be done in 30-45 minutes. I'll share the exact exercises and weekly schedule that helped me burn fat without burning out.
            </p>
            {/* You can add more content here */}
          </div>

          <div className="mt-12 text-center">
            <a href="/downloads/Daily Small Steps to near Immortality.pdf" download>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Download className="h-5 w-5 mr-2" />
                Download The Full Guide PDF
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500">Get the complete, detailed guide to follow along at your own pace.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default WeightLossGuide;