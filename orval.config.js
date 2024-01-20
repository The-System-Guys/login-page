import { defineConfig } from 'orval'

export default defineConfig({
  app: {
    input: {
      target:
        'https://github.com/The-System-Guys/login-service/blob/main/docs/swagger.json',
    },
    output: {
      mode: 'tags-split',
      workspace: './src/api',
      target: './app.ts',
      schemas: './model',
      client: 'swr',
      prettier: true,
    },
    hooks: {
      afterAllFilesWrite: 'eslint ./src/api --ext .ts,.tsx,.js --fix', // run lint fix after all files are written
    },
  },
})
