<template>
  <div class="app">
    <h1 >本周代办事项</h1>
     <TodoApp />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
export default {
  components: { TodoApp }

}
</script>

<style>
h1{
  font-size: 30px;
  text-align: center;
}
.app {
  margin-top: 50px;
  align-items: center;
  background-color: azure;
  width: 400px;
  margin: 0 auto;
}
</style>