// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://erukfoeyotxjkwycxamf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydWtmb2V5b3R4amt3eWN4YW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODk3MTMsImV4cCI6MjA2Njg2NTcxM30.rWUTf4zBDB1AaOn_Gin9EB1cc8c5l5L3zIzs4rAGVIs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});