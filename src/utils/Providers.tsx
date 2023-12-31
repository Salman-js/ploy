import { MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <MantineProvider>{children}</MantineProvider>;
}
