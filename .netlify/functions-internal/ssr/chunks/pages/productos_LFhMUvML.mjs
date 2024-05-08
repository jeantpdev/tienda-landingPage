/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { c as convertirAMoneda, a as calcularPrecioConDescuento, $ as $$Layout } from './__id__XjwGN6pf.mjs';

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

export { $$Productos as default, $$file as file, prerender, $$url as url };
