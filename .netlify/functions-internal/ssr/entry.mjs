import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CbI90Vp9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DRyCXprU.mjs');
const _page1 = () => import('./chunks/acerca-de_Bz7iEg3J.mjs');
const _page2 = () => import('./chunks/checkout_D4TXkPID.mjs');
const _page3 = () => import('./chunks/contacto_SJK1F7BJ.mjs');
const _page4 = () => import('./chunks/__id__BQf5Egsn.mjs');
const _page5 = () => import('./chunks/productos_BJ1dze79.mjs');
const _page6 = () => import('./chunks/terminos-condiciones_Cu2ZHDxk.mjs');
const _page7 = () => import('./chunks/index_CmtSH_ci.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/acerca-de.astro", _page1],
    ["src/pages/checkout.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/infoProductos/[_id].astro", _page4],
    ["src/pages/productos.astro", _page5],
    ["src/pages/terminos-condiciones.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b6282c94-3f69-4058-bc3c-fa6485f27cf1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
