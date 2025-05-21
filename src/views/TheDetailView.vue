<script setup>
import { onBeforeMount, ref } from 'vue';
import { getAmiiboByTail } from '@/services/api.services';
import { useRoute } from 'vue-router';


const route = useRoute()


const newAmiibo = ref({
    amiiboSeries:"",
    character:"",
    gameSeries:"",
    type:"",
    release:"",
    image:"",
})

onBeforeMount(async () => {
    let result = await getAmiiboByTail(route.query.tail)
    newAmiibo.value = await result.amiibo[0]
})

</script>

<template>
    <section id="main">
        <div class="container">
            <div class="row">
                <div class="col-4 col-12-medium">

                    <!-- Sidebar -->
                    <section class="box">
                        <header>
                            <h3>Infos</h3>
                        </header>
                        <p> amiiboSeries: <b>{{newAmiibo.amiiboSeries}}</b> <br />
                            character: {{newAmiibo.character}}<br />
                            gameSeries: {{newAmiibo.gameSeries}}<br />
                            type: {{newAmiibo.type}}
                        </p>

                    </section>
                    <section class="box">
                        <header>
                            <h3>Dates sorties</h3>
                        </header>

                        <ul class="divided">
                            <li v-if="newAmiibo.release.au">au: {{newAmiibo.release.au}}</li>
                            <li v-if="newAmiibo.release.eu">eu: {{newAmiibo.release.eu}}</li>
                            <li v-if="newAmiibo.release.jp">jp: {{newAmiibo.release.jp}}</li>
                            <li v-if="newAmiibo.release.na">na: {{newAmiibo.release.na}}</li>
                        </ul>

                    </section>

                </div>
                <div class="col-8 col-12-medium imp-medium">

                    <!-- Content -->
                    <article class="box post">
                        <a href="#" class="featured"><img
                                :src="newAmiibo.image"
                                alt="" /></a>
                        <header>
                            <h2>Name</h2>
                            <p>type</p>
                        </header>
                    </article>

                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
section{
    margin-bottom: 0;
}
</style>