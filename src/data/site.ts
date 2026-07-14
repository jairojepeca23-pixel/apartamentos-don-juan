// ============================================================
// IDENTIDAD DEL SITIO — configuración por cliente
// Para adaptar esta plantilla a un negocio nuevo:
//   1. Editar este archivo (marca, contacto, hero, schema)
//   2. Editar src/data/apartamentos.ts (las unidades/servicios)
//   3. Cambiar la paleta en src/layouts/Layout.astro (:root)
// Ningún componente debe llevar datos del negocio hardcodeados.
// ============================================================

export const SITE = {
  marca: {
    nombre: "Apartamentos de Don Juan",
    anio: 2026,
  },

  contacto: {
    telefono: "677 25 60 36",
    telefonoDisplay: "+34 677 25 60 36",
    telefonoIntl: "+34677256036",
    whatsapp: "https://wa.me/34677256036",
    instagram: "https://instagram.com/apartamentos_dedonjuan",
    direccion: "Paseo del Reloj, 15A, 41240 Almadén de la Plata (Sevilla)",
    entradaSalida: "A convenir con el huésped",
  },

  hero: {
    antetitulo: "Almadén de la Plata · Sevilla",
    titulo: "Tu casa en Almadén de la Plata",
    texto:
      "Tres apartamentos turísticos recién reformados en el centro del pueblo, a menos de 65 km de Sevilla. Ambiente rural, grandes paisajes y todas las comodidades.",
    ctaPrimario: "Reservar por WhatsApp",
    ctaSecundario: "Ver apartamentos",
  },

  schema: {
    tipo: "LodgingBusiness",
    descripcion:
      "Apartamentos turísticos recién reformados en el centro de Almadén de la Plata, a menos de 65 km de Sevilla.",
    calle: "Paseo del Reloj, 15A",
    localidad: "Almadén de la Plata",
    provincia: "Sevilla",
    cp: "41240",
    pais: "ES",
  },
};
