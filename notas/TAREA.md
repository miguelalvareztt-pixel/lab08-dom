
# Tarea: Mi componente interactivo

## Componente elegido

Lista interactiva de tareas con prioridades Alta, Media y Baja. Permite agregar y eliminar actividades.

## Codigo principal

```js

 // Tarea del Laboratorio 08: Lista interactiva

 class Tarea {
   constructor(descripcion, prioridad) {
     this.descripcion = descripcion;
     this.prioridad = prioridad;
   }

   mostrarDetalle() {
     return this.descripcion + " - Prioridad: " + this.prioridad;
   }
 }

const tarea1 = new Tarea("Estudiar JavaScript", "Alta");
const tarea2 = new Tarea("Completar laboratorio", "Media");

console.log(tarea1.mostrarDetalle());
console.log(tarea2.mostrarDetalle());

const listaTareas = document.querySelector("#listaTareas");

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = tarea.mostrarDetalle();

const btnBorrar = document.createElement("button");
btnBorrar.textContent = "Borrar";

btnBorrar.addEventListener("click", () => {
  li.remove();
});

li.appendChild(btnBorrar);

  listaTareas.appendChild(li);
}

mostrarTarea(tarea1);
mostrarTarea(tarea2);

const formTarea = document.querySelector("#formTarea");
const descripcion = document.querySelector("#descripcion");
const prioridad = document.querySelector("#prioridad");

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevaTarea = new Tarea(descripcion.value, prioridad.value);
  mostrarTarea(nuevaTarea);

  descripcion.value = "";
});

```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Agregar una tarea | La tarea aparece en la lista | Si |
| Borrar una tarea | La tarea desaparece de la lista | Si |
| Seleccionar prioridad Alta | La tarea muestra la prioridad Alta | Si |

## Por que disene asi mi clase

La clase Tarea utiliza los atributos descripcion y prioridad para organizar las actividades.

El metodo mostrarDetalle permite mostrar la informacion de cada tarea sin repetir codigo.
