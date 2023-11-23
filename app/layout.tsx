import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

const defaultMeta = {
  title: 'Raynaldo Sutisna',
  siteName: 'raynaldosutisna.com',
  url: 'https://raynaldosutisna.com',
  description:
    'Discover my software engineering journey, expertise, and insightful blogs in my personal portfolio.',
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${defaultMeta.siteName}`,
    default: defaultMeta.title,
  },
  description: defaultMeta.description,
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: {
      template: `%s | ${defaultMeta.siteName}`,
      default: defaultMeta.title,
    },
    url: defaultMeta.url,
    siteName: defaultMeta.siteName,
    description: defaultMeta.description,
    images: '/favicon/large-og.png',
    type: 'website',
  },
  icons: {
    apple: [
      {
        type: 'image/png',
        sizes: '180x180',
        url: '/favicon/apple-touch-icon.png',
      },
    ],
    icon: [
      { type: 'image/x-icon', sizes: '48x48', url: '/favicon/favicon.ico' },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
    ],
    other: {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
      color: '#da532c',
    },
  },
  manifest: '/favicon/site.webmanifest',
  other: { ['msapplication-TileColor']: '#da532c' },
};

export const viewpor: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
