import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, keywords, url }) {
  return (
    <Helmet>
      <title>{title} | Your Website Name</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}