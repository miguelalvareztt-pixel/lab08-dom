
# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El titulo cambio a "Hola TECSUP". | Si |
| style.color | El titulo cambio de negro a azul. | Si |


## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Hacer un clic en el boton | 1 |
| dblclick | Hacer doble clic en el boton | 1 |
| mouseover | Pasar el cursor sobre el boton | 1 |

evento.type indica el tipo de evento que se ejecuto, por ejemplo, click.

evento.target identifica el elemento HTML que produjo el evento, en este caso, el boton "Sumar 1".

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Aparecio el saludo "Hola, Miguel" automaticamente. | No |
| Enviar sin preventDefault | El formulario se envio y el mensaje desaparecio. | Si |
| Enviar con preventDefault, correo sin @ | Aparecio el mensaje rojo "Correo no valido: falta @". | No |
| Enviar con preventDefault, correo con @ | Aparecio "Enviado: miguel@gmail.com". | No |


## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875.00 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90.00 |

Utilizar una clase permite crear varios productos con la misma estructura, sin repetir el código para cada uno.

Además, facilita calcular descuentos y mostrar los productos en la página de manera automática, sin escribir cada elemento manualmente en HTML.

