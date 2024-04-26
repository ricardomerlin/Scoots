<template>
  <h1>{{name}}</h1>
  <h1>{{props.msg}}</h1>
</template>


<script>
export default {
  data() {
    return {
      name: 'StartPage',
      props: {
        msg: 'Hi'
      }
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
