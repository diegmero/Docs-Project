---
sidebar_position: 3
---

# Contenedores Docker

## Introducción a los Contenedores

Un contenedor es una unidad estándar de software que empaqueta el código y todas sus dependencias para que la aplicación se ejecute de manera rápida y confiable en diferentes entornos.

## Comandos Básicos

### Ejecutar un Contenedor

```bash
# Ejecutar un contenedor en primer plano
# docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
docker run nginx

# Ejecutar un contenedor en segundo plano (modo detached)
docker run -d nginx

# Ejecutar y nombrar un contenedor
docker run --name mi-nginx -d nginx

# Ejecutar con mapeo de puertos (host:contenedor)
docker run -d -p 8080:80 nginx
```

### Gestionar Contenedores

```bash
# Listar contenedores en ejecución
docker ps

# Listar todos los contenedores (incluyendo los detenidos)
docker ps -a

# Detener un contenedor
docker stop nombre-contenedor

# Iniciar un contenedor detenido
docker start nombre-contenedor

# Reiniciar un contenedor
docker restart nombre-contenedor

# Eliminar un contenedor
docker rm nombre-contenedor

# Eliminar un contenedor en ejecución
docker rm -f nombre-contenedor
```

### Interactuar con Contenedores

```bash
# Acceder a la terminal de un contenedor
docker exec -it nombre-contenedor bash

# Ver los logs de un contenedor
docker logs nombre-contenedor

# Seguir los logs en tiempo real
docker logs -f nombre-contenedor

# Copiar archivos al contenedor
docker cp archivo.txt nombre-contenedor:/ruta/destino/

# Copiar archivos desde el contenedor
docker cp nombre-contenedor:/ruta/origen/archivo.txt ./
```

## Ejemplo Práctico

### Crear un Servidor Web con Nginx

```bash
# Crear un contenedor con Nginx mapeando puertos
docker run --name mi-web -d -p 80:80 nginx

# Copiar un archivo HTML personalizado
echo "<html><body><h1>¡Mi sitio web con Docker!</h1></body></html>" > index.html
docker cp index.html mi-web:/usr/share/nginx/html/

# Verificar el acceso
curl http://localhost
```

:::tip Consejo
Usa `docker stats` para monitorear el uso de recursos de tus contenedores en tiempo real.
:::

## Limpieza del Sistema

```bash
# Eliminar todos los contenedores detenidos
docker container prune

# Eliminar contenedores, redes, imágenes sin usar y cache
docker system prune

# Eliminar todo, incluyendo volúmenes
docker system prune -a --volumes
```

## Referencias

- [Documentación oficial de Docker run](https://docs.docker.com/engine/reference/run/)
- [Guía de comandos Docker](https://docs.docker.com/engine/reference/commandline/docker/)