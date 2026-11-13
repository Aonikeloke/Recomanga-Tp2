// Conexión con Supabase. Es el ÚNICO lugar donde se escriben la URL y la clave.
// Los otros archivos (auth.js, series.js) importan "supabase" desde acá.

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.8/+esm";

// URL del proyecto: SOLO "https://xxxx.supabase.co" (sin /rest/v1/ al final).
const SUPABASE_URL = "https://fuvwuqmodwxpxtnphqop.supabase.co";

// Publishable key (antes llamada anon key). Es pública: la seguridad la dan las policies (RLS).
const SUPABASE_KEY = "sb_publishable_f6XqJ7owB-pPZJIo-7kEUg_A2qmSJ72";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
