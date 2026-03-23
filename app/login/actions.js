"use server";

import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "../../utils/supabase/env";
import { createClient } from "../../utils/supabase/server";

function buildRedirect(path, messageType, message) {
  const params = new URLSearchParams();
  params.set(messageType, message);
  return `${path}?${params.toString()}`;
}

export async function authAction(formData) {
  if (!hasSupabaseEnv()) {
    redirect(buildRedirect("/login", "error", "Auth is not configured yet."));
  }

  const intent = formData.get("intent")?.toString();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    redirect(buildRedirect("/login", "error", "Email and password are required."));
  }

  const supabase = await createClient();
  if (intent === "signup") {
    const appUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${appUrl}/auth/confirm?next=/account`,
      },
    });

    if (error) {
      redirect(buildRedirect("/login", "error", error.message));
    }

    if (!data.session) {
      redirect(buildRedirect("/login", "success", "Check your email to confirm your account."));
    }

    redirect("/account");
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(buildRedirect("/login", "error", error.message));
  }

  redirect("/account");
}
