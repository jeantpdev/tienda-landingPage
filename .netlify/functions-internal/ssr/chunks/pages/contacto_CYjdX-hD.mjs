/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D9paozAY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './acerca-de_CogJgWxE.mjs';

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  const title = "Contacto";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=""> <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8"> <div class="max-w-2xl lg:max-w-4xl mx-auto text-center space-y-5"> <h2 class="text-3xl sm:text-5xl font-extrabold text-gray-900">¡Visitanos!</h2> <p class="text-gray-600 leading-relaxed font-light text-2xl mx-auto pb-2">Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina con previa cita</p> </div> <div class="mt-16 lg:mt-20"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="rounded-lg overflow-hidden"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5984935339866!2d-74.7660975!3d10.9180876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5cd70fce67c09%3A0x71fb728820c6f49e!2sCl%2020%20%2321-58%2C%20Soledad%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1712719443390!5m2!1ses!2sco" width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> <div> <div class="max-w-full mx-auto rounded-lg overflow-hidden"> <div class="px-6 py-4"> <h3 class="text-lg font-medium text-gray-900">Estamos ubicados</h3> <p class="mt-1 text-gray-600">Calle 20 #21-58, Soledad, Atlántico, Colombia</p> </div> <div class="border-t border-gray-200 px-6 py-4"> <h3 class="text-lg font-medium text-gray-900">Horarios</h3> <p class="mt-1 text-gray-600">Lunes: Cita Previa</p> <p class="mt-1 text-gray-600">Martes: Cita Previa</p> <p class="mt-1 text-gray-600">Miercoles: Cita Previa</p> <p class="mt-1 text-gray-600">Jueves: 09:00a.m- 04:00p.m</p> <p class="mt-1 text-gray-600">Viernes: Cita Previa</p> <p class="mt-1 text-gray-600">Sabado: Cerrado</p> <p class="mt-1 text-gray-600">Domingo: Cerrado</p> </div> <div class="border-t border-gray-200 px-6 py-4"> <h3 class="text-lg font-medium text-gray-900">Contactanos</h3> <div class="flex items-center gap-2"> <img src="/email.svg" class="h-5" alt=""> <a href="mailto:escuelaefic2018@gmail.com" class="mt-1 text-gray-600">escuelaefic2018@gmail.com</a> </div> <div class="flex items-center gap-2"> <img src="/redes/whatsapp.svg" class="h-5" alt=""> <a href="https://api.whatsapp.com/send/?phone=573017812048" class="mt-1 text-gray-600">3017812048</a> </div> </div> </div> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Bradl/OneDrive/Documentos/Programacion y otros proyectos/astro/En proceso/tienda-landingPage/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };
