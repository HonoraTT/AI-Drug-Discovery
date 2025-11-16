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
  background: linear-gradient(135deg, #87cefa, #4682b4);
  box-shadow: 0 4px 12px rgba(135, 206, 250, 0.3);
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
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
