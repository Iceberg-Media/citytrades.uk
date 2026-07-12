globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as decodeKey } from './chunks/astro/server_Q8MSEbLC.mjs';
import './chunks/astro-designed-error-pages_3VTGzF0J.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_6a_Ne03v.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/fansfollow/projects/citytrades/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"nav-toggle\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"nav-dropdown\");n&&(n.style.display=n.style.display===\"none\"?\"block\":\"none\")});document.addEventListener(\"click\",n=>{const e=document.getElementById(\"nav\");if(e&&!e.contains(n.target)){const t=document.getElementById(\"nav-dropdown\");t&&(t.style.display=\"none\")}});\n"}],"styles":[{"type":"external","src":"/_astro/index.DegdV22Y.css"}],"routeData":{"route":"/locations/[slug]","isIndex":false,"type":"page","pattern":"^\\/locations\\/([^/]+?)\\/?$","segments":[[{"content":"locations","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/locations/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"nav-toggle\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"nav-dropdown\");n&&(n.style.display=n.style.display===\"none\"?\"block\":\"none\")});document.addEventListener(\"click\",n=>{const e=document.getElementById(\"nav\");if(e&&!e.contains(n.target)){const t=document.getElementById(\"nav-dropdown\");t&&(t.style.display=\"none\")}});\n"}],"styles":[{"type":"external","src":"/_astro/index.DegdV22Y.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://citytrades.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/fansfollow/projects/citytrades/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/fansfollow/projects/citytrades/src/pages/locations/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/locations/[slug]@_@astro":"pages/locations/_slug_.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C4A78A-9.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D4vKt8nO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DegdV22Y.css","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_astro/index.DegdV22Y.css","/_worker.js/chunks/Layout_Ci73L9of.mjs","/_worker.js/chunks/astro-designed-error-pages_3VTGzF0J.mjs","/_worker.js/chunks/astro_CklzrbjX.mjs","/_worker.js/chunks/noop-middleware_6a_Ne03v.mjs","/_worker.js/chunks/render-context_2L3B2W-1.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_Q8MSEbLC.mjs","/_worker.js/pages/locations/_slug_.astro.mjs"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"biwJ+pRZPkW4AAPljrbBcF+d6Qsj+GXfWavSEBEVkBw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
