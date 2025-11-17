<template>
  <div class="right-column">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/imgs/img5.jpg" alt="分子结构1" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/imgs/img6.jpg" alt="分子结构2" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/imgs/img7.jpg" alt="分子结构3" />
        </div>
      </div>
      <div class="carousel-indicators">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.right-column {
  flex: 1;
  min-width: 300px;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(33, 150, 243, 0.2);
  background: linear-gradient(135deg, rgba(135, 206, 250, 0.1), rgba(33, 150, 243, 0.1));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 250, 0.3);
}

.carousel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  z-index: 1;
  border-radius: 12px;
  pointer-events: none;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.carousel-item {
  flex: 1;
  display: none;
  height: 500px;
  border-radius: 12px;
}

.carousel-item.active {
  display: block;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.carousel-item img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 0;
  border-radius: 12px;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.8);
  box-shadow: 0 2px 4px rgba(135, 206, 250, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(30%);
  position: relative;
  z-index: 20;
}

.indicator.active {
  background: linear-gradient(135deg, #87cefa, #4682b4);
  box-shadow: 0 4px 8px rgba(135, 206, 250, 0.8);
  transform: scale(1.2);
}
</style>
