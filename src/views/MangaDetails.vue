<template>
    <section>
        <div>
            <img src="" alt="">
            <h2>Titre :</h2>
            <h3>Auteur :</h3>
            <p>Nombre de tomes :</p>
            <p>Adaptation en anime : </p>
            <p v-if="manga.adaptation_anime">Nombre d'épisodes</p>
            <p v-if="manga.adaptation_anime">Nombre de saisons</p>
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
        const monmangas = await axios.get('localhost:8000/api/single_read.php/?='+mangaId)
        console.log(monmangas)
        this.manga = monmangas.data
    }

}

</script>