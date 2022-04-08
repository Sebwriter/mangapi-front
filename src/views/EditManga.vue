<template>
<div>
<form class="form-add" v-on:submit.prevent="getManga" v-if="isId==0">
    <label for="id-modif">Id</label>
            <input type="text" name="id-modif"  v-model="idModif">
            <button>chercher</button>
</form>
    <form class="form-add" v-on:submit.prevent="EditManga()">
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

            <label for="nbr_episodes">Nombre d'épisodes sortis</label>
            <input type="text" name="nbr_episodes" v-model="manga.nbr_episodes">

            <label for="nbr_saisons">Nombre de saisons sorties</label>
            <input type="text" name="nbr_saisons" v-model="manga.nbr_saisons">
            <button>Ajouter</button>

        </form>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditManga',
    data: () => ({
        manga: {},
        idModif:0,
        isId:0
         
    }),
    methods: {
       async EditManga() {
            await axios.post('http://localhost:8000/api/update.php',this.manga)
       }
    ,
    async getManga(){
        
        const edit = await axios.get('http://localhost:8000/api/single_read.php?id='+this.idModif)
        this.manga= edit.data
    }
    },
    async created() {
        const {mangaId}=this.$route.params
        const monmangas = await axios.get('http://localhost:8000/api/single_read.php?id='+ mangaId)
        this.manga = monmangas.data
        this.idModif=this.manga.id
        this.isId=this.manga.id
    }
    

}
</script>