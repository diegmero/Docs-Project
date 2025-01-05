---
sidebar_position: 5
---

# Volúmenes Docker

## ¿Qué son los Volúmenes?

Los volúmenes son el mecanismo preferido para persistir los datos generados y utilizados por los contenedores Docker. Los volúmenes son completamente gestionados por Docker y son independientes del ciclo de vida del contenedor.

## Tipos de Volúmenes

1. **Volúmenes nombrados**: Completamente gestionados por Docker
2. **Bind mounts**: Directorio del host montado en el contenedor
3. **tmpfs mounts**: Almacenamiento temporal en memoria

## Comandos Básicos

### Gestión de Volúmenes

```bash
# Crear un volumen
docker volume create mi-volumen

# Listar volúmenes
docker volume ls

# Inspeccionar un volumen
docker volume inspect mi-volumen

# Eliminar un volumen
docker volume rm mi-volumen

# Eliminar todos los volúmenes no utilizados
docker volume prune
```

### Usar Volúmenes con Contenedores

```bash
# Crear contenedor con volumen nombrado
docker run -d \
  --name mi-app \
  -v mi-volumen:/data \
  nginx

# Usar bind mount
docker run -d \
  --name mi-web \
  -v $(pwd)/html:/usr/share/nginx/html \
  nginx

# Volumen de solo lectura
docker run -d \
  --name mi-app-readonly \
  -v mi-volumen:/data:ro \
  nginx
```

## Ejemplos Prácticos

### Base de Datos con Persistencia

```bash
# Crear volumen para MySQL
docker volume create mysql_data

# Ejecutar MySQL con volumen
docker run -d \
  --name mi-mysql \
  -e MYSQL_ROOT_PASSWORD=secreto \
  -v mysql_data:/var/lib/mysql \
  mysql:8.0
```

### Compartir Datos entre Contenedores

```bash
# Crear volumen compartido
docker volume create datos_compartidos

# Contenedor 1
docker run -d \
  --name app1 \
  -v datos_compartidos:/shared \
  ubuntu

# Contenedor 2
docker run -d \
  --name app2 \
  -v datos_compartidos:/shared \
  ubuntu
```

## Backup y Restauración

```bash
# Backup de un volumen
docker run --rm \
  -v mi-volumen:/source \
  -v $(pwd):/backup \
  alpine tar czf /backup/mi-volumen.tar.gz -C /source .

# Restaurar un volumen
docker run --rm \
  -v mi-volumen:/dest \
  -v $(pwd):/backup \
  alpine tar xzf /backup/mi-volumen.tar.gz -C /dest
```

:::caution Importante
Los volúmenes no se eliminan automáticamente cuando se elimina un contenedor. Esto es una característica de seguridad para prevenir pérdida de datos.
:::

## Referencias

- [Almacenamiento en Docker](https://docs.docker.com/storage/)
- [Volúmenes Docker](https://docs.docker.com/storage/volumes/)