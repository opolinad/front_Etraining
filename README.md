# FrontEtraining

En este repositorio se encuentra lo correspondiente al front end de la CRUD para E training.

## Ejecución

Para ejecutar el proyecto se puede clonar el mismo y ejecutarlo desde un ambiente local. Para clonarlo puede acceder al botón verde que encuentra en la parte superior izquierda de la siguiente imagen:

![image](https://user-images.githubusercontent.com/92406653/165334857-28fe369b-cc22-4b80-ae25-e81c884f3e51.png)

Una vez hace click en el botón puede copiar el enlace que se despliega (o puede descargar el archivo ZIP)

![image](https://user-images.githubusercontent.com/92406653/165335017-3bbcf0c1-4007-4d14-88a5-516f42d94db0.png)

Una vez se ha hecho el paso anterior, en su computador debe proceder al directorio donde quiere que se localice el proyecto y (1) si copio la dirección, debe abrir la terminal y escribir el comando ```git clone urlcopiada``` donde urlcopiada es lo que ha copiado (2) si descargó el zip, debe proceder a descomprimirlo (en la locación deseada).

Una vez el proyecto está en el directorio deseado, se deben ejecutar las dependencias necesarias, para ello puede abrir la terminal, asegurandose que esté en el directorio del proyecto, y escribir el comando ```npm install``` (si se hace uso de npm) o ```yarn install``` (si se hace uso de yarn).

Al cabo de unos minutos cuando estén instaladas todas las dependencias se puede correr el comando ```ng serve``` y luego de esto puede dirigirse a su navegador e ingresar la url ```http://localhost:4200/```

Si todo ha ido bien, debería tener una pantalla como la siguiente:

![image](https://user-images.githubusercontent.com/92406653/165336796-bd7486f0-6145-4a24-bd24-38faf4ba8646.png)

Ahora, para poder interactuar con la aplicación es necesario levantar el servidor del back, cuyo repo se encuentra en: https://github.com/opolinad/back_Etraining

Una vez esté levantado el servidor del back puede agregar, editar o borrar cursos.

![ezgif-3-079d27d5df](https://user-images.githubusercontent.com/92406653/165339315-dc6a6ca0-cca0-4ad3-beed-bea318d0bf2e.gif)

