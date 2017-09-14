<template>
  <div class="detail">
    <div class="item-wrap" v-for="article in articles">
        <h3>{{article.title}}</h3>
        <p>content</p>
        <small>category</small>
        <p>author</p>
        <article>Ini isi articlenya</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  computed: {
    Articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
