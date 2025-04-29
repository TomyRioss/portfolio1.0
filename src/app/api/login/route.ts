import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const validEmail = process.env.USER;
  const validPassword = process.env.PASSWORD;

  if (email === validEmail && password === validPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('loggedIn', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });
    return response;
  }

  console.log(validEmail, validPassword);

  return NextResponse.json({ success: false }, { status: 401 });
}
