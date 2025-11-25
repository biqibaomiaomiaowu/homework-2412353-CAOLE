<template>
  <div class="wrap">
    <div class="card">
      <h2 class="title">本周待办事项</h2>

      <TodoList :todos="todos">
        <template #item="{ item, index }">
          <span class="item-text">{{ item }}</span>
          <DeleteButton @click="remove(index)" />
        </template>
      </TodoList>

      <div class="controls">
        <AddItem @add="add" />
      </div>

      <div class="clear-wrap">
        <button class="clear-btn" @click="clearAll">清空所有</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList.vue'
import AddItem from './AddItem.vue'
import DeleteButton from './DeleteButton.vue'

export default {
  name: 'TodoApp',
  components: { TodoList, AddItem, DeleteButton },
  data() {
    return {
      todos: [
        '去图书馆学习',
        '上羽毛球课',
        '会议室开会'
      ]
    }
  },
  methods: {
    add(text) {
      this.todos.push(text)
    },
    remove(idx) {
      this.todos.splice(idx, 1)
    },
    clearAll() {
      this.todos = []
    }
  }
}
</script>

<style scoped>
.wrap{display:flex;justify-content:center;margin-top:30px}
.card{
  width:720px;
  background:#f5f5f5;
  padding:28px 24px 36px 24px;
  border-radius:4px;
  box-shadow:0 1px 0 rgba(0,0,0,0.05);
}
.title{ text-align:center; margin:0 0 18px; font-size:24px }
.controls{ margin-top:10px }
.clear-wrap{ display:flex; justify-content:center; margin-top:14px }
.clear-btn{ background:#6c757d; color:#fff; border:none; padding:8px 14px; border-radius:4px; cursor:pointer }
</style>
