<template>
    <section style="display:flex justify-content:center">
        <div class="box post" style="max-width:80%" >
            <img :src=manga.illustration style="max-width:100%" alt="">
            <h2>Titre : {{manga.nom}}</h2>
            <h3>Auteur : {{manga.auteur}}</h3>
            <p>Nombre de tomes : {{manga.nbr_tomes}}</p>
            <p>Adaptation en anime : {{manga.adaptation_anime}}</p>
            <p v-if="manga.adaptation_anime">Nombre d'épisodes : {{manga.nbr_episodes}}</p>
            <p v-if="manga.adaptation_anime">Nombre de saisons : {{manga.nbr_saisons}}</p>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
     name: 'MangaDetails',
    data: () => ({
        manga: {

        }
    }),
    methods: {
        
    },
    async created() {
        const {mangaId}=this.$route.params
        console.log(mangaId)
        const monmangas = await axios.get('http://localhost:8000/api/single_read.php?id='+ mangaId)
        console.log(monmangas)
        this.manga = monmangas.data
    }

}

</script>