
<template>
  <div class="corpo">
    <meu-menu :rota="routes"/>
  <transition name="pagina">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  
  components:{
    'meu-menu': Menu
  },

  data(){
    return{
      routes
    }
  }
}

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter-active, .pagina-leave-active{
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active{
    transition: opacity .4s;
}
</style>
