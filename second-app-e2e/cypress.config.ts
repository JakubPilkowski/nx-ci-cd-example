import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'npx nx run @nx-ci-cd-example/second-app:dev',
        production: 'npx nx run @nx-ci-cd-example/second-app:preview',
      },
      ciWebServerCommand: 'npx nx run @nx-ci-cd-example/second-app:preview',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
