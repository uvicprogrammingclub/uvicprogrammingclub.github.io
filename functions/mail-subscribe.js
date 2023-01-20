export const onRequestPost = async ({request, env}) => {
  const body = await request.formData();
  const email = body.get('email');

  if (typeof email !== 'string') {
    return new Response('bad request', {
      status: 400,
    });
  }

  const token = body.get('cf-turnstile-response');
  const ip = request.headers.get('CF-Connecting-IP');

  const formData = new FormData();
  formData.append('secret', env.TURNSTILE_SECRET);
  formData.append('response', token);
  formData.append('remoteip', ip);

  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();

  if (!outcome.success) {
    return new Response(`Failed to sign up: ${outcome['error-codes']}`, {
      status: 403,
    });
  }

  await env.MAILING_LIST_DB
    .prepare('INSERT INTO signups (email, timestamp) VALUES (?1, ?2)')
    .bind(email, Math.floor(Date.now() / 60_000))
    .run();

  return new Response('Signed up successfully!');
};
