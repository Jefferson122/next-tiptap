import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    // 1. Encuentra y modifica la regla existente para excluir los SVGs
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      // Excluye archivos .svg de la regla por defecto de Next.js
      fileLoaderRule.exclude = /\.svg$/i;
    }
    
    // 2. Añade la regla de SVGR 
    config.module.rules.push({
      test: /\.svg$/i,
      // Se recomienda añadir 'issuer' para evitar conflictos con archivos CSS/imágenes
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] }, 
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Tu configuración de svgoConfig se mantiene sin cambios.
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    
    // El resto de tus reglas y lógica de Webpack (si la tienes) va aquí.

    return config;
  },
  images: {
    // 🛑 Se elimina la configuración OBSOLETA 'domains' para eliminar la advertencia.
    // domains: ['res.cloudinary.com', 'images.unsplash.com'],
    
    // ✅ Se activa la configuración moderna y recomendada 'remotePatterns'.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      // 💡 Se recomienda usar "https" para Cloudinary por seguridad y buenas prácticas.
      {
        protocol: "https", 
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;