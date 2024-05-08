/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
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

const showAlert = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: message
  });
};

function Galeria(props) {
  const srcImagenPrincipal = props.imagen_principal;
  const srcImagenesProductos = props.imagenes_productos;
  const [imagenPrincipal, setImagenPrincipal] = useState(srcImagenPrincipal);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 lg:flex lg:flex-row-reverse lg:justify-center lg:space-x-2 lg:gap-x-2", children: [
    /* @__PURE__ */ jsx("div", { className: "md:grid md:items-center lg:justify-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imagenPrincipal,
        className: "w-full lg:w-96",
        alt: `${props.nombre_producto} producto`
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-x-2 overflow-auto lg:flex lg:flex-col lg:h-96 lg:gap-y-2 ", children: srcImagenesProductos.map((imagen, index) => /* @__PURE__ */ jsx(
      "img",
      {
        onClick: () => {
          setImagenPrincipal(imagen);
          setImagenSeleccionada(index);
        },
        src: imagen,
        className: `w-20 lg:h-20 lg:w-full cursor-pointer ${index === imagenSeleccionada ? "border-2 border-slate-500" : ""}`,
        alt: `${props.nombre_producto} producto`
      },
      index
    )) })
  ] });
}

function indexActual(props) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-500 hover:text-black", children: "Inicio" }),
    /* @__PURE__ */ jsxs("p", { children: [
      " ",
      ">",
      " "
    ] }),
    /* @__PURE__ */ jsx("a", { href: "/productos/", className: "text-slate-500 hover:text-black", children: "Productos" }),
    /* @__PURE__ */ jsxs("p", { children: [
      " ",
      ">",
      " "
    ] }),
    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: props.nombreProducto })
  ] });
}

function PaginaProducto(props) {
  console.log(props);
  const [productData, setProductData] = useState({
    _id: "",
    nombre_producto: "",
    descripcion: "",
    dimensiones: "",
    material: "",
    precio: "",
    descuento: ""
  });
  useEffect(() => {
    setProductData({
      _id: props._id,
      imagen_principal: props.imagen_principal,
      nombre_producto: props.nombre_producto,
      descripcion: props.descripcion,
      dimensiones: props.dimensiones,
      material: props.material,
      precio: props.precio,
      descuento: props.descuento
    });
  }, [props]);
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((product) => product._id === productData._id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
      showAlert("Se agrego una cantidad!");
    } else {
      cart.push({ ...productData, quantity: 1 });
      showAlert("Producto agregado!");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Producto añadido al carrito:", productData["nombre_producto"]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "px-5 py-10 space-y-5 md:py-20 md:max-w-xl lg:max-w-6xl md:mx-auto", children: [
    /* @__PURE__ */ jsx(indexActual, { nombreProducto: props.nombre_producto }),
    /* @__PURE__ */ jsxs("div", { className: "lg:grid lg:grid-cols-2 space-x-1", children: [
      props.imagen_principal != "no dado" ? /* @__PURE__ */ jsx(Galeria, { imagen_principal: props.imagen_principal, imagenes_productos: props.imagenes_productos, nombre_producto: props.nombre_producto, "client:load": true }) : /* @__PURE__ */ jsx("p", { children: "no hay imagenes" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex lg:flex-col  mt-5 lg:mt-0 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-md", children: props.categoria }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-slate-700", children: props.nombre_producto })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-slate-600 space-y-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: props.descripcion }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-md", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Dimensiones:" }),
              " ",
              props.dimensiones
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-md", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Material:" }),
              " ",
              props.material
            ] })
          ] }),
          props.colores && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Colores disponibles:" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[20px] h-[20px] bg-blue-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-[20px] h-[20px] bg-yellow-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-[20px] h-[20px] bg-slate-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-[20px] h-[20px] bg-red-500" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: props.descuento != 0 ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 font-semibold tracking-tight rounded-md text-xl", children: [
            "$ ",
            convertirAMoneda(calcularPrecioConDescuento(props.precio, props.descuento)),
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs bg-emerald-50 p-2 text-emerald-500", children: [
              "-",
              props.descuento,
              "%"
            ] }),
            " "
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400 line-through font-semibold text-xs", children: [
            "$ ",
            convertirAMoneda(props.precio),
            " COP"
          ] })
        ] }) : /* @__PURE__ */ jsxs("p", { className: "text-slate-700 font-semibold tracking-tight rounded-md text-xl", children: [
          "$ ",
          convertirAMoneda(calcularPrecioConDescuento(props.precio, props.descuento)),
          " "
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: addToCart, className: "w-full inline items-center justify-end px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-10", children: "Agregar al carrito" }) })
      ] })
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const response = await fetch("https://mongodb-productos.onrender.com/productos/");
  const data = await response.json();
  const productos = data.productos;
  return productos.map((producto) => ({
    params: {
      _id: producto._id
    },
    props: {
      producto
    }
  }));
}
const $$Id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Id;
  const datos_productos = Astro2.props["producto"];
  const {
    imagen_principal,
    imagenes_productos,
    categoria,
    nombre_producto,
    descripcion,
    precio,
    descuento,
    dimensiones,
    colores,
    material,
    _id
  } = datos_productos;
  return renderTemplate(_a || (_a = __template(["", ' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" data-astro-rerun><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Detalles" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PaginaProducto", PaginaProducto, { "imagen_principal": imagen_principal, ",": true, "imagenes_productos": imagenes_productos, ",": true, "categoria": categoria, "nombre_producto": nombre_producto, ",": true, "descripcion": descripcion, ",": true, "precio": precio, ",": true, "descuento": descuento, ",": true, "dimensiones": dimensiones, ",": true, "colores": colores, ",": true, "material": material, ",": true, "_id": _id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PaginaProducto", "client:component-export": "default" })} ` }));
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/infoProductos/[_id].astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/infoProductos/[_id].astro";
const $$url = "/infoProductos/[_id]";

const __id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, __id_ as _, calcularPrecioConDescuento as a, calcularPrecioConDescuentoYCantidad as b, convertirAMoneda as c, calcularPrecioXCantidad as d };
