<template>
	<nav id="nav">
		<ul>
			<li class="current">
				<router-link :to="{name:'home'}">Home</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'mangas' }">Mon univers manga</router-link>
			</li>
			<!--<ul>
						<li><a href="mes-mangas.html">Mangas</a></li>
						<li><a href="mes-animes.html">Animes</a></li>
					</ul>
			</li>-->
			<li>
				<router-link :to="{name:'admin'}">Admin</router-link>
				<ul>
					<li>
						<a href="new-manga.html">Add</a>
					</li>
					<li>
						<a href="edit-manga.html">Edit</a>
					</li>
					<li>
						<a href="delete-manga.html">Delete</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="contact.html">Contact</a>
			</li>
		</ul>
	</nav>
</template>
<script>


export default {
	name: 'NavbarView',
	data: () => ({

	}),
	methods:{
		overing(){
			
		}
	}
}
</script>