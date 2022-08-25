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
        done: true,
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
    },
    methods: {
        check(todo){
            todo.done = !todo.done;
        },
    },
})