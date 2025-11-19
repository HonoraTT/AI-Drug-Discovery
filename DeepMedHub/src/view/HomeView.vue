<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <Title />

    <!-- 导航栏 -->
    <Nav />

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 欢迎区域 -->
      <section class="welcome-section">
        <div class="welcome-card">
          <h2>欢迎来到DeepMedHub：基于深度学习的生物医药大数据智能分析与预测平台</h2>
          <p>在这里，您可以浏览蛋白质、药物、基因的相关信息，还能进行乳酰化位点预测。</p>
        </div>
      </section>

      <!-- 左右布局区域 -->
      <section class="content-section">
        <div class="content-wrapper">
          <MainLeft />
          <div class="divider"></div>
          <MainRight />
        </div>
      </section>

      <!-- 向下箭头提示 -->

      <ArrowDown />

      <!-- 图文交替区域 -->
      <div class="pic-text">
        <MainCenter />
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Title from '@/component/home/Title.vue'
import Nav from '@/component/home/Nav.vue'
import MainLeft from '@/component/home/MainLeft.vue'
import MainRight from '@/component/home/MainRight.vue'
import MainCenter from '@/component/home/MainCenter.vue'
import Footer from '@/component/home/Footer.vue'
import ArrowDown from '@/component/home/ArrowDown.vue'

// 轮播图自动播放逻辑
const startCarousel = () => {
  const carouselItems = document.querySelectorAll('.carousel-item')
  const indicators = document.querySelectorAll('.indicator')
  let currentIndex = 0

  const showNextSlide = () => {
    carouselItems.forEach((item) => item.classList.remove('active'))
    indicators.forEach((indicator) => indicator.classList.remove('active'))

    currentIndex = (currentIndex + 1) % carouselItems.length

    carouselItems[currentIndex].classList.add('active')
    indicators[currentIndex].classList.add('active')
  }

  // 设置自动轮播
  setInterval(showNextSlide, 3000)
}

// 滚动监听逻辑
const handleScroll = () => {
  const scrollDown = document.querySelector('.scroll-down')
  if (window.scrollY > 200) {
    scrollDown?.classList.add('hidden')
  } else {
    scrollDown?.classList.remove('hidden')
  }
}

// 页面加载完成后启动轮播
onMounted(() => {
  startCarousel()
  window.addEventListener('scroll', handleScroll)
})

// 组件卸载前移除事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;

  background-attachment: fixed;
  position: relative;
  overflow-x: hidden;

  background: linear-gradient(135deg, rgba(230, 243, 255, 0.7), rgba(176, 216, 255, 0.7));
  border-radius: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 250, 0.3);
  box-shadow: 0 8px 16px rgba(135, 206, 250, 0.2);
}

/* 添加背景伪元素增强毛玻璃效果 */
.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(135, 206, 250, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: -1;
}

/* 主要内容样式 */
.main-content {
  margin: 0 auto;
  padding: 2rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-card {
  background: linear-gradient(135deg, rgba(230, 243, 255, 0.8), rgba(176, 216, 255, 0.8));
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(135, 206, 250, 0.2);
  margin: 0 auto;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 250, 0.3);
  position: relative;
  overflow: hidden;
}

.welcome-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  z-index: -1;
}

.welcome-card h2 {
  color: #4682b4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.welcome-card p {
  color: #4682b4;
  line-height: 1.6;
}

/* 内容区域样式 */
.content-section {
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(135deg, rgba(230, 243, 255, 0.7), rgba(176, 216, 255, 0.7));
  border: 1px solid rgba(135, 206, 250, 0.3);
  box-shadow: 0 8px 16px rgba(135, 206, 250, 0.2);
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: stretch;
}

.divider {
  width: 2px;
  background: linear-gradient(to bottom, #87cefa, #4682b4, #87cefa);
  margin: 0 1rem;
  border-radius: 1px;
  box-shadow: 0 0 2px rgba(135, 206, 250, 0.5);
  align-self: stretch;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.5;
  }
}

.pic-text {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
