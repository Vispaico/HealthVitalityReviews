import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    const { error } = await supabase.functions.invoke('subscribe', {
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (error) {
      setMessage('An error occurred. Please try again.');
      setIsError(true);
      console.error('Error invoking function:', error);
    } else {
      setMessage('Success! Check your email for the guide.');
      setIsError(false);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <Gift className="h-16 w-16 text-green-600 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Don't Miss Out!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Get my free 'Daily Small Steps to near Immortality' guide and stay updated on new reviews, 
            exclusive discounts, and health tips that actually work.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                  disabled={loading}
                />
              </div>
              <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : 'Get Free Guide'}
              </Button>
            </div>
          </form>

          {message && (
            <div className={`mt-4 flex items-center justify-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
              {isError ? <XCircle className="mr-2" /> : <CheckCircle className="mr-2" />}
              {message}
            </div>
          )}

          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>✓ No spam ever</span>
            <span>✓ Unsubscribe anytime</span>
            <span>✓ 10,000+ subscribers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;