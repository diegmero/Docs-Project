---
sidebar_position: 4
---

# Imágenes Docker

## ¿Qué es una Imagen Docker?

Una imagen Docker es una plantilla de solo lectura con instrucciones para crear un contenedor Docker. Las imágenes contienen el código, runtime, bibliotecas y dependencias necesarias para ejecutar una aplicación.

## Comandos Básicos

### Gestionar Imágenes

```bash
# Listar imágenes disponibles localmente
docker images

# Buscar imágenes en Docker Hub
docker search ubuntu

# Descargar una imagen
docker pull nginx

# Descargar una versión específica
docker pull nginx:1.21

# Eliminar una imagen
docker rmi nginx

# Ver información detallada de una imagen
docker image inspect nginx
```

### Crear Imágenes Personalizadas

#### Usando Dockerfile

```dockerfile
# Ejemplo de Dockerfile básico
FROM ubuntu:20.04
MAINTAINER Tu Nombre <tu@email.com>

# Actualizar el sistema
RUN apt-get update && apt-get upgrade -y

# Instalar aplicaciones
RUN apt-get install -y nginx

# Copiar archivos
COPY ./app /var/www/html

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Construir la imagen
docker build -t mi-app:1.0 .

# Construir sin usar caché
docker build --no-cache -t mi-app:1.0 .
```

### Guardar y Cargar Imágenes

```bash
# Guardar una imagen como archivo tar
docker save -o mi-imagen.tar mi-imagen:1.0

# Cargar una imagen desde archivo tar
docker load -i mi-imagen.tar

# Etiquetar una imagen
docker tag mi-imagen:1.0 mi-imagen:latest
```

## Buenas Prácticas

1. Usar imágenes oficiales como base
2. Minimizar el número de capas
3. Utilizar .dockerignore
4. Especificar versiones exactas
5. Usar multi-stage builds para reducir tamaño

### Ejemplo de .dockerignore

```plaintext
.git
node_modules
*.log
.env
```

### Ejemplo de Multi-stage Build

```dockerfile
# Etapa de construcción
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
```

:::tip Optimización
Utiliza `docker image prune` para eliminar imágenes sin usar y liberar espacio.
:::

## Referencias

- [Mejores prácticas para Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Referencia de Dockerfile](https://docs.docker.com/engine/reference/builder/)