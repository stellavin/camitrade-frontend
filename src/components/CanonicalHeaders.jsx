import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const CanonicalHeaders = ({ title, description }) => {
  const location = useLocation();
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const canonicalUrl = `${baseUrl}${location.pathname}${location.search}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalHeaders;