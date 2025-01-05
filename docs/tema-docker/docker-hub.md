---
sidebar_position: 6
---

# Docker Hub

## ¿Qué es Docker Hub?

Docker Hub es el repositorio público más grande de imágenes de contenedores. Funciona como una biblioteca central donde puedes:
- Encontrar imágenes oficiales de software
- Guardar tus propias imágenes
- Compartir imágenes con otros
- Automatizar la construcción de imágenes

## Crear una Cuenta

1. Visita [Docker Hub](https://hub.docker.com)
2. Haz clic en "Sign Up"
3. Completa el formulario de registro
4. Verifica tu correo electrónico

## Comandos Básicos

### Iniciar Sesión

```bash
# Iniciar sesión en Docker Hub desde la terminal
docker login

# Te pedirá tu usuario y contraseña
Username: tu_usuario
Password: tu_contraseña
```

### Cerrar Sesión

```bash
# Cerrar sesión por seguridad
docker logout
```

## Trabajar con Imágenes

### Buscar Imágenes

```bash
# Buscar imágenes en Docker Hub
docker search ubuntu

# Buscar con filtros
docker search --filter "is-official=true" nginx
```

### Descargar Imágenes

```bash
# Descargar la última versión
docker pull nginx

# Descargar una versión específica
docker pull nginx:1.21

# Descargar desde un repositorio privado
docker pull usuario/mi-app:1.0
```

### Subir Imágenes

```bash
# Etiquetar una imagen local para subirla
docker tag mi-aplicacion:1.0 tu_usuario/mi-aplicacion:1.0

# Subir la imagen a Docker Hub
docker push tu_usuario/mi-aplicacion:1.0
```

## Crear y Gestionar Repositorios

### Crear un Nuevo Repositorio

1. Inicia sesión en Docker Hub
2. Haz clic en "Create Repository"
3. Elige un nombre para tu repositorio
4. Selecciona la visibilidad (público o privado)
5. Haz clic en "Create"

### Ejemplo Práctico: Subir tu Primera Imagen

```bash
# 1. Crear una imagen local
docker build -t mi-primera-app .

# 2. Etiquetar la imagen para Docker Hub
docker tag mi-primera-app tu_usuario/mi-primera-app:1.0

# 3. Subir la imagen
docker push tu_usuario/mi-primera-app:1.0
```

## Organizaciones y Equipos

### Crear una Organización

1. Ve a Docker Hub
2. Haz clic en "Organizations"
3. Selecciona "Create Organization"
4. Sigue los pasos del asistente

### Gestionar Equipos

```bash
# Ejemplo de estructura de organización
mi-organizacion/
├── equipo-desarrollo
│   └── usuario1, usuario2
├── equipo-qa
│   └── usuario3, usuario4
└── repositorios-compartidos
```

## Automatización

### Configurar Builds Automáticos

1. Conecta tu cuenta de GitHub/BitBucket
2. Selecciona un repositorio
3. Configura las reglas de build
4. Define las variables de entorno

```yaml
# Ejemplo de configuración de build
build:
  tags:
    - latest
    - '${DOCKER_TAG}'
  context: .
  dockerfile: Dockerfile
```

### Webhooks

1. Ve a la configuración del repositorio
2. Selecciona "Webhooks"
3. Agrega un nuevo webhook

```bash
# Ejemplo de URL de webhook
https://hub.docker.com/api/build/v1/source/[tu-token]
```

## Buenas Prácticas

### Etiquetado de Imágenes

```bash
# Usar versiones específicas
docker tag mi-app:1.0 usuario/mi-app:1.0.0

# Actualizar latest
docker tag mi-app:1.0 usuario/mi-app:latest
```

### Documentación

Crear un buen README.md para tu repositorio:

```markdown
# Nombre de la Imagen

## Descripción
Breve descripción de tu imagen

## Uso
```bash
docker run -d -p 8080:80 usuario/mi-app:1.0
```

## Variables de Entorno
- `PUERTO`: Puerto de la aplicación (default: 80)
- `DEBUG`: Modo debug (true/false)

## Ejemplos de Uso
```

### Seguridad

1. Activar autenticación de dos factores
2. Usar tokens de acceso en lugar de contraseñas
3. Escanear imágenes regularmente
4. Mantener las imágenes actualizadas

```bash
# Crear un token de acceso personal
docker login -u usuario --password-stdin

# Escanear una imagen
docker scan mi-imagen:latest
```

## Planes y Límites

### Plan Gratuito
- 1 repositorio privado
- Pulls ilimitados públicos
- Builds automáticos básicos

### Plan Pro
- Repositorios privados ilimitados
- Parallel builds
- Autobuilds avanzados

## Solución de Problemas Comunes

### Error de Autenticación

```bash
# Verificar credenciales
docker login --username tu_usuario

# Limpiar credenciales antiguas
rm ~/.docker/config.json
docker login
```

### Error al Subir Imágenes

```bash
# Verificar etiquetado
docker images | grep mi-app

# Verificar permisos
docker login
docker push usuario/mi-app:tag
```

## Referencias y Recursos

- [Documentación oficial de Docker Hub](https://docs.docker.com/docker-hub/)
- [Guía de mejores prácticas](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Hub CLI reference](https://docs.docker.com/engine/reference/commandline/hub/)

:::tip Consejo
Mantén un registro de las versiones de tus imágenes y documenta los cambios en cada versión.
:::

:::caution Importante
No incluyas información sensible (contraseñas, tokens, claves) en tus imágenes públicas.
:::