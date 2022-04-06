#############################################################
# Demo de videos Pablo Caraballo
react + react context + styled component + axios + lodash

_sitio activo:_ 
_https://videochallenge.vercel.app/_

## Estructura general

_Pagina principal_
```
    App.js (contiene el context provider y los componentes pedidos DisplayComponent y ControlsComponent)
```
```
_Componentes principales_

```
    ControlsComponent: Componente que realiza la peticion ajax para obtener los videos y listarlos, a su vez usa dos componentes extras:

    Item.js que tiene a cada item de video del listado con su respectivo comportamiento y muestra los datos (titulo, thumb y descripcion), al hacer click, dispara el dispatch para que el reducer setee el video seleccionado en base al action.

    ControlButtons.js que tiene los controles de play/pause, volumen y los extras de brillo y contraste respectivamente, al interactuar se hace el dispatch para setear los cambios al current video (video seleccionado).
    
    components\ControlsComponent\index.js
    components\ControlsComponent\Item.js
    components\ControlsComponent\ControlButtons.js
```
```
    DisplayComponent: Componente donde tiene el tag video, que en base a las acciones disparadas por el dispatch del react context, este componente refleja los cambios (play, pause, volumen, brillo, contraste y cambio del current video).
    
    components\DisplayComponent\index.js
```
```
    libs: En este directorio se pueden encontras las constantes, context-lib, reducer y reducerAction respectivamente.
    
    libs\constants.js
    libs\context-lib.js
    libs\reducer-lib.js
    libs\reducerAction-lib.js
```
_Extras_

```
    Se intentó realizar los extras pedidos como brillo, contraste, mostrar la metadata de cada item y ademas
    se controla que el thumb exista, en caso de no poder cargar cualquier imagen de cada item, la imagen dispara un onError mostrando una imagen a modo de "imagen no disponible".
```
