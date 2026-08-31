'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function AnalyticsLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && (window as any).gtag) {
      let url = pathname;
      if (searchParams && searchParams.toString()) {
        url += `?${searchParams.toString()}`;
      }
      
      (window as any).gtag('config', 'G-XMJVYKG0YD', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsLogic />
    </Suspense>
  );
}
