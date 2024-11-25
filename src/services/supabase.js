import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nhdgzolamhrrfimffaiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZGd6b2xhbWhycmZpbWZmYWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyOTQ3NDUsImV4cCI6MjA0Nzg3MDc0NX0.RggQlyyc4Nld2Y7HqOLaIIKjkH_pnOkbbFOFyawelhI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
