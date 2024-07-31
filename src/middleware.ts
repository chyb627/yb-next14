import { auth } from './auth';
import { NextResponse } from 'next/server';

// matcher에 등록된 페이지 랜더링전에 호출되는 함수.
// 예를들어 로그인이 되었으면 통과. 로그인이 안되었으면 로그인페이지로 돌려보냄.
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:6627/i/flow/login');
  }
}

// 미들웨어로 로그인 한 사람만 접속을 할 수 있게 하는 등의 기능을 만들 수 있다.
// 미들웨어를 적용할 라우트
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
