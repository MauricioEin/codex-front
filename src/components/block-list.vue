<template>
    <section class="block-list">
        <article class="block-preview" v-for="(block, idx) in blocks" :key="idx">
            {{ block.title }}
        </article>
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