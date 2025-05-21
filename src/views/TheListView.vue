<script setup>
import { getAmiibos } from '@/services/api.services';
import { computed, onBeforeMount, ref, registerRuntimeCompiler, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const amiibos = ref({
	amiibo: ""
})

const pagesNumber = ref()

onBeforeMount(async () => {
	amiibos.value = await getAmiibos()
	pagesNumber.value = Math.ceil(amiibos.value.amiibo.length / 10)
})



const currentPage = ref(route.query.page)
const objectLimit = computed(() => parseInt(currentPage.value) * 10)


const amiiboList = computed(() => {
	let result = []
	for (let i = objectLimit.value - 10; i < objectLimit.value; i++) {
		if (amiibos.value.amiibo[i] !== undefined) { result.push(amiibos.value.amiibo[i]) }

	}
	return result
})



const changePage = (newPage) => {
	if (newPage === '+') {
		if(currentPage.value<pagesNumber.value){
			currentPage.value++
		}
		
	}
	if (newPage === '-') {
		if(currentPage.value>1){
			currentPage.value--
		}
		
	}
	router.push({ query: { page: currentPage.value } })
}




watch(
	() => route.query.page,
	(newPage) => currentPage.value = newPage
)

watch(
	() => currentPage.value,
	(newPage) => router.push({ query: { page: newPage } })
)

</script>

<template>
	<section id="main">
		<div class="container">

			<!-- Content -->
			<article class="box post">

				<header>
					<h2>Ma Collection (10 par 10)</h2>
					<p>Page {{ currentPage }}/{{ pagesNumber }} </p>
				</header>
				<p>
				<table>
					<tr>
						<th>Character</th>
						<th>game Series</th>
						<th>Action</th>
					</tr>
					<tr v-for="amiibo of amiiboList" :key="amiibo.tail">
						<td>{{ amiibo.character }}</td>
						<td>{{ amiibo.gameSeries }}</td>
						<td>
							<RouterLink :to="{ name: 'detail', query: { tail: amiibo.tail } }"><button>voir</button>
							</RouterLink>
						</td>
					</tr>
				</table>
				</p>
				<!-- J'ai pas réussis à faire marché le Le charger plus donc j'ai fait une pagination -->
				<button @click="changePage('-')">Page
					Precedente</button>
				<button @click="changePage('+')">Page
					suivante</button>
			</article>

		</div>
	</section>

</template>

<style scoped>
section {
	margin-bottom: 0;
}

article>button {
	margin-right: 1rem;
}
</style>