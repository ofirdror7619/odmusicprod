import { NextResponse } from "next/server";
import { hasSupabaseEnv } from "../../../utils/supabase/env";
import { createClient } from "../../../utils/supabase/server";

export async function GET(request) {
  if (!hasSupabaseEnv()) {
    return NextResponse.redirect(new URL("/login?error=Auth+is+not+configured+yet", request.url));
  }

  const requestUrl = new URL(request.url);
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type");
  const next = requestUrl.searchParams.get("next") || "/account";

  if (!tokenHash || !type) {
    return NextResponse.redirect(new URL("/login?error=Missing+confirmation+token", request.url));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash: tokenHash,
  });

  if (error) {
    return NextResponse.redirect(new URL("/login?error=Invalid+or+expired+confirmation+link", request.url));
  }

  return NextResponse.redirect(new URL(next, request.url));
}
