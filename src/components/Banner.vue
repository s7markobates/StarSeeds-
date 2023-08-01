<template>
  <div class="h-[300px] light border-b-2 border-orange-400 rounded-md relative overflow-hidden">
    <div class="flex flex-col justify-center items-center py-20">
      <div>
        <h1 class="text-center text-white text-lg">Join the</h1>
        <div class="text-[30px] my-auto sm:my-1 sm:text-4xl font-custom">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </div>
        <h1 class="text-center text-white text-lg">community</h1>
      </div>
    </div>
    <div class="rocket-container">
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
      <i class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"></i>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.font-custom {
  font-family: 'Yatra One', cursive;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC);
}

.rocket-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: hidden;
}

.animate-slide-up-right {
  animation: slideUpRight 4s infinite;
}


@keyframes slideUpRight {
  from {
    opacity: 0;
    transform: translateX(-100px) translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateX(calc(100% + 100px)) translateY(-200px);
  }
}

.delay-75:nth-child(1) {
  animation-delay: 0.75s;
}

.delay-75:nth-child(2) {
  animation-delay: 1.5s;
}

.delay-75:nth-child(3) {
  animation-delay: 2.25s;
}

.delay-75:nth-child(4) {
  animation-delay: 3s;
}

.delay-75:nth-child(5) {
  animation-delay: 3.75s;
}

.delay-75:nth-child(6) {
  animation-delay: 4.5s;
}
.delay-75:nth-child(7) {
  animation-delay: 5.25s;
}
.delay-75:nth-child(8) {
  animation-delay: 6s;
}
.delay-75:nth-child(9) {
  animation-delay: 6.75s;
}
.delay-75:nth-child(10) {
  animation-delay: 7.5s;
}
.delay-75:nth-child(11) {
  animation-delay: 5.25s;
}
.delay-75:nth-child(12) {
  animation-delay: 6s;
}
.delay-75:nth-child(13) {
  animation-delay: 6.75s;
}
.delay-75:nth-child(14) {
  animation-delay: 7.5s;
}
</style>
