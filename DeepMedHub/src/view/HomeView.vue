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
          <MainRight />
        </div>
      </section>

      <!-- 向下箭头提示 -->
      <div class="scroll-down">
        <div class="arrow-icon">↓</div>
        <p>向下滑动查看更多</p>
      </div>
      
      <!-- 图文交替区域 -->
      <MainCenter />

      
    </main>

    <!-- 页脚 -->
      <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Title from '@/component/home/Title.vue'
import Nav from '@/component/home/Nav.vue'
import MainLeft from '@/component/home/MainLeft.vue'
import MainRight from '@/component/home/MainRight.vue'
import MainCenter from '@/component/home/MainCenter.vue'
import Footer from '@/component/home/Footer.vue'

// 轮播图自动播放逻辑
const startCarousel = () => {
  const carouselItems = document.querySelectorAll('.carousel-item')
  const indicators = document.querySelectorAll('.indicator')
  let currentIndex = 0

  const showNextSlide = () => {
    carouselItems.forEach(item => item.classList.remove('active'))
    indicators.forEach(indicator => indicator.classList.remove('active'))
    
    currentIndex = (currentIndex + 1) % carouselItems.length
    
    carouselItems[currentIndex].classList.add('active')
    indicators[currentIndex].classList.add('active')
  }

  // 设置自动轮播
  setInterval(showNextSlide, 3000)
}

// 页面加载完成后启动轮播
onMounted(() => {
  startCarousel()
})
</script>

<style scoped>
html{
    margin: 0;
    padding: 0;
}

.home-container {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

/* 主要内容样式 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-card {
  background-color: #e8f5e8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.welcome-card h2 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.welcome-card p {
  color: #555;
  line-height: 1.6;
}

/* 内容区域样式 */
.content-section {
  margin: 3rem 0;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

/* 向下箭头样式 */
.scroll-down {
  text-align: center;
  margin: 3rem 0;
  padding: 1rem;
}

.arrow-icon {
  font-size: 3rem;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.scroll-down p {
  color: #555;
  font-size: 0.9rem;
}

</style>