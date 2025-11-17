<template>
  <div class="left-column">
    <div class="molecule-list">
      <div
        class="molecule-item"
        v-for="(molecule, index) in molecules"
        :key="index"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        {{ hoveredIndex === index ? molecule.hoverText : molecule.defaultText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoveredIndex = ref(null)

const molecules = ref([
  {
    defaultText: '甘氨酸-丙氨酸二肽 C₅H₁₀N₂O₃',
    hoverText: 'H₂N─CH₂─C(O)─NH─CH(CH₃)─COOH',
  },
  {
    defaultText: '丙氨酸-丝氨酸-缬氨酸三肽 C₁₁H₂₁N₃O₅',
    hoverText: 'H₂N─CH(CH₃)─C(O)─NH─CH(CH₂OH)─C(O)─NH─CH(CH(CH₃)₂)─COOH',
  },
  {
    defaultText: '咖啡因分子 C₈H₁₀N₄O₂',
    hoverText: 'H₂N─C(=O)─N(CH₃)─CH₂─N(CH₃)─C(=O)─N(CH₃)─C(=O)─N(CH₃)',
  },
  {
    defaultText: '维生素E分子 C₂₉H₅₀O₂',
    hoverText:
      'CH₃─(CH₂)₂─CH(CH₃)─CH₂─CH(CH₃)─CH₂─CH(CH₃)─CH₂─CH(CH₃)─CH₂─CH₂─CH₂─CH₂─CH₂─CH₂─CH₂─CH₂─C(O)─O─CH₂─CH₂─CH₂─CH(CH₃)─CH(CH₃)─CH(CH₃)─CH(CH₃)─CH(CH₃)─CH(CH₃)─CH(CH₃)─CH₃',
  },
  {
    defaultText: '烟酸分子 C₆H₅NO₂',
    hoverText: 'O=C(OH)─C₆H₄─C≡N',
  },
  {
    defaultText: '褪黑素分子 C₁₃H₁₆N₂O₂',
    hoverText: 'CH₃─C(O)─NH─CH₂─CH₂─N(CH₃)─C₆H₄─OH',
  },
])
</script>

<style scoped>
.left-column {
  flex: 1;
  min-width: 300px;
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.molecule-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.molecule-item {
  padding: 1rem;
  background: linear-gradient(135deg, #e6f3ff, #b0d8ff);
  border-radius: 12px;
  text-align: center;
  font-family: monospace;
  font-size: 1.2rem;
  border: 1px solid #87cefa;
  /* 合并box-shadow属性 */
  box-shadow:
    0 4px 12px rgba(135, 206, 250, 0.3),
    0 0 10px rgba(33, 150, 243, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform, box-shadow;
  cursor: pointer;
}

.molecule-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  z-index: -1;
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: background;
}

.molecule-item:hover {
  background: linear-gradient(135deg, #b0d8ff, #87cefa);
  transform: translateY(-3px);
  box-shadow:
    0 10px 28px rgba(135, 206, 250, 0.5),
    0 0 25px rgba(135, 206, 250, 0.3),
    0 0 35px rgba(33, 150, 243, 0.4); /* 悬浮时增强的科技蓝发光效果 */
}
</style>
