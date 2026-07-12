globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_Q8MSEbLC.mjs';
/* empty css                         */

const $$Astro = createAstro("https://citytrades.uk");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonical } = Astro2.props;
  const url = canonical || Astro2.url.href;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="canonical"${addAttribute(url, "href")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:type" content="website"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> <!-- Header --> <header> <div class="wrap" style="justify-content:space-between;align-items:center;display:flex"> <a href="https://citytrades.uk/" style="color:#fff;align-items:center;gap:6px;font-size:18px;font-weight:800;display:flex">
🔨 CityTrades<span style="opacity:.6;font-weight:400">.uk</span> </a> <nav style="position:relative" id="nav"> <button id="nav-toggle" style="color:#fff;cursor:pointer;background:0 0;border:none;border-radius:6px;padding:6px 12px;font-size:13px;font-weight:600">Service Areas ▾</button> <div id="nav-dropdown" style="z-index:100;background:#fff;border-radius:10px;width:200px;margin-top:8px;position:absolute;right:0;overflow:hidden;box-shadow:0 8px 24px #0003;display:none"> <a href="https://london.citytrades.uk/" style="color:#111827;padding:12px 16px;font-size:14px;font-weight:500;display:block">London</a> </div> </nav> </div> </header> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/home/fansfollow/projects/citytrades/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
