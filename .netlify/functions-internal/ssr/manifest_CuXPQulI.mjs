import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_D9paozAY.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"productos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/productos","isIndex":false,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos.astro","pathname":"/productos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/acerca-de.B3W6YXqP.css"}],"routeData":{"route":"/acerca-de","isIndex":false,"type":"page","pattern":"^\\/acerca-de\\/?$","segments":[[{"content":"acerca-de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acerca-de.astro","pathname":"/acerca-de","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/acerca-de.B3W6YXqP.css"}],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/acerca-de.B3W6YXqP.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/acerca-de.B3W6YXqP.css"}],"routeData":{"route":"/terminos-condiciones","isIndex":false,"type":"page","pattern":"^\\/terminos-condiciones\\/?$","segments":[[{"content":"terminos-condiciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terminos-condiciones.astro","pathname":"/terminos-condiciones","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/acerca-de.B3W6YXqP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/acerca-de.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/checkout.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/infoProductos/[_id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/productos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/terminos-condiciones.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_CYjdX-hD.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_B1uiiQij.mjs","/src/pages/index.astro":"chunks/pages/index_CQMOOnFV.mjs","/src/pages/terminos-condiciones.astro":"chunks/pages/terminos-condiciones_CroqNZ83.mjs","\u0000@astrojs-manifest":"manifest_CuXPQulI.mjs","C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Bn2swvNF.mjs","\u0000@astro-page:src/pages/acerca-de@_@astro":"chunks/acerca-de_CidHno3_.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"chunks/checkout_mK4n6ULl.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_CE8Npny8.mjs","\u0000@astro-page:src/pages/infoProductos/[_id]@_@astro":"chunks/__id__CZBGsUNQ.mjs","\u0000@astro-page:src/pages/productos@_@astro":"chunks/productos_CyJYzaQJ.mjs","\u0000@astro-page:src/pages/terminos-condiciones@_@astro":"chunks/terminos-condiciones_CDe36AiY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ER4cJvru.mjs","@/components/PaginaCheckout":"_astro/PaginaCheckout.BAqtP6Ix.js","@/components/PaginaProducto":"_astro/PaginaProducto.DHZWGcfK.js","/astro/hoisted.js?q=0":"_astro/hoisted.DnFK6dK7.js","@/components/menu/Navigation Light.jsx":"_astro/Navigation Light.CVfawYSP.js","@astrojs/react/client.js":"_astro/client.C54dGlMv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/acerca-de.B3W6YXqP.css","/ancheta.webp","/email.svg","/favicon.svg","/gift.jpg","/procure.svg","/shopping-cart.svg","/productos/producto-1.jpeg","/productos/producto-2.jpeg","/productos/producto-3.jpeg","/productos/producto-4.jpeg","/productos/producto-5.jpeg","/productos/producto-6.jpeg","/imagenes-servicios/imagen-1.png","/imagenes-servicios/imagen-2.png","/imagenes-servicios/imagen-3.png","/imagenes-servicios/imagen-4.png","/imagenes-servicios/imagen-5.png","/imagenes-servicios/imagen-6.png","/redes/facebook.svg","/redes/instagram.svg","/redes/tiktok.svg","/redes/whatsapp.svg","/redes/youtube.svg","/_astro/client.C54dGlMv.js","/_astro/hoisted.DnFK6dK7.js","/_astro/index.CXayANxb.js","/_astro/jsx-runtime.yD2ZTRUu.js","/_astro/Navigation Light.CVfawYSP.js","/_astro/PaginaCheckout.BAqtP6Ix.js","/_astro/PaginaProducto.DHZWGcfK.js","/_astro/sweetalert2.all.Kc0A_Jbf.js","/productos/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
