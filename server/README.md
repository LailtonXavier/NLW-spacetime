### API Fastify - Prisma

# map
  - tsx - executar codigo typescript
  - fastify
    - npm i fastify
  - ESlint
    - npm i eslint -D
    - npm i @rocketseat/eslint-config -D
  - Prisma
    - npm i prisma -D
      - npx prisma init --datasource-provider SQLite
      - npx prisma migrate dev - ele var ler o arquivo `prisma` e rodar
        - vera se tem alguma alteracao
      - npx prisma studio
    - Acessar o banco de dado/`prisma` pela api
      - npm i @prisma/client
    ...
    - criar as tableas em `prisma/schema`.
      - Um `user` vai ter varias `memorias`
      - resetar caso tenha algo na tabela
        - npx prisma migrate reset
      - agora roda as migration novas
        - npx prisma migrate dev
    - Zod = serve para fazer validacao
      - npm i zod
    - Cors
      - npm i @fastify/cors

