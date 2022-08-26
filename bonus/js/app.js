const todos = [
    {
        text: 'Fare la spesa',
        done: false,
    },
    {
        text: 'Preparare la cena',
        done: false,
    },
    {
        text: 'Fare il bucato',
        done: false,
    },
    {
        text: 'Portare fuori il cane',
        done: false,
    },
    {
        text: 'Portare auto dal meccanico',
        done: false,
    },
];


const app = new Vue({
    el: '#app',
    data: {
        todos,
        newTodo: '',
    },
    computed: {
        completeTodos: function() {
            // let check = [];
            // this.todos.forEach(element => {
            //     if(element.done) check.push(element)
            // });
            // return check
            return this.todos.filter(({ done }) => done)
        },
    },
    methods: {
        check(todo){
            todo.done = !todo.done;
        },
        addTodo(){
            this.newTodo = this.newTodo.trim();            
            if(this.newTodo){
                this.todos.push({
                    text: this.newTodo,
                    done: false,
                });
            };
            this.newTodo = '';
        },
    },
});