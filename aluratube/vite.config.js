import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  // Carregue o arquivo env com base no 'modo' no diretório de trabalho atual.
  // Defina o terceiro parâmetro como '' para carregar todos os env, independentemente do prefixo 'VITE_'.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), svgr()],

    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
