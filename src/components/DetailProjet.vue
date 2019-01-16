<template>
  <div class="page-content detailProjet">
    <h1>Détail projet {{this.$route.query.projet}}</h1>
    <div class="text-description">
      <div v-for="row in nbRow" class="row">
        <div class="column">
            <img v-for="imageName in imagesName" v-bind:key="imageName.id" v-bind:src="imageName.name">
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
                  console.log("lala")
                  return {
                      nbRow:1,
                      imagesName: [
                          {name: require("./../assets/img/AmenagementInterieur/im01.png"), id: "im01"},
                          {name: require("./../assets/img/AmenagementInterieur/im02.png"), id: "im02"},
                          {name: require("./../assets/img/AmenagementInterieur/im03.png"), id: "im03"},
                          {name: require("./../assets/img/AmenagementInterieur/im04.png"), id: "im04"}],
                      description: "Projet de SDB AQL"
                  }
          }
      }
  }
</script>
