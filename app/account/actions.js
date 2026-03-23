"use server";

import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "../../utils/supabase/env";
import { createClient } from "../../utils/supabase/server";

export async function logoutAction() {
  if (!hasSupabaseEnv()) {
    redirect("/login?error=Auth+is+not+configured+yet");
  }

  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login?success=Logged+out");
}
