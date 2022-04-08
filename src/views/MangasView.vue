<template>
    <section id="main">
					<div class="container contenu">
						<div class="row">
							<div class="col-4 col-12-medium left-bar">

								<!-- Sidebar -->
									<section class="box">
										<a href="#" class="image featured"><img src="@/assets/images/pic09.jpg" alt="" /></a>
										<header>
											<h3>Le carton de l'année</h3>
										</header>
										<p>Rejoignez le héros et ses amis pour une aventure jouissive à couper le souffle</p>
										<footer>
											<a href="#" class="button alt">En savoir plus</a>
										</footer>
									</section>
									

							</div>
							<div class="col-8 col-12-medium imp-medium manga-card">

								<!-- Content -->
									<div class="box post" v-for="manga in mangas"
                                    :key=manga.id
                                    @click="goToSelectedManga(manga.id)">
										<a href="#" class="image featured">
                                            <img :src="manga.illustration" alt="" /></a>
										<header>
											<h2>{{manga.nom}}</h2>
											<p>{{manga.auteur}}</p>
										</header>
										<p>
											{{manga.nbr_tomes}}
										</p>
										
										
									</div>
									<!--<div class="box post">
										<a href="#" class="image featured"><img src="@/assets/images/attack-on-titan.jpg" alt="" /></a>
										<header>
											<h2>Nom du manga</h2>
											<p>Nom de l'auteur</p>
										</header>
										<p>
											Nombre de tomes
										</p>
										<p>
											P
										</p>
										
									</div>
									<div class="box post">
										<a href="#" class="image featured"><img src="@/assets/images/bleach.jpg" alt="" /></a>
										<header>
											<h2>Nom du manga</h2>
											<p>Nom de l'auteur</p>
										</header>
										<p>
											Nombre de tomes
										</p>
										<p>
											P
										</p>
										
									</div>
									<div class="box post">
										<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h2>Nom du manga</h2>
											<p>Nom de l'auteur</p>
										</header>
										<p>
											Nombre de tomes
										</p>
										<p>
											P
										</p>
										
									</div>
									<div class="box post">
										<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h2>Nom du manga</h2>
											<p>Nom de l'auteur</p>
										</header>
										<p>
											Nombre de tomes
										</p>
										<p>
											P
										</p>
										
									</div>-->
							</div>
						</div>
					</div>
				</section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MangasView',
    data: () => ({
        mangas: []
    }),
    methods: {
        goToSelectedManga(mangaId) {
            this.$router.push({ name: 'mangaDetails', params: { mangaId } })

        }
    },
    async created() {
        const mangas = await axios.get('http://localhost:8000/api/read.php')
        console.log(mangas)
        this.mangas = mangas.data
    }

}
</script>


<style>
</style>