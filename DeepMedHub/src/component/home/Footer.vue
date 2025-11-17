<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 DeepMedHub. 保留所有权利.</p>
      <p>基于深度学习的生物医药大数据智能分析与预测平台</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background: linear-gradient(135deg, rgba(135, 206, 250, 0.8), rgba(70, 130, 180, 0.8));
  color: white;
  text-align: center;
  padding: 0 0;
  margin-top: 3rem;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(135, 206, 250, 0.3);
}

.footer-content {
  max-width: none;
  margin: 0 0;
  padding: 0 0;
}

.footer-content p {
  margin: 0.5rem 0;
}
</style>
