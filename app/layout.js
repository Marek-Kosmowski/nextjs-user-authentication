import './globals.css';

import { PageBackground } from '@/components/background';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
