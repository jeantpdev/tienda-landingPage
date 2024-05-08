/* empty css                              */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_IfUAp_ts.mjs';
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

const convertirAMoneda = (precio) => {
  return precio.toLocaleString("es-PE", { style: "currency", currency: "COP" });
};
const calcularPrecioConDescuento = (precio, descuento) => {
  const precioNumerico = parseFloat(precio);
  const descuentoNumerico = parseFloat(descuento);
  let precioFinal = 0;
  if (descuentoNumerico != 0) {
    const precioConDescuento = precioNumerico * (1 - descuentoNumerico / 100);
    precioFinal = precioConDescuento;
    return convertirAMoneda(precioFinal);
  } else {
    precioFinal = precio;
    return convertirAMoneda(precioFinal);
  }
};
const calcularPrecioConDescuentoYCantidad = (cantidad, precio, descuento) => {
  let total = 0;
  const precioNumerico = parseFloat(precio);
  const descuentoNumerico = parseFloat(descuento);
  if (descuentoNumerico != 0) {
    const precioConDescuento = precioNumerico * (1 - descuentoNumerico / 100);
    total += precioConDescuento * cantidad;
    return convertirAMoneda(total);
  } else {
    total += precioNumerico * cantidad;
    return convertirAMoneda(total);
  }
};
const calcularPrecioXCantidad = (precio, cantidad) => {
  return convertirAMoneda(precio * cantidad);
};

function Producto(props) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 rounded-md shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { src: props.imagen_principal, className: "w-full h-96 object-cover", alt: "" }),
      props.descuento != 0 && /* @__PURE__ */ jsxs("p", { className: "absolute top-2 right-2 py-1 px-2 rounded-md bg-emerald-50 font-semibold text-emerald-400", children: [
        "-",
        props.descuento,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-5", children: [
      /* @__PURE__ */ jsx("a", { href: `/infoProductos/${props._id}`, className: "text-xl font-bold tracking-wide leading-loose text-zinc-700", children: props.nombre_producto }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: props.descripcion })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-2 text-end mb-2 space-x-2", children: [
      props.descuento != 0 && /* @__PURE__ */ jsx("p", { className: "inline-flex text-xs font-semibold tracking-tight rounded-md text-pink-400 line-through", children: convertirAMoneda(props.precio) }),
      /* @__PURE__ */ jsxs("p", { className: "inline-flex font-semibold tracking-tight bg-pink-50 p-2 rounded-md text-pink-400", children: [
        "$ ",
        calcularPrecioConDescuento(props.precio, props.descuento)
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Productos;
  const title = "Productos";
  const response = await fetch("https://mongodb-productos.onrender.com/productos/");
  const data = await response.json();
  const productos = data.productos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-12"> <div class="flex flex-col space-y-10 items-center mt-20 mb-20 text-center px-4 md:max-w-4xl md:justify-center md:mx-auto"> <h1 class="text-5xl tracking-tight font-extrabold text-gray-800 sm:text-5xl text-center"> <span class="block xl:inline">Escoge el que mas te guste!</span> </h1> <p class="text-slate-400 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem dolor quo asperiores, dolorem dolores harum aliquid. Placeat, asperiores necessitatibus?</p> </div> <div class="flex flex-col gap-5 mt-12 mb-12 px-5 md:grid md:grid-cols-2 lg:mx-auto lg:max-w-7xl lg:grid-cols-3"> ${productos.map((producto) => {
    return renderTemplate`${renderComponent($$result2, "Producto", Producto, { "imagen_principal": producto.imagen_principal, "categoria": producto.categoria, "nombre_producto": producto.nombre_producto, "descripcion": producto.descripcion, "precio": producto.precio, "descuento": producto.descuento, "_id": producto._id })}`;
  })} </div> </div> ` })}`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/productos.astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/productos.astro";
const $$url = "/productos";

const productos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, calcularPrecioXCantidad as a, convertirAMoneda as b, calcularPrecioConDescuentoYCantidad as c, calcularPrecioConDescuento as d, productos as p };
