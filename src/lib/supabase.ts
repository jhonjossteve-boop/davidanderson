import { createClient } from '@supabase/supabase-js';

// Initialize database client
const supabaseUrl = 'https://vicobqttdpwjkalfwtzo.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImQyMjc3NWNkLTBhYzQtNGJjOS1iYjY0LWQ3MzgzMTcxOTBhYSJ9.eyJwcm9qZWN0SWQiOiJ2aWNvYnF0dGRwd2prYWxmd3R6byIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzcwMjMwNTg4LCJleHAiOjIwODU1OTA1ODgsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.fSO9SgdYRDXoYbeW6Ffl5dmEzXtutZZzRcyzb0FVZhY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Types for subscribers table
export interface Subscriber {
  id?: string;
  email: string;
  plan_type: string;
  plan_name: string;
  plan_price: number;
  plan_duration_months: number;
  purchase_code: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
  status?: 'active' | 'expired' | 'cancelled' | 'pending';
  created_at?: string;
  updated_at?: string;
}

// Function to add a new subscriber
export async function addSubscriber(subscriber: Omit<Subscriber, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Subscriber | null; error: Error | null }> {
  // Calculate subscription end date based on plan duration
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + subscriber.plan_duration_months);

  const { data, error } = await supabase
    .from('subscribers')
    .insert([
      {
        ...subscriber,
        subscription_start_date: startDate.toISOString(),
        subscription_end_date: endDate.toISOString(),
        status: 'active',
      },
    ])
    .select()
    .single();

  return { data, error: error as Error | null };
}

// Function to check if email already exists
export async function checkEmailExists(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('subscribers')
    .select('email')
    .eq('email', email.toLowerCase())
    .single();

  return !error && data !== null;
}

// Function to get subscriber by email
export async function getSubscriberByEmail(email: string): Promise<Subscriber | null> {
  const { data, error } = await supabase
    .from('subscribers')
    .select('*')
    .eq('email', email.toLowerCase())
    .single();

  if (error) return null;
  return data;
}

// Function to get all active subscribers
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  const { data, error } = await supabase
    .from('subscribers')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) return [];
  return data || [];
}

// Function to update subscriber status
export async function updateSubscriberStatus(
  email: string,
  status: 'active' | 'expired' | 'cancelled' | 'pending'
): Promise<boolean> {
  const { error } = await supabase
    .from('subscribers')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('email', email.toLowerCase());

  return !error;
}

export { supabase };
