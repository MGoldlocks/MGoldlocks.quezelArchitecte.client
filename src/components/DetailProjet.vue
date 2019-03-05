<template>
  <div class="page-content detailProjet">
    <div id="page-content-header" class="text-description">
      <a @click="$router.go(-1)">< Retour</a>
      <!--<h1>{{this.description}}</h1>-->
    </div>
    <div class="text-description">
      <agile :arrows="true" :speed="750"
             :autoplay="false" :pauseOnHover="false">
        <div v-for="image in images">
          <div v-bind:class="image.name">
            <div class="project-description">
              <h3>{{image.title}}</h3>
            </div>
          </div>
        </div>
      </agile>
      <div id="detailProjet-description">
        <div class="col">
          <div>
          {{this.date}}
          </div>
          <div>
            {{this.master}}
          </div>
        </div>
        <div class="col">
          <div>
            {{this.location}}
          </div>
          <div>
            {{this.mission}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
      data() {
          switch (this.$route.query.projet) {
              case "AQL":
                  console.log("AQL")
                  return {
                      images: [
                          {name: "slide slideAQL1 blackText", id: "im01", title: "Réalisation"},
                          {name: "slide slideAQL2 blackText", id: "im02", title: "Réalisation"},
                          {name: "slide slideAQL3 blackText", id: "im03", title: "Réalisation"},
                          {name: "slide slideAQL4", id: "im04", title: "Réalisation"},
                          {name: "slide slideAQL5", id: "im05", title: "Existant"},
                          {name: "slide slideAQL6", id: "im06", title: "Existant"},
                          {name: "slide slideAQL7", id: "im07", title: "Existant"},
                          {name: "slide slideAQL8", id: "im08", title: "Existant"}],
                      description: "Aménagement d'une salle de bain",
                      date: "Date: Décembre 2017 - Mars 2018",
                      master: "Maître d'ouvrage: Privé",
                      location: "Lieu: Passy 74190",
                      mission: "Missions confiées: ESQ / APD / PRO / DET"
                  }
              case "RDN":
                  console.log("RDN")
                  return {
                      images: [
                          {name: "slide slideRDN1 blackText", id: "im01", title: "Existant"},
                          {name: "slide slideRDN2 blackText", id: "im02", title: "Réalisation"},
                          {name: "slide slideRDN3 blackText", id: "im03", title: "Existant"},
                          {name: "slide slideRDN4 blackText", id: "im04", title: "Réalisation"},
                          {name: "slide slideRDN5", id: "im05", title: "Existant"},
                          {name: "slide slideRDN6", id: "im06", title: "Réalisation"}],
                      description: "Extension d'une maison individuelle",
                      date: "Date: Novembre 2018 - Janvier 2019",
                      master: "Maître d'ouvrage: Privé",
                      location: "Lieu: Passy 74190",
                      mission: "Missions confiées: ESQ / APD / PC / PRO"
                  }
          }
      },
      methods : {
          reloadDescription: function() {
              alert("bla")
          }
      }
  }
</script>

<style type="scss" scoped>
  div.col {
    width: 49%;
    display: inline-block;
  }
</style>
