import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default async function HomeLayout({ children }: Props) {
  return <div>{children}</div>;
}
