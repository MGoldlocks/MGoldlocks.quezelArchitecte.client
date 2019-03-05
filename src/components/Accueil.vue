<template>
  <div class="page-content accueil">
    <h1 style="display: none">Mes projets en cours d'architecture en cours à Passy/Sallanches/Chamonix/Megève et dans la vallée de l'Arve</h1>
    <div class="text-description">
      <agile :arrows="true" :speed="750"
             :autoplay="true" :pauseOnHover="false">
        <div v-for="image in images">
          <div v-bind:class="image.name" v-on:click="onClick(image.to)">
            <div class="project-description">
              <h3>{{image.title}}</h3>
            </div>
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    {name: "slide redirect slideAQL1", id: "im01", title: "Projet AQL", to: "AQL"},
                    {name: "slide redirect slideRDN1", id: "im02", title: "Projet RDN", to: "RDN"}]
            }
        },
        methods: {
            onClick: function(to) {
                this.$router.push({path: 'DetailProjet', query: {projet: to}})
            }
        }
    }
</script>
