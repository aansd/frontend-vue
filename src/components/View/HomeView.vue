<template>
  <div class="home">
    <div class="container">
        <AppPage2/> 
    </div>
    <div class="container">
        <AppPage3/>
    </div>
     <div class="container">
        <AppPage4/>
     </div>
     <div class="container">
        <AppPage5/>
     </div>
     <div class="container">
        <AppPage6/>
     </div>
  </div>

</template>

<script>
import AppPage2 from '../AppPage/AppPage2.vue';
import AppPage3 from '../AppPage3/AppPage3.vue';
import AppPage4 from '../AppPage4/AppPage4.vue';
import AppPage5 from '../AppPage5/Apppage5.vue';
import AppPage6 from '../AppPage6/AppPage6.vue'

export default {
    name: 'HomeView',
    components: {
        AppPage2,
        AppPage3,
        AppPage4,
        AppPage5,
        AppPage6
        
    }
}
</script>

<style>
.home {
    margin-top: 180px;
}
</style>