<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item, idx) in todos" :key="idx" class="todo-item">
        <slot name="item" :item="item" :index="idx">
          <span>{{ item }}</span>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.todo-list ul{ 
    list-style:none; 
    padding:0;
    margin:0 }
.todo-item{ 
    background:#fff; 
    padding:12px 16px;
    border-radius:4px; 
    margin-bottom:10px;
    display:flex;
    justify-content:space-between; 
    align-items:center }
</style>