<template>
    <section class="block-list">
        <RouterLink class="block-preview" v-for="(block, idx) in blocks" :key="idx" :to="'/code/' + block._id">
            {{ block.title }}
        </RouterLink>
    </section>
</template>

<script>
export default {
    name: 'block-list',
    props: {
        blocks: Array,
    },
    components: {
    },
}
</script>