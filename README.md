<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

Proyecto Pokedex con [Nest.js](https://github.com/nestjs/nest), curso de [Fernando Herrera](https://fernando-herrera.com/) en [Udemy](https://www.udemy.com/course/nest-framework/?kw=Nest%3A+Desarrollo+backend+escalable+con+Node&src=sac&couponCode=KEEPLEARNING) **Nest: Desarrollo backend escalable con Node**.

## Ejecutar en desarrollo

**Requisito**:
Tener Nest CLI instalado

```bash
$ npm i -g @nestjs/cli
```

1. Clonar el repositorio
2. Ejecutar `npm install`Running the app
3. Levantar base de datos mediante docker `docker compose up -d`
4. Clonar archivo **.env.template** y renombrarlo a **.env**
5. Completar las variables de entorno
   1. `MONGODB_URL`
   2. `PORT`
   3. `DEFAULT_LIMIT` _(opcional)_
6. Ejecutar la app en desarrollo `npm run start:dev`
7. Reconstruir la base de dato con el seed `GET/ http://localhost:3000/api/v1/seed`

## Comandos para ejecutar la aplicación

```bash
# desarrollo
$ npm run start

# watch mode
$ npm run start:dev

# producción
$ npm run start:prod
```

## Stack

[![My Skills](https://skillicons.dev/icons?i=nest,typescript,docker,mongo)](https://skillicons.dev)
