import React from 'react';

export function SEO({ title, description, keywords, image, url }) {
  const siteTitle = 'FitFocusHub - Premium Digital Agency';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Premium Digital Agency specializing in Website Development, Graphic Design, Video Editing, and Digital Marketing Solutions.';
  const defaultImage = '/og-image.jpg';

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <link rel="canonical" href={url || window.location.href} />
    </>
  );
}
