<template>
  <header class="header">
    <div class="logo-area">
      <h1>DeepMedHub</h1>
    </div>
  </header>
</template>

<script setup>
// Title组件不需要额外的逻辑
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #87cefa, #4682b4);
  box-shadow: 0 4px 12px rgba(135, 206, 250, 0.3);
  padding: 1rem 0;
  text-align: center;
}

.logo-area h1 {
  margin: 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
}
</style>
