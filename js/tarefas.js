var app = new Vue({
    el: '#tarefas',
    data() {
        return {total: 0, concluidas: 0, tarefas: [], tarefa: { checked: false }, alerta: '' }
    },
    methods: {
        add() {
            this.tarefa.id = Date.now();
            if (this.tarefa.titulo !== undefined) {
                this.tarefas.push(this.tarefa);
                this.tarefa = { checked: false };
                this.total = this.tarefas.length;
            } else { this.alerta = ' Preencha o campo acima! ' }
        },
        remove(tarefa) {

            

            for(var i = 0; i < this.tarefas.length; i++) {
                if(this.tarefas[i].id == tarefa) {
                    this.tarefas.splice(i, 1);
                    break;
                }
            }


            this.total = this.tarefas.length;

            var completas = 0;
            for (const key in this.tarefas) {
                if (this.tarefas.hasOwnProperty(key)) {
                    const element = this.tarefas[key];
                    if (element.checked == true)
                        completas++
                }
            }
            this.concluidas = completas;


        },
        removerTodas(){

            this.tarefas = [];

            this.total = this.tarefas.length;
            this.concluidas = this.tarefas.length;


        },
     
        atualizar: function (tarefa) {

            tarefa.checked = !tarefa.checked

            var completas = 0;
            for (const key in this.tarefas) {
                if (this.tarefas.hasOwnProperty(key)) {
                    const element = this.tarefas[key];
                    if (element.checked == true)
                        completas++
                }
            }
            console.log()
            this.concluidas = completas;
        },
      
        keymonitor() {
            this.alerta = '';
        }
    }
})
