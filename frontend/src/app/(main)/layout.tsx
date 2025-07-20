import Providers from '@/providers/providers';
import '../../styles/globals.css';

export default function RootLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          {sidebar}
        </Providers>
      </body>
    </html>
  );
}
