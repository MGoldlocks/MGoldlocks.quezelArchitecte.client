<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="quezel-content-menu">
      <ul id="quezel-menu">
        <li><router-link to="/">Agence</router-link></li>
        <li><router-link to="/Architecture">Architecture</router-link></li>
        <li><router-link to="/ArtEtDesign">Art & Design</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: black;
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
  color: gray;
}
.router-link-exact-active {
  color: black;
}
#quezel-menu {
  display: inline-block;
  width: 50%;
}
.text-description {
  display: inline-block;
  width: 50%;
}

</style>
