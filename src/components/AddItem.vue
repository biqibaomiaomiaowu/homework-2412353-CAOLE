<template>
  <div class="add-wrap">
    <input v-model="text" @keyup.enter="onAdd" placeholder="请输入待办事项..." class="input" />
    <button class="add-btn" @click="onAdd">添加</button>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data() {
    return { text: '' }
  },
  methods: {
    onAdd() {
      const v = this.text && this.text.trim()
      if (!v) return
      this.$emit('add', v)
      this.text = ''
    }
  }
}
</script>

<style scoped>
.add-wrap{ display:flex; gap:10px }
.input{ flex:1; padding:10px 12px; border:2px solid #cfe8ff; border-radius:4px }
.add-btn{ background:#007bff; color:#fff; border:none; padding:10px 14px; border-radius:4px; cursor:pointer }
</style>
