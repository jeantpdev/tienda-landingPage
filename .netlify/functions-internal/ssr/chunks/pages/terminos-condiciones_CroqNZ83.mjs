/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './acerca-de_CogJgWxE.mjs';

const $$Astro = createAstro();
const $$TerminosCondiciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TerminosCondiciones;
  const title = "Terminos y condiciones";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col mt-12 sm:mb-12 sm:py-40 p-15 justify-center items-center"> <div class=""> <h1 class="text-center text-5xl font-extrabold text-gray-900">Terminos y condiciones</h1> </div> <ol class="sm:w-[900px] p-12 space-y-1 text-lg list-decimal text-gray-500 dark:text-gray-400 grid gap-2"> <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga expedita quia porro voluptates accusamus itaque assumenda similique, est temporibus quasi?</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam quod aspernatur soluta cupiditate magnam praesentium, ullam harum earum in.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat fuga dolores, quod sapiente qui sed, optio repellat totam natus quis distinctio iure? Veritatis doloribus quia sapiente est vitae explicabo! </li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam.</li> </ol> </div> ` })}`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/terminos-condiciones.astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/terminos-condiciones.astro";
const $$url = "/terminos-condiciones";

export { $$TerminosCondiciones as default, $$file as file, $$url as url };
