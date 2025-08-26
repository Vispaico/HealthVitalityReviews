import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.0.0';
import { Resend } from 'https://esm.sh/resend@3.4.0';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const GUIDE_URL = 'https://healthvitalityreviews.com/downloads/Daily%20Small%20Steps%20to%20near%20Immortality.pdf';

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Or 'https://www.healthvitalityreviews.com' for better security
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('PROJECT_URL') ?? '',
      Deno.env.get('ANON_KEY') ?? ''
    );

    const { error } = await supabase.from('subscribers').insert({ email });

    if (error) {
      console.error('Error inserting email into Supabase:', error);
      return new Response(JSON.stringify({ error: 'Error saving email' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@healthvitalityreviews.com',
      to: email,
      subject: 'Your Guide to Near Immortality!',
      html: `
        <h1>Thank you for subscribing!</h1>
        <p>You can download your free guide, "Daily Small Steps to near Immortality," by clicking the link below:</p>
        <a href="${GUIDE_URL}">Download Your Guide</a>
      `,
    });

    return new Response(JSON.stringify({ message: 'Successfully subscribed!' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});