import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import PostRecommends from './_component/PostRecommends';
import TabDecider from './_component/TabDecider';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  queryClient.getQueryData(['posts', 'recommends']);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />

          <PostForm />

          <TabDecider />

          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
