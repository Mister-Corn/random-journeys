<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Todos from "./components/ToDos.vue";
import AddTodo from "./components/AddTodo.vue";
const url = "https://jsonplaceholder.typicode.com/todos";
export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })
        .then(response => response.json())
        .then(data => (this.todos = [...this.todos, data]));
    },
    deleteTodo(id) {
      fetch(`${url}/${id}`, {
        method: "DELETE"
      })
        .then(() => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        })
        .catch(err => err);
    }
  },
  created() {
    fetch(`${url}?_limit=5`)
      .then(response => response.json())
      .then(json => (this.todos = json))
      .catch(err => err);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
