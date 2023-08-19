<template>
  <div>
    <!-- <home-page></home-page> -->
    <router-view></router-view>
  </div>

</template>

<script>

// import HomePage from "./components/HomePage.vue"
export default {
  name: 'App',
//  components:{HomePage}
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 

}
*{
  margin:0px;
}
</style>
