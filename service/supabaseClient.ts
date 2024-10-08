import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

//エラーハンドリング
if (!supabaseUrl) {
  throw new Error("Supabase URL is not defined.");
}
if (!supabaseKey) {
  throw new Error("Supabase Key is not defined.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);


