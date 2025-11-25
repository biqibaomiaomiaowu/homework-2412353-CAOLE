<template>
	<button class="delete-btn" @click="$emit('click')">
		删除
	</button>
</template>

<script>
export default {
	name: 'DeleteButton'
}
</script>

<style scoped>
.delete-btn{
	background-color: #e74c3c;
	border: none;
	color: #fff;
	padding: 6px 12px;
	border-radius: 4px;
	cursor: pointer;
}
.delete-btn:active{transform:translateY(1px)}
</style>