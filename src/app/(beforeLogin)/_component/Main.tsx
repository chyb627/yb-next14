import styles from '@/app/(beforeLogin)/_component/main.module.css';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={Logo} alt="logo" />
      </div>

      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 영차영차에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
