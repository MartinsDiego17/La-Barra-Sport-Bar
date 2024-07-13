require('dotenv').config;
import { createClient } from '@supabase/supabase-js';
export const supabaseClient = createClient('https://xyzcompany.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);