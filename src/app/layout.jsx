import './globals.css';
import './comparisons.css';
import './brand.css';
import './vision.css';
import './solution-how.css';

export const metadata = {
  metadataBase: new URL('https://www.hereopen.me'),
  title: 'Here Open | Built for banks. Connected to local business.',
  description: 'A bank-branded smart merchant device and platform connecting banks, merchants and customers through live shop status, communication and supported safety alerts.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Here Open | One device. Direct connections.',
    description: 'Here Open goes beyond payment confirmation to solve everyday merchant needs.',
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
