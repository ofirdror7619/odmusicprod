# Supabase Auth Setup

## 1) Create Supabase project
- Go to Supabase and create a new project.
- In project settings, copy:
  - `Project URL`
  - `anon public key`

## 2) Configure environment variables
Set these locally in `.env.local` and in Vercel project settings:

- `NEXT_PUBLIC_SITE_URL`
  - Local: `http://localhost:3000`
  - Production: your real domain (for example `https://yourdomain.com`)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3) Configure Supabase Auth URL settings
In Supabase Dashboard -> Authentication -> URL Configuration:

- Set **Site URL** to your production site URL.
- Add redirect URLs:
  - `http://localhost:3000/auth/confirm`
  - `https://yourdomain.com/auth/confirm`

## 4) Run app
```bash
npm run dev
```

Then open `/login`:
- **Sign Up** creates account
- **Login** signs in
- `/account` is protected

## 5) Optional: if email confirmation is enabled
New users receive a confirmation email.
They must click the link before login if your Supabase auth settings require it.
