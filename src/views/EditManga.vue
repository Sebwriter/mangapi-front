<template>
    <form class="form-add" action="" method="post">
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
            <button @click="addManga()">Ajouter</button>

        </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditManga',
    data: () => ({
        manga: {
        },
         EditManga(mangaId) {
            this.$router.push({ name: 'editMangas', params: { mangaId } })

        }
    }),
    methods: {
       async addManga() {
           
           axios.post('localhost:8000/api/update.php',this.manga)
        }
    },
    async created(){
        const {mangaId} = this.$route.params
        const edit = await axios.post('localhost:8000/api/single_read/?='+mangaId)
        this.manga= edit.data
    }

}
</script>