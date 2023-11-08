import Head from 'next/head';
import React from 'react';

const defaultMeta = {
  title: 'Raynaldo Sutisna',
  siteName: 'raynaldosutisna.com',
  description:
    'Discover my software engineering journey, expertise, and insightful blogs in my personal portfolio.',
  url: 'https://raynaldosutisna.com',
  image: 'https://raynaldosutisna.com/favicon/large-og.png',
  type: 'website',
  robots: 'follow, index',
};

type SeoProps = Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />

      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:url' content={meta.url} />
      <meta property='og:image' name='image' content={meta.image} />
      <meta property='og:site_name' content={meta.siteName} />

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#da532c',
  },
];
