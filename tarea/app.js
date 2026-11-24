
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
