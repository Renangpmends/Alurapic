<template>
    <nav>
      <ul>
        <li v-for="rotas in rota">
          <router-link :to="rotas.path ? rotas.path : '/'">{{ rotas.titulo }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default{
    
   props: {
        rota: {
            type: Array,
            required: true
        }
   }
}
</script>

<style>

</style>