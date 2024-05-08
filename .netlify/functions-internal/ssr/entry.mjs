import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B8K038AP.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DRyCXprU.mjs');
const _page1 = () => import('./chunks/acerca-de_Dvvl-2nz.mjs');
const _page2 = () => import('./chunks/checkout_BGVH5zt8.mjs');
const _page3 = () => import('./chunks/contacto_DCaHUGDB.mjs');
const _page4 = () => import('./chunks/__id__B_mvBznj.mjs');
const _page5 = () => import('./chunks/productos_BJ1dze79.mjs');
const _page6 = () => import('./chunks/terminos-condiciones_cgESt9VW.mjs');
const _page7 = () => import('./chunks/index_DT7-VgVA.mjs');
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
    "middlewareSecret": "6c834f92-de2c-452d-b9c7-7275f7a5f9ec"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
