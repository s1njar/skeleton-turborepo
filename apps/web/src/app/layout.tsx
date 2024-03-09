import './global.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';

export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
        <Analytics />
      </ClerkProvider>
    </html>
  );
}
