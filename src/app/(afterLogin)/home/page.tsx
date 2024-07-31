import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import PostRecommends from './_component/PostRecommends';
import TabDeciderSuspense from './_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        {/* 추천/팔로우중 탭 */}
        <Tab />

        <PostForm />

        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>

        <PostRecommends />
      </TabProvider>
    </main>
  );
}
