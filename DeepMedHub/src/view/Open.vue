<template>
  <div class="open-container">
    <!-- 进度条加载阶段 -->
    <div v-if="loading" class="loading-section">
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="loading-text">加载中 {{ Math.round(progress) }}%</div>
    </div>

    <!-- 分开动画阶段 -->
    <div v-else class="split-section">
      <div class="top-half" :style="topHalfStyle">
        <div class="content">欢迎来到DeepMedHub</div>
      </div>
      <div class="bottom-half" :style="bottomHalfStyle">
        <div class="content">基于深度学习的生物医药大数据智能分析与预测平台</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(true)
const progress = ref(0)
const topHalfStyle = ref({ transform: 'translateY(0)' })
const bottomHalfStyle = ref({ transform: 'translateY(0)' })

const router = useRouter()

// 模拟进度条加载
const loadProgress = () => {
  const interval = setInterval(() => {
    progress.value += 1
    if (progress.value >= 100) {
      clearInterval(interval)
      // 进度条加载完成后，开始分开展示动画
      setTimeout(() => {
        loading.value = false
        // 触发分开展示动画
        splitAnimation()
      }, 300)
    }
  }, 30) // 3秒完成进度条加载 (100 * 30ms = 3000ms)
}

// 分开展示动画
const splitAnimation = () => {
  // 延迟一小段时间确保DOM更新后再执行动画
  setTimeout(() => {
    topHalfStyle.value.transform = 'translateY(-100vh)'
    bottomHalfStyle.value.transform = 'translateY(100vh)'

    // 动画完成后跳转到主页
    setTimeout(() => {
      router.push('/home')
    }, 800) // 1秒后跳转到主页
  }, 1000)
}

onMounted(() => {
  loadProgress()
})
</script>

<style scoped>
.open-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #e6f3ff, #b0d8ff);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 进度条样式 */
.loading-section {
  text-align: center;
  width: 80%;
}

.progress-container {
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(135, 206, 250, 0.3);
  margin-bottom: 20px;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4682b4, #87cefa);
  border-radius: 4px;
  transition: width 0.05s ease;
}

.loading-text {
  color: #4682b4;
  font-size: 1.2rem;
  font-weight: 500;
}

/* 分开展示样式 */
.split-section {
  width: 100%;
  height: 100%;
  position: relative;
}

.top-half,
.bottom-half {
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  transition: transform 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #e6f3ff, #b0d8ff);
}

.top-half {
  top: 0;
  border-bottom: 1px solid rgba(135, 206, 250, 0.5);
  align-items: flex-end;
}

.bottom-half {
  bottom: 0;
  border-top: 1px solid rgba(135, 206, 250, 0.5);
  align-items: flex-start;
}

.top-half .content,
.bottom-half .content {
  color: #4682b4;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(135, 206, 250, 0.3);
}
</style>
