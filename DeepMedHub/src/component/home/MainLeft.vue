<template>
  <div class="left-column">
    <div class="molecule-list">
      <div class="molecule-item">C₁₉H₂₄N₂O₄</div>
      <div class="molecule-item">C₁₈H₂₅NO₃</div>
      <div class="molecule-item">C₁₆H₂₀N₂O₂</div>
      <div class="molecule-item">C₂₀H₂₆N₂O₄</div>
      <div class="molecule-item">C₁₇H₂₃N₃O₄</div>
      <div class="molecule-item">C₁₅H₂₁N₃O₄</div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.left-column {
  flex: 1;
  min-width: 300px;
}

.molecule-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.molecule-item {
  padding: 1rem;
  background-color: #f0f8f0;
  border-radius: 4px;
  text-align: center;
  font-family: monospace;
  font-size: 1.2rem;
  border-left: 4px solid #2e7d32;
}
</style>
