<template>
  <div class="dashboard">
    <nav></nav>
    <div class="container-fluid">
      <div class="col-md-9">
          <detail />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import detail from '@/components/detail'
export default {
  name: 'dashboard',
  components: {
    detail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
