<template>
  <header class="header">
    <div class="logo-area">
      <span>DeepMedHub</span>
    </div>
  </header>
</template>

<script setup>
import LogoImg from '@/assets/imgs/logol.png'
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, rgba(230, 243, 255, 0.8), rgba(176, 216, 255, 0.8));
  box-shadow: 0 4px 12px rgba(135, 206, 250, 0.3);
  padding: 1rem 0;
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(135, 206, 250, 0.3);
}

.logo-area span {
  margin: 0;
  /* color: white; */
  color: rgba(135, 206, 250, 1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 5rem;
  position: relative;
  display: inline-block;
  transform: translateX(7rem);
}

.logo-area span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-100%, -50%);
  width: 5rem;
  height: 5rem;
  padding: 0.8rem;
  background: url('@/assets/imgs/logol.png') no-repeat center center;
  background-size: contain;
}
</style>
