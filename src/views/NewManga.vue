<template>
    <form class="form-add" v-on:submit.prevent="addManga">
            <label for="nom">Nom du manga</label>
            <input type="text" name="nom" v-model="manga.nom">

            <label for="auteur">Auteur</label>
            <input type="text" name="auteur" v-model="manga.auteur">

            <label for="illustration">Illustration (url)</label>
            <input type="text" name="illustration" v-model="manga.illusration">

            <label for="nbr_tomes">Nombre de tomes parus</label>
            <input type="text" name="nbr_tomes" v-model="manga.nbr_tomes">

            <label for="adaptation_anime">Adaptation anime ?</label>
            <input type="checkbox"  style="width: 20px; height: 20px;"
            name="adaptation_anime" id="adaptation_anime"
            v-model="manga.adaptation_anime">

            <label for="nbr_episodes" v-if="manga.adaptation_anime" >Nombre d'épisodes sortis</label>
            <input type="text" name="nbr_episodes"
            v-if="manga.adaptation_anime" 
            v-model="manga.nbr_episodes">

            <label for="nbr_saisons" v-if="manga.adaptation_anime" >Nombre de saisons sorties</label>
            <input type="text" name="nbr_saisons"
            v-if="manga.adaptation_anime" 
            v-model="manga.nbr_saisons">
            <br>
            <button>Ajouter</button>

        </form>
</template>

<script>

import axios from 'axios'
export default {
    name: 'NewManga',
    data: () => ({
        manga: {}
    }),
    methods: {
       async addManga() {
           
          let envoi = await axios.post('http://localhost:8000/api/create.php',this.manga)
        console.log(envoi)
        }
    }

}
</script>