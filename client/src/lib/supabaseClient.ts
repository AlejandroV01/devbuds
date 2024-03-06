import { createClient } from '@supabase/supabase-js'
import { Database } from '../lib/supabase'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnon = import.meta.env.VITE_ANON_KEY

const supabase = createClient<Database>(supabaseUrl, supabaseAnon)

export default supabase
