<template>
  <Transition name="human-animation">
    <div class="fixed bottom-[0%] right-[0%] mr-1 mb-3 bg-transparent hover:scale-[1.1]">
      <a>
        <img src="../assets/body.svg" class="h-[70px] w-[70px] p-1 bg-orange-400 rounded-full cursor-pointer" alt="Body">
      </a>
    </div>
  </Transition>
</template>

<script>

</script>

<style scoped>
.human-animation-enter-active {
  animation: enterAnimation 1s;
}

@keyframes enterAnimation {
  0% {
    transform: translateX(150%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.human-animation {
  animation-fill-mode: forwards;
}
</style>
