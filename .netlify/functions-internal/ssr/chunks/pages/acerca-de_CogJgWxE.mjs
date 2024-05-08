/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import 'clsx';

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos/" },
  { name: "Acerca de", href: "/acerca-de/" },
  { name: "Contacto", href: "/contacto/" }
];
function Navigation({ currentPage }) {
  let [cartSize, setCartSize] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const size = Object.keys(storedCart).length;
    setCartSize(size);
  }, []);
  return /* @__PURE__ */ jsx(Disclosure, { as: "nav", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto px-5 xl:px-64 sm:py-2 bg-zinc-900", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-5", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-10 w-auto",
            src: "/procure.svg",
            alt: "Your Company"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "@MiTienda" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-0 flex items-center space-x-2 sm:hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative grid items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "/checkout/", "aria-label": "Icono de carrito de compras que redirecciona al checkout", children: /* @__PURE__ */ jsx("img", { src: "/shopping-cart.svg", className: "h-8 w-auto", alt: "" }) }),
          /* @__PURE__ */ jsx("a", { href: "/checkout/", className: "absolute bottom-0 right-0 bg-purple-50 rounded-full py-1 px-2 text-xs font-semibold text-purple-400", children: cartSize })
        ] }),
        /* @__PURE__ */ jsxs(Disclosure.Button, { className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -inset-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
          open ? /* @__PURE__ */ jsx(XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
        navigation.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: `rounded-md px-3 py-2 font-medium ${currentPage === item.href ? "bg-pink-400 text-white" : "text-white"}`,
            "aria-current": currentPage === item.href ? "page" : void 0,
            children: item.name
          },
          item.name
        )),
        /* @__PURE__ */ jsxs("div", { className: "relative items-center px-1", children: [
          /* @__PURE__ */ jsx("a", { href: "/checkout/", "aria-label": "Icono de carrito de compras que redirecciona al checkout", children: /* @__PURE__ */ jsx("img", { src: "/shopping-cart.svg", className: "h-8 w-auto", alt: "" }) }),
          /* @__PURE__ */ jsx("a", { href: "/checkout/", className: "absolute bottom-0 right-0 bg-purple-50 rounded-full py-1 px-2 text-xs font-semibold text-purple-400", children: cartSize })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ jsx(
      "a",
      {
        href: item.href,
        className: `block rounded-md px-3 py-2 text-base font-medium ${currentPage === item.href ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-500 hover:text-white"}`,
        "aria-current": currentPage === item.href ? "page" : void 0,
        children: item.name
      },
      item.name
    )) }) })
  ] }) });
}

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  function getCurrentYear() {
    const currentDate = /* @__PURE__ */ new Date();
    return currentDate.getFullYear();
  }
  const currentYear = getCurrentYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img class="h-8" src="/procure.svg" alt="Your Company"> <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">@MiTienda</span> </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400"> <li> <a href="/servicios/" class="hover:underline me-4 md:me-6">Acerca de</a> </li> <li> <a href="/contacto/" class="hover:underline">Contactenos</a> </li> </ul> <a href="/terminos-condiciones/" class="text-gray-400 text-sm font-medium">Terminos y condiciones</a> </div> <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8"> <span class="block text-sm sm:text-center text-gray-400">© ${currentYear} <a href="http://localhost:4321/" class="hover:underline"></a>. Todos los derechos reservados</span> </div> </footer>`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$BotonFlotante = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BotonFlotante;
  return renderTemplate`${maybeRenderHead()}<a href="https://api.whatsapp.com/send/?phone=573017812048" target="_blank" class="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 rounded-full shadow-md"> <img src="/redes/whatsapp.svg" class="h-12" alt=""> </a>`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/components/otros/boton-flotante.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const currentPage = Astro2.url.pathname;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class=""> ${renderComponent($$result, "NavigationLight", Navigation, { "currentPage": currentPage, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/menu/Navigation Light.jsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BotonFlotante", $$BotonFlotante, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$AcercaDe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AcercaDe;
  const title = "Acerca de";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center py-12"> <div class=""> <div class="flex flex-col gap-y-5 p-5 xl:grid xl:grid-cols-2 sm:max-w-7xl"> <figure class="grid justify-center xl:justify-start"> <img class="rounded-lg w-[500px] h-[400px] object-contain" src="/gift.jpg" alt=""> </figure> <div class="rounded-lg p-5 sm:w-[620px] sm:min-h-[400px]"> <h2 class="mb-5 text-5xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-5xl">
Mision
</h2> <p class="text-gray-500">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas nam quisquam totam cum rem quis, accusantium illum ut ducimus maxime, nemo repellendus aliquam debitis! Quia magnam harum ad cum.
</p> </div> </div> </div> <div class=""> <div class="flex flex-col gap-y-5 p-5 xl:grid xl:grid-cols-2 sm:max-w-7xl"> <figure class="grid justify-center xl:justify-end xl:order-2 "> <img class="rounded-lg w-[500px] h-[400px] object-contain" src="/gift.jpg" alt=""> </figure> <div class="rounded-lg p-5 sm:w-[620px] sm:min-h-[400px]"> <h2 class="mb-5 text-5xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-5xl">
Vision
</h2> <p class="text-gray-500">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores nemo illo perferendis, deleniti itaque natus, cupiditate, amet ut ipsa voluptas quibusdam reiciendis animi magnam officia nisi tenetur nostrum dolores vero dolorem dicta excepturi corporis! Aperiam repellendus fugit vitae accusantium.
</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/acerca-de.astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/acerca-de.astro";
const $$url = "/acerca-de";

const acercaDe = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AcercaDe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, acercaDe as a };
