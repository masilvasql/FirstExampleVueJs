
// var MyComponent = Vue.extend({
//     template:`
//         <my-component
//             v-for="(item, index) in items"
//             v-bind:item="item"
//             v-bind:index="index"
//             v-bind:key="item.id"
//         ></my-component>
//     `
// })

// Vue.component('my-component', MyComponent)

Vue.component('todo-item', {
    template:`
        <tr>
            <td class="text-left">
                {{title}}
            </td>
            <td>
                {{observacao}}
            </td>
            <td class="text-right">
                <button class="text-left btn btn-danger" v-on:click="$emit(\'remove\' )">Remove</button>
            </td>
        </tr>
        `,
    props:['title', 'observacao']
})

new Vue({
    el: '#todo-list-example',
    data:{
        newTodoText:'',
        todos:[],
        nextTodoId:1,
        observacao:''
    },
    methods:{
        addNewTodo:function(){
            this.todos.push({
                id:this.nextTodoId ++,
                title:this.newTodoText,
                observacao:this.observacao
            })
            this.newTodoText = ''
            this.observacao = ''
        }
    }
})
