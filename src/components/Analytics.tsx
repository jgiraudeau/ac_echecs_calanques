'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface WindowWithGtag extends Window {
  gtag?: (...args: unknown[]) => void;
}

function AnalyticsLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const win = typeof window !== 'undefined' ? (window as WindowWithGtag) : null;
    if (pathname && win?.gtag) {
      let url = pathname;
      if (searchParams && searchParams.toString()) {
        url += `?${searchParams.toString()}`;
      }
      
      win.gtag('config', 'G-XMJVYKG0YD', {
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
