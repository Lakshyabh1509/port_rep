import { json, createCookieSessionStorage } from '@remix-run/node';

// Get session secret from environment (works on Vercel, Netlify, and Cloudflare)
function getSessionSecret(context) {
  // Cloudflare Pages
  if (context?.cloudflare?.env?.SESSION_SECRET) {
    return context.cloudflare.env.SESSION_SECRET;
  }
  // Vercel / Netlify / Node.js
  if (typeof process !== 'undefined' && process.env?.SESSION_SECRET) {
    return process.env.SESSION_SECRET;
  }
  // Fallback
  return 'default-secret-change-in-production';
}

export async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [getSessionSecret(context)],
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  session.set('theme', theme);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
