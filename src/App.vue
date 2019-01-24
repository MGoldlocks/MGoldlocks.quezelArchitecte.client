<template>
  <div id="app">
    <img id="quezel-logo" src="./assets/logo.svg">
    <div id="quezel-content-menu">
      <ul id="quezel-menu" v-on:click="closeDropdownMenus()">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/Agence">Agence</router-link></li>

        <li @mouseover="openDropdownMenu(1)" @mouseleave="closeDropdownMenus()"  v-bind:class="{'selected': subIsActive('/DetailProjet') || subIsActive('/ConstructionNeuve') || subIsActive('/Renovation') || subIsActive('/AmenagementInterieur')}" class="dropdown">Architecture
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


<style lang="scss">

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

.button,
a,
button,
input,
textarea {
  transition-duration: .3s
}
.agile .button,
.agile button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0
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
#quezel-menu a.router-link-exact-active, .column a:hover {
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
  margin-top: 1%;
  padding-bottom: 80px;
  #page-content-header {
    * {
      display: inline-block;
    }
    a {
      margin-right: 44px;
      cursor: pointer;
      &:hover {
        color: black;
        font-family: 'clementepdairegular', 'Avenir', Helvetica, Arial, sans-serif;
      }
    }
  }
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  &.open {
    display: block;
  }
  a {
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
      background-color: #ddd;
    }
  }
}
  /*
  Vue image Grid
   */
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1%;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 23%;
  max-width: 23%;
  padding: 0 1%;
}
.detailProjet .column {
  flex: 100%;
  max-width: 100%;
  padding: 0 1%;
}
.column {
  a {
    display: inline-block;
    position: relative;
    div.project-description {
      text-align: center;
      width: 100%;
      position: absolute;
      z-index: 10;
      opacity: 0.8;
      background-color: whitesmoke;
      i, h3 {
        margin: 0;
        margin-top: 10px;
        margin-left: 4px
      }
      i {
        overflow: hidden;
      }
    }
  }
  img {
    vertical-align: middle;
    width: 100%;
    max-height: 800px;
  }
  &.clickable {
    a:not(:hover) {
      img {
        opacity: 0.5;
      }
      div.project-description {
        opacity: 0.2;
      }
    }
  }
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
    position: absolute;
    bottom: 4px;
    right: 18%;
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



  .agile {
    margin: 15px auto
  }

  .agile .container-fluid {
    padding: 0
  }


  .agile .agile__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%)
  }

  .agile .agile__dot button {
    background-color: transparent;
    border: 1px solid #fff
  }

  .agile .agile__dot--current button,
  .agile .agile__dot button:hover {
    background-color: #fff
  }

  .agile .agile__arrow {
    height: 100%;
    top: 0;
    width: 50px
  }

  @media (min-width:756px) {
    .agile .agile__arrow {
      width: 80px
    }
  }

  @media (min-width:756px) {
    .agile .agile__arrow:hover {
      background-color: rgba(0, 0, 0, .5)
    }
  }

  .agile .agile__arrow:hover svg {
    fill: #fff
  }

  .agile .agile__arrow[disabled] {
    display: none
  }

  .agile .agile__arrow svg {
    fill: hsla(0, 0%, 100%, .4)
  }

  @media (min-width:756px) {
    .agile .agile__arrow svg {
      height: 25px
    }
  }

  .agile .slide {

    background-size: contain;
    background-repeat: no-repeat;
    color: #fff;
    background-position: 50%;
    //background-size: cover;
    position: relative;
    height: 28em;
    &.redirect {
      cursor: pointer;
      &:hover {
        border: 1px solid black;
      }
    }
  }

  @media (min-width:756px) {
    .agile .slide {
      height: 450px;
    }
  }
  .slide h3 {
    font-size: 32px;
    font-weight: 300;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%)
  }

  @media (min-width:756px) {
    .slide {
      height: 500px
    }
  }

  .slide:before {
    background-color: rgba(0, 0, 0, 0.1);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
  }

  .slideAQL1 {
    background-image: url(assets/img/AmenagementInterieur/AQL/im01.jpg)
  }

  .slideAQL2 {
    background-image: url(assets/img/AmenagementInterieur/AQL/im02.jpg)
  }

  .slideAQL3 {
    background-image: url(assets/img/AmenagementInterieur/AQL/im03.jpg)
  }

  .slideAQL4 {
    background-image: url(assets/img/AmenagementInterieur/AQL/im04.jpg)
  }

  .slideAQL5 {
    background-image: url(assets/img/AmenagementInterieur/AQL/existant_01.jpg)
  }

  .slideAQL6 {
    background-image: url(assets/img/AmenagementInterieur/AQL/existant_02.jpg)
  }

  .slideAQL7 {
    background-image: url(assets/img/AmenagementInterieur/AQL/existant_03.jpg)
  }

  .slideAQL8 {
    background-image: url(assets/img/AmenagementInterieur/AQL/existant_04.jpg)
  }

.slideRDN1 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn1.jpg)
}

.slideRDN2 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn2.jpg)
}

.slideRDN3 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn3.jpg)
}

.slideRDN4 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn4.jpg)
}

.slideRDN5 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn5.jpg)
}

.slideRDN6 {
  background-image: url(assets/img/AmenagementInterieur/RDN/rdn6.jpg)
}


.agile:active,
  .agile:active,
  .agile:focus,
  .agile:focus {
    outline: none
  }

  .agile__track {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .agile__slide {
    display: block
  }

  .agile--fade .agile__slide {
    opacity: 0;
    position: relative;
    z-index: 0
  }

  .agile--fade .agile__slide--active {
    opacity: 1;
    z-index: 2
  }

  .agile--fade .agile__slide--expiring {
    opacity: 1;
    transition-duration: 0s;
    z-index: 1
  }

  .agile__arrow {
    border: none;
    bottom: 10px;
    margin: 0;
    padding: 0;
    position: absolute;
    transition-duration: .3s;
  }

  .agile__arrow[disabled] {
    cursor: default;
    opacity: .4
  }

  .agile__arrow:hover svg {
    fill: #333
  }

  .agile__arrow--prev {
    left: 0
  }

  .agile__arrow--next {
    right: 0
  }

  .agile__arrow svg {
    fill: #888;
    height: 20px;
    transition-duration: .3s
  }

  .agile .agile__dots {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    list-style: none;
    margin: 20px 0;
    padding: 0;
    text-align: center;
    white-space: nowrap
  }

  .agile .agile__dot {
    margin: 0 10px
  }

  .agile__dot button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    transition-duration: .3s;
    width: 10px
  }

  .agile__dot--current button,
  .agile__dot:hover button {
    background-color: #888
  }

</style>
