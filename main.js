/* CONSEGNA
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x":
cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi":cliccando sul
 pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
  che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante,
 intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item,
invertire il valore della proprietà done del todo corrispondente
(se done era uguale a false, impostare true e viceversa) 
*/

const todoArray = [
    {
        text: "lavare i piatti",
        done: true,
    },
    {
        text: "spazzare a terra",
        done: false,
    },
    {
        text: "andare dal dentista",
        done: true,
    }
]

const app = new Vue({
    el: "#app",
    data: {
        todoArray,
        task: ""
    },
    methods: {
        verificaDoneElemento(element) {
            if (element.done == false) {
                return "text-decoration-line-through";
            }
        },
        remove(index) {
            this.todoArray.splice(index, 1);
        },
        addNewTask() {
            const newTask = {
                text: this.task.trim(),
                done: true
            }
            if (newTask.text.length > 0) {
                this.todoArray.unshift(newTask);
                this.task = "";
            }

        }
    },
});