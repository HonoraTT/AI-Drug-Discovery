<template>
  <section class="feature-section">
    <div class="feature-grid">
      <!-- 第一组：左图右文（奇数） -->
      <div class="feature-item odd">
        <div class="feature-image">
          <img src="https://via.placeholder.com/400x300" alt="功能1" />
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
          <img src="https://via.placeholder.com/400x300" alt="功能2" />
        </div>
      </div>

      <!-- 第三组：左图右文（奇数） -->
      <div class="feature-item odd">
        <div class="feature-image">
          <img src="https://via.placeholder.com/400x300" alt="功能3" />
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
          <img src="https://via.placeholder.com/400x300" alt="功能4" />
        </div>
      </div>

      <!-- 第五组：左图右文（奇数） -->
      <div class="feature-item odd">
        <div class="feature-image">
          <img src="https://via.placeholder.com/400x300" alt="功能5" />
        </div>
        <div class="feature-text">
          <h3>功能五</h3>
          <p>这里是关于第五个功能的详细描述，可以展示该功能的具体作用和优势。</p>
        </div>
      </div>
    </div>
  </section>
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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-image img {
  width: 100%;
  height: 300px;
  max-height: 400px;
  object-fit: cover;
}

.feature-text {
  flex: 1;
  padding: 1rem;
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
</style>
