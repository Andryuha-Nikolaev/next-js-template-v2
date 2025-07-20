import nextConfig from "@m-social/eslint-config-next";
import { defineConfig } from "eslint/config";

export default defineConfig(nextConfig, {
	languageOptions: {
		parserOptions: {
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
