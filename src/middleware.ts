import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;
  const pathname = context.url.pathname;

  // If visiting london.citytrades.uk, serve the London page
  if (hostname === 'london.citytrades.uk' && pathname === '/') {
    context.url.pathname = '/locations/london';
    return next();
  }

  // If visiting nationalhiresolutions.citytrades.uk, serve the National Hire Solutions page
  if (hostname === 'nationalhiresolutions.citytrades.uk' && pathname === '/') {
    context.url.pathname = '/National-Hire-Solutions';
    return next();
  }

  return next();
});
