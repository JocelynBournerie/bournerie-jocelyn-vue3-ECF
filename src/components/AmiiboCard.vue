<script setup>
import { onBeforeMount, ref } from 'vue';
import { getAmiiboByTail } from '@/services/api.services';

const props = defineProps({
    tail: Object
})


const newAmiibo = ref({
})
onBeforeMount(async () => {
    let result = await getAmiiboByTail(props.tail)
    newAmiibo.value = await result.amiibo[0]
    console.log(result)
})
</script>

<template>
    {{ test }}
    <pre>{{ newAmiibo.amiibo }}</pre>
    <div class="col-4 col-12-medium">
        <section class="middle">
            <img :src="newAmiibo.image" />
            <header>
                <h2>{{ newAmiibo.character }}</h2>
            </header>
            <p>{{ newAmiibo.gameSeries }}</p>
        </section>
    </div>
</template>

<style scoped>

</style>