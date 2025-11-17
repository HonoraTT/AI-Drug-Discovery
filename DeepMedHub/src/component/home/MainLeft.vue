<template>
  <div class="left-column">
    <div class="molecule-list">
      <div class="molecule-item">H₂N─CH₂─C(O)─NH─CH(CH₃)─COOH</div>
      <div class="molecule-item">H₂N─CH(CH₃)─C(O)─NH─CH(CH₂OH)─C(O)─NH─CH(CH(CH₃)₂)─COOH</div>
      <div class="molecule-item">C₁₆H₂₀N₂O₂</div>
      <div class="molecule-item">C₂₀H₂₆N₂O₄</div>
      <div class="molecule-item">C₁₇H₂₃N₃O₄</div>
      <div class="molecule-item">C₁₅H₂₁N₃O₄</div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.left-column {
  flex: 1;
  min-width: 300px;
}

.molecule-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.molecule-item {
  padding: 1rem;
  background: linear-gradient(135deg, #e6f3ff, #b0d8ff);
  border-radius: 4px;
  text-align: center;
  font-family: monospace;
  font-size: 1.2rem;
  border: 1px solid #87cefa;
  box-shadow: 0 4px 8px rgba(135, 206, 250, 0.2);
}
.molecule-item:hover {
  background: linear-gradient(135deg, #b0d8ff, #87cefa);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(135, 206, 250, 0.3);
}
</style>
