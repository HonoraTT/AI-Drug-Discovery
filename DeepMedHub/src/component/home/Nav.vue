<template>
  <nav class="navbar">
    <ul class="nav-menu">
      <li class="nav-item active"><a href="#" class="nav-link">首页</a></li>
      <li class="nav-item"><a href="#" class="nav-link">PDB文件解析</a></li>
      <li class="nav-item"><a href="#" class="nav-link">药物信息查询</a></li>
      <li class="nav-item"><a href="#" class="nav-link">基因表达量分析</a></li>
      <li class="nav-item"><a href="#" class="nav-link">乳酰化位点预测</a></li>
      <li class="nav-item"><a href="#" class="nav-link">帮助文档</a></li>
      <li class="nav-item"><a href="#" class="nav-link">关于我们</a></li>
      <li class="nav-item"><a href="#" class="nav-link">联系我们</a></li>
    </ul>
  </nav>
</template>

<script setup>
// Nav组件不需要额外的逻辑
</script>

<style scoped>
.navbar {
  background-color: #e0f7e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.nav-menu {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 0.5rem;
}

.nav-link {
  text-decoration: none;
  color: #2e7d32;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #c8e6c9;
}

.nav-link.active {
  background-color: #81c784;
  font-weight: bold;
}
</style>