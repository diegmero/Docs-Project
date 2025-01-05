---
sidebar_position: 1
---

# Instalación de Docker en Linux

Docker es una plataforma de virtualización a nivel de sistema operativo que permite crear, distribuir y ejecutar aplicaciones en contenedores. Esta guía detalla el proceso de instalación en sistemas Linux populares como Ubuntu y Fedora.

## Requisitos del Sistema

Antes de comenzar la instalación, asegúrate de que tu sistema cumpla con los siguientes requisitos:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
<TabItem value="ubuntu" label="Ubuntu">

- Ubuntu 20.04 LTS o superior
- Arquitectura 64-bit
- Al menos 4GB de RAM
- Acceso a Internet
- Privilegios de administrador (sudo)

</TabItem>
<TabItem value="fedora" label="Fedora">

- Fedora 37 o superior
- Arquitectura 64-bit
- Al menos 4GB de RAM
- Acceso a Internet
- Privilegios de administrador (sudo)

</TabItem>
</Tabs>

## Paso 1: Actualizar el Sistema

Antes de comenzar la instalación, es importante asegurarse de que el sistema esté completamente actualizado.

<Tabs groupId="operating-systems">
<TabItem value="ubuntu" label="Ubuntu">

```bash
sudo apt update && sudo apt upgrade -y
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```bash
sudo dnf update && sudo dnf upgrade -y
```

</TabItem>
</Tabs>

## Paso 2: Configurar el Repositorio de Docker

### Ubuntu

```bash
# Instalar paquetes necesarios
sudo apt-get install ca-certificates curl gnupg lsb-release -y

# Crear directorio para las llaves
sudo install -m 0755 -d /etc/apt/keyrings

# Descargar la llave GPG oficial de Docker
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Agregar el repositorio a las fuentes de Apt
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Actualizar el índice de paquetes
sudo apt-get update
```

:::tip Nota para Usuarios de Distribuciones Derivadas
Si utilizas una distribución derivada de Ubuntu (como Linux Mint), puede ser necesario usar `UBUNTU_CODENAME` en lugar de `VERSION_CODENAME`.
:::

### Fedora

```bash
# Agregar el repositorio de Docker
sudo dnf -y install dnf-plugins-core

sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo

# Habilitar el repositorio
sudo dnf config-manager --enable docker-ce-nightly
```

## Paso 3: Instalar Docker Engine

<Tabs groupId="operating-systems">
<TabItem value="ubuntu" label="Ubuntu">

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Iniciar el servicio
sudo systemctl start docker

# Habilitar el inicio automático
sudo systemctl enable docker
```

</TabItem>
</Tabs>

## Paso 4: Verificar la Instalación

Verifica que Docker se haya instalado correctamente:

```bash
# Ver la versión de Docker
docker --version

# Ver información detallada
docker info
```

## Paso 5: Configurar Permisos de Usuario

Para evitar usar `sudo` con cada comando de Docker:

```bash
# Crear el grupo docker (si no existe)
sudo groupadd docker

# Agregar tu usuario al grupo
sudo usermod -aG docker $USER

# Aplicar los cambios de grupo
newgrp docker
```

:::caution Importante
Después de estos cambios, cierre sesión o reinicie el sistema.
:::

## Paso 6: Probar la Instalación

Ejecuta un contenedor de prueba para verificar que todo funciona correctamente:

```bash
docker run hello-world
```

## Referencias

- [Documentación oficial de Docker](https://docs.docker.com/)
- [Guía de instalación para Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Guía de instalación para Fedora](https://docs.docker.com/engine/install/fedora/)

:::tip Consejo
Para mantenerte actualizado con las últimas versiones y características de Docker, visita regularmente la [documentación oficial](https://docs.docker.com/).
:::