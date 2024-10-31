import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Validate the incoming post data
  if (username === 'user' && password === 'pass') {
    

    return NextResponse.json({ message: 'Logged in' });
  }

  return NextResponse.json({ error: 'wrong password or username please try again' }, { status: 401 });
}

export async function GET() {
  const response = NextResponse.json({ message: 'Logged out' });
  return response;
}