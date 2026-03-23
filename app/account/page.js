import Link from "next/link";
import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "../../utils/supabase/env";
import { createClient } from "../../utils/supabase/server";
import { logoutAction } from "./actions";

export const metadata = {
  title: "Account | Ofir Dror Music Production",
};

export default async function AccountPage() {
  if (!hasSupabaseEnv()) {
    redirect("/login?error=Auth+is+not+configured+yet");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?error=Please+login+first");
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <p className="auth-kicker">Account</p>
        <h1>Welcome</h1>
        <p className="auth-note">You are signed in as:</p>
        <p className="auth-user">{user.email}</p>
        <p className="auth-subtle">User ID: {user.id}</p>

        <div className="auth-actions">
          <Link href="/" className="cta secondary">Back to site</Link>
          <form action={logoutAction}>
            <button type="submit" className="cta primary">Logout</button>
          </form>
        </div>
      </section>
    </main>
  );
}
