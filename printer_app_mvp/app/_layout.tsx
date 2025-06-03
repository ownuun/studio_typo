import { Slot, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // 경로 주의

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/');      // ✅ 로그인 상태면 홈으로
      } else {
        router.replace('/login'); // ✅ 아니면 로그인 화면으로
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return null; // 또는 로딩 스피너

  return <Slot />; // 👈 나머지 라우트 출력
}
