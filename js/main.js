var app = new Vue({
    el: '#tarefas',
    data: {
        tarefa: '',
        tarefas: [
            {
                nome: 'Primeira Tarefa',
                concluido: false
            }
        ]
    },
    methods: {
        adicionarTarefa() {
            this.tarefas.push({
                nome: this.tarefa,
                concluido: false
            });
            this.tarefa = "";
            document.querySelector("#input-tarefa").focus();
        },
        concluirTarefa(tarefa) {
            tarefa.concluido = !tarefa.concluido;
        },
        deletarTarefa(index) {
            this.tarefas.splice(index, 1);
        }
    }
});