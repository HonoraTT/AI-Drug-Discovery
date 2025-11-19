<template>
  <div class="pic-text">
    <section class="feature-section">
      <div class="feature-grid">
        <!-- 第一组：左图右文（奇数） -->
        <div class="feature-item odd">
          <div class="feature-image">
            <img src="@/assets/imgs/img1.jpg" alt="功能1" />
          </div>
          <div class="feature-text">
            <h3>功能一</h3>
            <p>这里是关于第一个功能的详细描述，可以展示该功能的具体作用和优势。</p>
          </div>
        </div>

        <!-- 第二组：左文右图（偶数） -->
        <div class="feature-item even">
          <div class="feature-text">
            <h3>功能二</h3>
            <p>这里是关于第二个功能的详细描述，可以展示该功能的具体作用和优势。</p>
          </div>
          <div class="feature-image">
            <img src="@/assets/imgs/img2.jpg" alt="功能2" />
          </div>
        </div>

        <!-- 第三组：左图右文（奇数） -->
        <div class="feature-item odd">
          <div class="feature-image">
            <img src="@/assets/imgs/img3.jpg" alt="功能3" />
          </div>
          <div class="feature-text">
            <h3>功能三</h3>
            <p>这里是关于第三个功能的详细描述，可以展示该功能的具体作用和优势。</p>
          </div>
        </div>

        <!-- 第四组：左文右图（偶数） -->
        <div class="feature-item even">
          <div class="feature-text">
            <h3>功能四</h3>
            <p>这里是关于第四个功能的详细描述，可以展示该功能的具体作用和优势。</p>
          </div>
          <div class="feature-image">
            <img src="@/assets/imgs/img4.jpg" alt="功能4" />
          </div>
        </div>

        <!-- 第五组：左图右文（奇数） -->
        <div class="feature-item odd">
          <div class="feature-image">
            <img src="@/assets/imgs/img5.jpg" alt="功能5" />
          </div>
          <div class="feature-text">
            <h3>功能五</h3>
            <p>这里是关于第五个功能的详细描述，可以展示该功能的具体作用和优势。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.feature-section {
  margin: 3rem 0;
}

.feature-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-item {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.feature-item.odd .feature-image {
  order: 1;
}

.feature-item.odd .feature-text {
  order: 2;
}

.feature-item.even .feature-image {
  order: 2;
}

.feature-item.even .feature-text {
  order: 1;
}

.feature-image {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 16px rgba(33, 150, 243, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: linear-gradient(135deg, rgba(135, 206, 250, 0.1), rgba(33, 150, 243, 0.1));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 250, 0.3);
}

.feature-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(33, 150, 243, 0.3);
}

.feature-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  z-index: 1;
  border-radius: 12px;
}

.feature-image img {
  width: 100%;
  height: 300px;
  max-height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 0;
}

.feature-image:hover img {
  transform: scale(1.05);
}

.feature-text {
  flex: 1;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(230, 243, 255, 0.7), rgba(176, 216, 255, 0.7));
  border-radius: 8px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(135, 206, 250, 0.2);
  box-shadow: 0 4px 8px rgba(135, 206, 250, 0.1);
}

.feature-text h3 {
  color: #4682b4;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.feature-text p {
  color: #4682b4;
  line-height: 1.6;
}

.pic-text {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
