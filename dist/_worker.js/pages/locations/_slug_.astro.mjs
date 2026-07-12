globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Q8MSEbLC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Ci73L9of.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://citytrades.uk");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const cities = {
    london: {
      name: "London",
      about: "London's construction and trades industry is one of the largest in Europe. Electricians are particularly sought after due to the volume of commercial fit-outs and growing demand for EV charger installations. Plumbers handle everything from Victorian drainage systems in Islington to modern underfloor heating in new-build developments. Carpenters and joiners work extensively on shopfitting, bespoke wardrobes, and heritage restoration. Heating engineers are in high demand for boiler replacements, and painters see peak seasons around the property market in spring and autumn.",
      businesses: [
        {
          name: "National Hire Solutions",
          verified: true,
          trade: "\u{1F3D7}\uFE0F Builders",
          tag: "Professional tradesmen staffing across the UK",
          rating: "4.8",
          reviews: "342",
          phone: "0800 123 4567"
        }
      ]
    }
  };
  const city = cities[slug];
  if (!city) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${city.name} Tradesmen - CityTrades UK`, "description": `Find trusted tradesmen in ${city.name}. Vetted professionals for every job.` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section style="text-align:center;background:#0052a2;padding:clamp(40px,8vw,64px) 24px"> <div class="wrap"> <h1 style="margin-bottom:6px;font-size:clamp(24px,6vw,40px);font-weight:800">${city.name} Tradesmen</h1> <p style="opacity:.8;font-size:clamp(13px,3vw,16px)">${city.businesses.length} verified business serving ${city.name}</p> </div> </section>  <section style="text-align:center;padding:40px 24px;background:#111827"> <div class="wrap"> <h2 style="margin-bottom:8px;font-size:clamp(20px,5vw,28px);font-weight:800">About ${city.name} Trades</h2> <p style="opacity:.8;max-width:700px;margin:0 auto;font-size:clamp(13px,3.5vw,15px);line-height:1.8">${city.about}</p> </div> </section>  <section style="text-align:center;padding:40px 24px"> <div class="wrap"> <h2 style="margin-bottom:8px;font-size:clamp(20px,5vw,28px);font-weight:800">Listed Businesses</h2> <div style="text-align:left;gap:12px;display:grid;margin-top:24px"> ${city.businesses.map((biz) => renderTemplate`<div style="background:#ffffff0f;border:1px solid #ffffff1a;border-radius:12px;flex-direction:column;gap:12px;padding:20px;transition:border-color .2s;display:flex"> <div> <div style="margin-bottom:2px;font-size:16px;font-weight:800"> ${biz.name} ${biz.verified && renderTemplate`<span style="color:#fff;background:#16a34a;border-radius:5px;padding:2px 6px;font-size:10px;font-weight:600">Verified</span>`} </div> <div style="color:#fdbf0a;margin-bottom:2px;font-size:13px;font-weight:600">${biz.trade}</div> <div style="opacity:.7;margin-bottom:4px;font-size:13px">${biz.tag}</div> <div style="opacity:.6;font-size:12px">★ ${biz.rating} (${biz.reviews} reviews) · 📞 ${biz.phone}</div> </div> <a href="#" style="color:#111827;text-align:center;white-space:nowrap;background:#fdbf0a;border-radius:8px;align-self:flex-start;padding:10px 20px;font-size:13px;font-weight:700">View Profile</a> </div>`)} </div> </div> </section> ` })}`;
}, "/home/fansfollow/projects/citytrades/src/pages/locations/[slug].astro", void 0);

const $$file = "/home/fansfollow/projects/citytrades/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
