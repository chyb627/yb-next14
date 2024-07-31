type Props = { pageParam?: number };
export async function getPostRecommends({ pageParam }: Props) {
  const res = await fetch(`http://localhost:6628/api/postRecommends?cursor=${pageParam}`, {
    next: {
      tags: ['posts', 'recommends'], // revalidate에서 캐시 초기화를 하기위한태그
    },
    // cache: 'no-store' // 캐시를 안할때 사용
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// 서버에 있는 캐시 날리는 next서버에서 제공하는 태그
// revalidateTag("recommends")

// home folder에 관련된 모든 요청들을 새로고침함
// revalidatePath('/home')
