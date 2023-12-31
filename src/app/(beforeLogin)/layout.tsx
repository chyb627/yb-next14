import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3001일 경우 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3001/i/flow/login일 경우 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
