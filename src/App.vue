<template>
  <div id="app">
    <img id="quezel-logo" src="./assets/logo.svg">
    <div id="quezel-content-menu">
      <ul id="quezel-menu" v-on:click="closeDropdownMenus()">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/Agence">Agence</router-link></li>

        <li @mouseover="openDropdownMenu(1)" @mouseleave="closeDropdownMenus()"  v-bind:class="{'selected': subIsActive('/ConstructionNeuve') || subIsActive('/Renovation') || subIsActive('/AmenagementInterieur')}" class="dropdown">Architecture
          <button class="dropbtn">
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" v-bind:class="{open:isArchiOpen}">
            <router-link to="/ConstructionNeuve">Construction neuve</router-link>
            <router-link to="/Renovation">Rénovation</router-link>
              <router-link to="/AmenagementInterieur">Aménagement intérieur</router-link>
          </div>
        </li>

        <li @mouseover="openDropdownMenu(2)" @mouseleave="closeDropdownMenus()" v-bind:class="{'selected': subIsActive('/Art') || subIsActive('/Design')}" class="dropdown">Art & Design
          <button class="dropbtn">
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" v-bind:class="{open:isArtDesignOpen}">
            <router-link to="/Art">Art</router-link>
            <router-link to="/Design">Design</router-link>
          </div>
        </li>

        <li><router-link to="/Contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view/>
    <div id="quezel-social-links" class="round">
      <a class="facebook" rel="external" title="Quezel Architecte sur Facebook"
         href="https://www.facebook.com/quezel.architecte"><img src="./assets/img/facebook_circle-512.png"></a>
    </div>
    <div id="quezel-bottom-page">
      QUEZEL ARCHITECTE<br>
      Siège social : 140 rue du Nant-Cruy, 74190 Passy / SAS Unipersonnelle au capital de 1000 € / RCS Annecy 842 445 744<br>
      (+33)6 72 35 89 86 / contact@quezel-architecte.com
    </div>
  </div>
</template>

<script>
const methods = ({
    subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input];
        return paths.some(path => {
            return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
    },
    openDropdownMenu(menuId) {
        console.log("openDropdownMenu(%s)", menuId)
        switch (menuId) {
            case 1:
                this.isArchiOpen = true;
                break;
            case 2:
                this.isArtDesignOpen = true;
                break;
        }
    },
    closeDropdownMenus() {
        console.log("closeDropdownMenus");
        this.isArchiOpen = false;
        this.isArtDesignOpen = false;
    }
});
export default {
  methods,
  data() {
    return {
        isArchiOpen: false,
        isArtDesignOpen: false
    }
  },
  name: 'App'
}
</script>


<style type="text/css">

@font-face {
  font-family: 'clementepdaelight';
  src: url('assets/fonts/clementepdae-light-webfont.woff2') format('woff2'),
  url('assets/fonts/clementepdae-light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'clementepdairegular';
  src: url('assets/fonts/clementepdai-regular-webfont.woff2') format('woff2'),
  url('assets/fonts/clementepdai-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body, html {
  height:98%;
}
#app {
  font-family: 'clementepdaelight', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 2%;
  color: black;
  min-height:100%;
  margin:0 auto;
  position:relative;
}
.quezeBold {
  font-family: 'clementepdairegular', 'Avenir', Helvetica, Arial, sans-serif;
}
#quezel-logo {
  width: 20%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 11.5%;
  text-transform: uppercase;
}
h1 {
  text-transform: uppercase;
  font-size: 1.5em;
}
#quezel-menu a, .column a {
  color: gray;
  text-decoration: none;
}
#quezel-menu li {
  color: gray;
}
.router-link-exact-active, .column a:hover {
  color: black;
  font-family: 'clementepdairegular', 'Avenir', Helvetica, Arial, sans-serif;
}
li.dropdown.selected {
  color: black !important;
  font-family: 'clementepdairegular', 'Avenir', Helvetica, Arial, sans-serif;
}
#quezel-menu {
  display: inline-block;
  width: 100%;
  padding-top: 16px;
}
.page-content {
  margin-top: 2%;
  padding-bottom: 80px;
}
.text-description {
  display: inline-block;
  text-align: justify;
  width: 51.5%;
  font-size: 0.9em;
}
.agence .text-description {
  width: 20%;
}
#quezel-bottom-page {
  margin-top: 2%;
  position:absolute;
  bottom:4px;
  width: 100%;
  font-size: 0.75em;
}

.page-content.contact .text-description {
  text-align: center;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown .dropdown-content.open {
  display: block;
}


  /*
  Vue image Grid
   */
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}
.detailProjet .column {
  flex: 100%;
  max-width: 100%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  max-height: 800px;
}
.column.clickable img:not(:hover) {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

.img-inlineblock-vue img {
  width: 100%;
  margin-top: 0.67em;
}

.separator-vue {
  background-color: lightgrey;
  height: 1px;
  margin-top: 40px;
  margin-bottom: 28px;
  width: 20%;
  text-align: center;
  display: inline-block;
}

#quezel-social-links {
  position: fixed;
  bottom: 4px;
  right: 10%;
  width: 6em;
  height: 2em;
  z-index: 10;
}
#quezel-social-links a {
  width: 2em;
  height: 2em;
  display: block;
}
.facebook img {
  width: 100%;
}

</style>
