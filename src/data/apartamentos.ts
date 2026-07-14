// ============================================================
// DATOS DE LOS APARTAMENTOS — única fuente de verdad
// Editar AQUÍ cuando el cliente entregue la información real.
// Las cards de la home y las páginas individuales se generan
// automáticamente a partir de este archivo.
// ============================================================

export interface Apartamento {
  slug: string;
  number: number;
  name: string;
  /** Resumen corto que se muestra en la card de la home */
  shortDescription: string;
  /** Párrafos completos de la página del apartamento */
  longDescription: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  /** Se muestran como chips en la card (máx. 4 recomendado) */
  highlights: string[];
  /** Lista completa de comodidades de la página individual */
  amenities: string[];
  /**
   * FOTOS: copiar los archivos a public/img/apartamentos/ y listar aquí
   * las rutas, p. ej. ["/img/apartamentos/apto1-salon.jpg", "/img/apartamentos/apto1-dormitorio.jpg"]
   * La primera foto es la portada de la card. Si la lista está vacía,
   * se muestra el degradado provisional.
   */
  images: string[];
}

export const apartamentos: Apartamento[] = [
  {
    slug: "apartamento-1",
    number: 1,
    name: "Apartamento 1",
    shortDescription:
      "Recién reformado, con dos dormitorios, cocina completa y acceso al patio. Perfecto para familias.",
    longDescription: [
      "Apartamento recién reformado en pleno Paseo del Reloj, con capacidad para 4 personas. Cuenta con dos dormitorios (uno de matrimonio y otro con dos camas individuales), salón luminoso y cocina completamente equipada.",
      "Su acceso directo al patio lo hace ideal para familias que quieren desayunar al aire libre y disfrutar del ritmo tranquilo del pueblo.",
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    highlights: ["Cocina completa", "Aire acondicionado", "Patio", "Wifi"],
    amenities: [
      "Cocina completa con vitrocerámica",
      "Frigorífico y congelador",
      "Lavadora",
      "Microondas y cafetera",
      "Aire acondicionado",
      "Calefacción",
      "Wifi gratuito",
      "Smart TV",
      "Ropa de cama y toallas incluidas",
      "Acceso al patio con mesas y sombrillas",
    ],
    images: [],
  },
  {
    slug: "apartamento-2",
    number: 2,
    name: "Apartamento 2",
    shortDescription:
      "Acogedor y con todo lo necesario para dos personas: cocina equipada y el centro del pueblo a la puerta.",
    longDescription: [
      "Apartamento acogedor pensado para parejas o viajeros de la Vía de la Plata. Dormitorio de matrimonio, baño completo y una cocina equipada con todo lo necesario para una estancia como en casa.",
      "Está a pie de calle en el Paseo del Reloj: bares, tiendas y el inicio de las rutas de senderismo a menos de cinco minutos andando.",
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    highlights: ["Cocina equipada", "Aire acondicionado", "Céntrico", "Wifi"],
    amenities: [
      "Cocina equipada",
      "Frigorífico",
      "Lavadora",
      "Microondas y cafetera",
      "Aire acondicionado",
      "Calefacción",
      "Wifi gratuito",
      "Smart TV",
      "Ropa de cama y toallas incluidas",
      "Planta baja a pie de calle",
    ],
    images: [],
  },
  {
    slug: "apartamento-3",
    number: 3,
    name: "Apartamento 3",
    shortDescription:
      "El más amplio: tres dormitorios y dos baños para grupos y familias grandes que visitan la Sierra Norte.",
    longDescription: [
      "El apartamento más amplio de la casa, con capacidad para 6 personas repartidas en tres dormitorios y dos baños completos. Salón-comedor espacioso y cocina completa para organizar comidas en grupo.",
      "Una base perfecta para grupos de senderistas o familias grandes que quieren explorar la Sierra Morena sevillana sin renunciar a la comodidad.",
    ],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    highlights: ["3 dormitorios", "2 baños", "Aire acondicionado", "Wifi"],
    amenities: [
      "Cocina completa con vitrocerámica",
      "Frigorífico y congelador",
      "Lavadora",
      "Microondas y cafetera",
      "Aire acondicionado",
      "Calefacción",
      "Wifi gratuito",
      "Smart TV",
      "Ropa de cama y toallas incluidas",
      "Salón-comedor amplio",
      "Dos baños completos",
    ],
    images: [],
  },
];

// Los datos de contacto e identidad del negocio viven en src/data/site.ts
