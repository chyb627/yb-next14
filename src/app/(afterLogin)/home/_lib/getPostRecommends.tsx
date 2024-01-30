export async function getPostRecommends() {
  const res = await fetch('http://localhost:6628/api/postRecommends', {
    next: {
      tags: ['posts', 'recommends'],
    },
    // cache: 'no-store' // 캐싱을 안할려면 다음을 넣어줘야함
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
