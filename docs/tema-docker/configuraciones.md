---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuraciones
Algunas recomendaciones despues de instalación que hará una mejor experiencia del profesional.

---
## Habilitar el Inicio Automático

Esta configuración permite que Docker inicie automáticamente cuando el sistema arranca.

<Tabs groupId="operating-systems">
<TabItem value="ubuntu" label="Ubuntu">

```bash
# Habilitar el servicio principal de Docker para que inicie con el sistema
# Esto asegura que el daemon de Docker esté disponible después de cada reinicio
sudo systemctl enable docker.service

# Habilitar el servicio de Containerd (runtime de contenedores)
# Containerd es el runtime que Docker usa para gestionar los contenedores
sudo systemctl enable containerd.service

# Verificar el estado de los servicios (opcional)
sudo systemctl status docker.service
sudo systemctl status containerd.service
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```bash
# Habilitar el servicio principal de Docker
# Esto configura Docker para iniciar automáticamente con el sistema
sudo systemctl enable docker

# Habilitar el servicio de Containerd
# Necesario para la gestión de contenedores
sudo systemctl enable containerd

# Verificar el estado de los servicios (opcional)
sudo systemctl status docker
sudo systemctl status containerd
```

</TabItem>
</Tabs>

---

## Rotacion de logs

Esta configuración establece límites para los logs de Docker, evitando que ocupen demasiado espacio en disco.

```bash
# Crear el directorio de configuración de Docker si no existe
# El directorio /etc/docker almacena todas las configuraciones del daemon
sudo mkdir -p /etc/docker

# Crear y configurar el archivo daemon.json con las opciones de logging
# Este comando crea o sobrescribe el archivo de configuración con los siguientes parámetros:
# - log-driver: establece json-file como el driver de logs predeterminado
# - max-size: limita cada archivo de log a 10 megabytes
# - max-file: mantiene un máximo de 3 archivos de log por contenedor
sudo tee /etc/docker/daemon.json <<EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
EOF

# Verificar que el archivo se creó correctamente (opcional)
cat /etc/docker/daemon.json
```

### Aplicar Cambios

Después de realizar cambios en la configuración, es necesario reiniciar el servicio de Docker.

```bash
# Reiniciar el servicio de Docker para aplicar los cambios
# Este comando detiene y vuelve a iniciar el daemon de Docker
sudo systemctl restart docker

# Verificar que el servicio está funcionando correctamente
sudo systemctl status docker

# Verificar que los cambios de configuración se aplicaron (opcional)
docker info | grep "Logging Driver"
```

:::tip Verificación de la Configuración
Puedes verificar que los cambios se aplicaron correctamente usando estos comandos:
- Para logging: `docker info | grep "Logging Driver"`
- Para servicios: `systemctl list-unit-files | grep docker`
:::

:::caution Importante
El reinicio del servicio de Docker detendrá temporalmente todos los contenedores en ejecución. En un entorno de producción, planifica este reinicio durante una ventana de mantenimiento.
:::

## Referencias

- [Documentación oficial rotación logs](https://docs.docker.com/engine/logging/drivers/json-file/)
- [Documentación post instalación](https://docs.docker.com/engine/install/linux-postinstall/)
- [Instalación Docker Desktop](https://docs.docker.com/desktop/)