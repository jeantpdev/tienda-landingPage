import Swal from 'sweetalert2';
/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from './acerca-de_CogJgWxE.mjs';

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

function ProductoCheckout({ children, props }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("img", { src: props.imagen_principal, className: "h-20", alt: props.nombre_producto }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold tracking-tight leading-tight", children: props.nombre_producto }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
          "Material: ",
          props.material
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
          "x ",
          props.cantidad
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: calcularPrecioConDescuentoYCantidad(props.precio, props.cantidad, props.descuento) }),
        props.descuento ? /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 line-through", children: calcularPrecioXCantidad(props.precio, props.cantidad) }) : ""
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
}

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

function Carrito() {
  const [cart, setCart] = useState([]);
  let [precioTotal, setPrecioTotal] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    calcularPrecioTotal(storedCart);
    setCart(storedCart);
  }, []);
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calcularPrecioTotal(updatedCart);
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.location.href = window.location.href;
  };
  const calcularPrecioTotal = (cart2) => {
    let total = 0;
    cart2.forEach((producto) => {
      const precioNumerico = parseFloat(producto.precio);
      const descuentoNumerico = parseFloat(producto.descuento);
      if (descuentoNumerico != 0) {
        const precioConDescuento = precioNumerico * (1 - descuentoNumerico / 100);
        total += precioConDescuento * producto.quantity;
      } else {
        total += precioNumerico * producto.quantity;
      }
    });
    setPrecioTotal(convertirAMoneda(total));
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid max-w-2xl mx-auto py-10 px-5 space-y-5 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:space-x-20", children: [
    /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxs("form", { action: "", className: "flex flex-col space-y-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-semibold", children: "Nombre" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "nombre", className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-semibold", children: "Apellido" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "apellido", className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-semibold", children: "Numero (whatsapp)" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "numero", className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-semibold", children: "Ciudad" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "ciudad", className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-semibold", children: "Direccion" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "direccion", className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" }),
      /* @__PURE__ */ jsx("button", { className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-10", children: "Realizar pedido" })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 space-y-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-5", children: "Resumen de compra" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: clearCart, className: "text-red-400 font-semibold", children: "Vaciar carrito" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: cart.length === 0 ? /* @__PURE__ */ jsx("p", { children: "No hay productos en el carrito" }) : /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: cart.map((product, index) => /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(ProductoCheckout, { props: {
          imagen_principal: product.imagen_principal,
          nombre_producto: product.nombre_producto,
          material: product.material,
          cantidad: product.quantity,
          precio: product.precio,
          descuento: product.descuento,
          index
        }, children: /* @__PURE__ */ jsx("button", { onClick: () => removeFromCart(index), children: "X" }) }) }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t py-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Subtotal" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-emerald-500 font-semibold", children: precioTotal })
        ] })
      ] }) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const title = "Checkout";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PaginaCheckout", Carrito, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PaginaCheckout", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/checkout.astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/checkout.astro";
const $$url = "/checkout";

const checkout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Checkout,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { calcularPrecioConDescuento as a, checkout as b, convertirAMoneda as c, showAlert as s };
