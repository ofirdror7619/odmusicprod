import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import { hasSupabaseEnv } from "../../utils/supabase/env";
import { authAction } from "./actions";

export const metadata = {
  title: "Login | Ofir Dror Music Production",
};

export default async function LoginPage({ searchParams }) {
  if (!hasSupabaseEnv()) {
    return (
      <main className="auth-shell">
        <section className="auth-card">
          <p className="auth-kicker">Auth Setup Needed</p>
          <h1>Supabase is not configured</h1>
          <p className="auth-note">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to your `.env.local` and Vercel env settings.
          </p>
          <p className="auth-subtle">See SUPABASE_SETUP.md for the exact steps.</p>
          <Link href="/" className="auth-back">Back to site</Link>
        </section>
      </main>
    );
  }

  const params = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/account");
  }

  const errorMessage = params?.error;
  const successMessage = params?.success;

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <p className="auth-kicker">Member Access</p>
        <h1>Login / Sign Up</h1>
        <p className="auth-note">Use your email and password to access your account.</p>

        {errorMessage ? <p className="auth-error">{errorMessage}</p> : null}
        {successMessage ? <p className="auth-success">{successMessage}</p> : null}

        <form className="auth-form" action={authAction}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required autoComplete="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required autoComplete="current-password" minLength={6} />

          <div className="auth-actions">
            <button type="submit" className="cta primary" name="intent" value="login">Login</button>
            <button type="submit" className="cta secondary" name="intent" value="signup">Sign Up</button>
          </div>
        </form>

        <Link href="/" className="auth-back">Back to site</Link>
      </section>
    </main>
  );
}
