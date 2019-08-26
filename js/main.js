var app = new Vue({
    el: '#tarefas',
    data: {
        tarefa: '',
        tarefas: []
    },
    methods: {
        addTarefa(){
            this.tarefas.push(this.tarefa);
        }
    }
});