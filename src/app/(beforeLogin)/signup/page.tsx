'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/signup');

  // /i/flow/signup라우터로 replace해주면서 뒤에 깔리는 화면
  return <Main />;
}
