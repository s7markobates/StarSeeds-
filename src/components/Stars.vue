<template>
    <div>
        <!-- bg Picture -->
        <img src="../assets/night_sky.jpg" class="absolute top-0 left-0 z-[0] w-full h-full opacity-[10%]" alt="">

        <!-- Big Planet Earth -->
        <div>
            <i class="fas fa-globe-africa fa-flip-horizontal text-green-600 text-[700px] absolute -bottom-[500px] -left-[160px] md:left-[10px] z-[2]"></i>
            <i class="fas fa-circle text-blue-600 text-[700px] absolute opacity-100 -bottom-[500px] -left-[170px] md:left-[1px] z-[1]"></i>
            <i class="far fa-circle text-white text-[715px] absolute opacity-20 -bottom-[500px] -left-[175px] md:left-[-7px] z-[2]"></i>
            <i class="far fa-circle text-white text-[735px] absolute opacity-10 -bottom-[510px] -left-[185px] md:left-[-15px] z-[2]"></i>
        </div>

        <!-- Main objects -->
        <div>
            <i title="Come! Join us." class="fab fa-galactic-senate text-white text-[60px] absolute opacity-50 top-[200px] right-[70px] cursor-none hover:scale-[1.5] duration-[6s] z-[4]"></i>
            <i class="fas fa-vihara text-yellow-400 text-[30px] absolute opacity-90 bottom-[175px] left-[100px] md:left-[260px] z-[4]"></i>
            <i title="Ommm..." class="fas fa-om text-yellow-400 text-[15px] absolute bottom-[205px] left-[110px] md:left-[270px] z-[3] hover:text-[20px] hover:ml-[-3px] duration-[0.5s] hover:cursor-none"></i>            
        </div>
                
        <!-- Small Planet Earth -->
        <div>
            <i class="fas fa-globe-europe absolute text-blue-500 text-[25px] sm:text-[45px] top-[100px] right-[140px] z-[1]"></i>
            <i class="fas fa-circle absolute text-green-500 text-[25px] sm:text-[45px] top-[100px] right-[140px]"></i>
            <i title="Gaia" class="far fa-circle absolute text-white opacity-40 hover:opacity-70 duration-500 text-[25px] cursor-cell sm:text-[45px] top-[100px] right-[140px] z-[1]"></i>
        </div>

        <!-- People -->
        <div>
            <i title="Hello friend!" class="fas fa-street-view text-gray-100 text-[25px] hover:text-[35px] opacity-80 absolute bottom-[130px] left-[160px] md:left-[320px] hover:-ml-[5px] duration-200 hover:cursor-none  z-[3]" ></i>
            <i title="Welcome to StarSeeds" class="fas fa-street-view text-yellow-500 text-[25px] hover:text-[35px] opacity-80 absolute bottom-[155px] left-[230px] md:left-[430px] hover:-ml-[5px] duration-200 hover:cursor-none  z-[3]"></i>
            <i title="You'll love it here! :)" class="fas fa-street-view text-red-700 text-[25px] hover:text-[35px] opacity-80 absolute bottom-[100px] left-[320px] md:left-[460px] hover:-ml-[5px] duration-200 hover:cursor-none z-[3]"></i>
            <i title="Namaste" class="fas fa-street-view text-amber-900 text-[25px] hover:text-[35px] opacity-80 absolute bottom-[130px] md:bottom-[40px] left-[45px] md:left-[570px] hover:-ml-[5px] duration-200 hover:cursor-none z-[3]"></i>
            <i title="Hakuna Matata" class="fas fa-street-view text-gray-800 text-[25px] hover:text-[35px] opacity-80 absolute bottom-[20px] md:bottom-[150px] left-[275px] md:left-[220px] hover:-ml-[5px] duration-200 hover:cursor-none z-[3]"></i>
        </div>

        <!-- Trees -->
        <div>
            <i class="fas fa-tree text-green-700 text-[31px] absolute bottom-[150px] left-[190px] md:left-[380px] z-[2]"></i>
            <i class="fas fa-tree text-green-900 text-[28px] absolute bottom-[100px] left-[20px] md:left-[150px] z-[2]"></i>
            <i class="fas fa-tree text-green-800 text-[31px] absolute bottom-[65px] left-[300px] md:left-[500px] z-[2]"></i>

            <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[140px] left-[280px] md:left-[480px] z-[2]"></i>
            <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[140px] left-[80px] md:left-[280px] z-[2]"></i>
            <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[100px] left-[220px] md:left-[400px] z-[2]"></i>
            <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[25px] left-[350px] md:left-[510px] z-[2]"></i>

            <i class="fas fa-dove text-white text-[11px] absolute opacity-90 bottom-[110px] left-[280px] md:left-[370px] z-[4]"></i>
        </div>

        <!-- Stars -->
        <div>
            <i class="fas fa-sun fa-spin text-orange-500 text-[17px] opacity-80 absolute top-[100px] right-[65px] hover:text-yellow-500"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[11px] opacity-80 absolute top-[110px] right-[205px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-80 absolute top-[95px] right-[250px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-80 absolute top-[105px] right-[400px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] absolute top-[280px] right-[60px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[300px] right-[40px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[16px] opacity-80 absolute top-[150px] right-[300px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[18px] absolute top-[150px] md:top-[300px] right-[80px] md:right-[140px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[380px] right-[50px] md:right-[120px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-90 absolute top-[70px] left-[250px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] absolute top-[90px] left-[290px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[110px] left-[340px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-90 absolute bottom-[200px] md:bottom-[110px] right-[20px] md:right-[100px]"></i>
            <i class="fas fa-sun fa-spin text-yellow-500 text-[7px] opacity-80 absolute bottom-[190px] md:bottom-[80px] right-[10px] md:right-[80px]"></i>
        </div>

        <!-- Cloads -->
        <div>
            <i class="fas fa-cloud animate-cloud text-white text-[38px] absolute opacity-70 hover:opacity-90 duration-300 bottom-[40px] left-[30px] md:left-[205px] z-[2]"></i>
            <i class="fas fa-cloud text-white text-[38px] absolute opacity-60 hover:opacity-80 duration-300 bottom-[55px] left-[50px] md:left-[230px] z-[2]"></i>
            <i class="fas fa-cloud animate-cloud text-white text-[48px] absolute opacity-70 hover:opacity-90 duration-300 bottom-[30px] left-[70px] md:left-[240px] z-[3]"></i>
            <i class="fas fa-cloud animate-cloud text-gray-100 text-[25px] absolute opacity-60 hover:opacity-80 duration-300 bottom-[60px] left-[330px] md:left-[80px] z-[3]"></i>
            <i class="fas fa-cloud text-white text-[25px] absolute opacity-70 hover:opacity-90 duration-300 bottom-[45px] left-[315px] md:left-[95px] z-[3]"></i>
            <i class="fas fa-cloud animate-cloud text-white text-[35px] absolute opacity-60 hover:opacity-90 duration-300 bottom-[140px] md:bottom-[100px] left-[310px] md:left-[530px] z-[3]"></i>
        </div>

        <!-- <i class="fas fa-journal-whills"></i> -->
        <!-- <i class="fas fa-dice-d20 text-white text-[100px] opacity-60 absolute bottom-[300px] right-[320px]"></i> -->

        <!-- Rocket -->
        <div>
            <i title="Explore outer Space!" class="fas fa-warehouse absolute text-gray-300 bottom-[70px] md:bottom-[53px] left-[200px] md:left-[414px] z-[2]"></i>
            <i class="fas fa-satellite-dish absolute text-gray-300 text-[15px] bottom-[86px] md:bottom-[70px] left-[207px] md:left-[420px] z-[2]"></i>
            <i class="fas fa-cubes absolute text-gray-600 bottom-[65px] md:bottom-[46px] left-[217px] md:left-[431px] z-[3]"></i>
            <i title="Launch!" @click="launchRocket" id="rocket" class="fas fa-rocket cursor-alias absolute text-lg text-orange-400 bottom-[70px] md:bottom-[50px] left-[220px] md:left-[435px] z-[4]"></i>
            <!-- <audio id="launch" src="../assets/launch.mp3" type="audio/mpeg"></audio> -->
        </div>

    </div>
</template>

<script setup>

const launchRocket = () => {
  const rocket = document.getElementById('rocket');

  rocket.style.transition = 'all 3s ease-in';
  rocket.style.transform = 'translate(700px, -900px)';
  rocket.style.opacity = '0';

//   const rocketAudio = document.getElementById('launch');
//   rocketAudio.play(); // Reprodukuj zvuk odmah nakon promene stila

  setTimeout(() => {
    rocket.style.transition = 'none';
    rocket.style.transform = 'translate(0, 0)';
    rocket.style.opacity = '1';
  }, 3500);
}
</script>


<style scoped>
@keyframes moveCloud {
    0%, 100% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
  }
  
  .animate-cloud {
    animation: moveCloud 10s infinite ease-in;
  }
</style>