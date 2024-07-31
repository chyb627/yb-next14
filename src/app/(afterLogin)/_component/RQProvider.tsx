'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, // 다른탭 갔다가 다시 돌아왔을 때 (탭 전환시)
          retryOnMount: true, // 컴포넌트가 언마운트 되었다 다시 마운트 되는 경우
          refetchOnReconnect: false, // 인터넷 연길이 끊겼다가 다시 접속이 되는 순간
          retry: false, // 실패했을때 다시 시도할 수 있는 횟수를 설정
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
}

export default RQProvider;
