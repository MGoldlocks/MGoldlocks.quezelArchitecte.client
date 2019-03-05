<template>
  <div class="page-content renovation">
    <h1>Rénovation</h1>
    <div class="text-description">
      <div class="row">
        <div class="column clickable">
          <router-link to="/DetailProjet?projet=RDN">
            <div class="project-description">
              <h3>Projet RDN</h3>
              <i>Extension d'une maison individuelle</i>
            </div>
            <img @load="setheight" :style="{ height: imageHeight + 'px' }" src="../assets/img/Renovation/RDN/rdn1.jpg">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    const methods = ({
        setheight(event) {
            console.log("setheight")
            let image = event.target;
            this.imageHeight = image.clientWidth;
        }
    });
    export default {
        data() {
            return {
                imageHeight: null
            }
        },
        methods
    }
</script>
