import Head from 'next/head';
import React from 'react';

const defaultMeta = {
  title: 'Raynaldo Sutisna',
  siteName: 'raynaldosutisna.com',
  description: "Raynaldo Sutisna's personal website",
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

      <meta property='og:url' content={meta.url} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:image' name='image' content={meta.image} />
    </Head>
  );
}
