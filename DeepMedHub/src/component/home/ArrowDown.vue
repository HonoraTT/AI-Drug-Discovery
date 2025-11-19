<template>
  <div class="scroll-down" :class="{ hidden }" @click="handleClick">
    <div class="arrow-circle">
      <div class="arrow-icon"></div>
    </div>
  </div>
</template>

<script setup>
// 定义接收的props
const props = defineProps({
  hidden: {
    type: Boolean,
    default: false,
  },
})

// 定义触发的事件
const emit = defineEmits(['click'])

// 处理点击事件
const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.scroll-down {
  position: fixed;
  left: 50%;
  top: 31%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
  padding: 1rem;
}

.scroll-down.hidden {
  opacity: 0;
  pointer-events: none;
}
.arrow-circle {
  width: 50px;
  height: 50px;
  border: 2px solid #87cefa;
  background: linear-gradient(135deg, #e6f3ff, #b0d8ff);
  box-shadow: 0 4px 8px rgba(135, 206, 250, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  animation: bounce 2s infinite;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  border-right: 3px solid #4682b4;
  border-bottom: 3px solid #4682b4;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
