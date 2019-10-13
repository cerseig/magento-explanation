<template>
    <div class="home">
        <Advantages />
        <Inconveniences />
        <Competitors />
        <Lexicon />
    </div>
</template>

<script>
    import Advantages from '@/components/Advantages.vue';
    import Inconveniences from '@/components/Inconveniences.vue';
    import Competitors from '@/components/Competitors.vue';
    import Lexicon from '@/components/Lexicon.vue';

    export default {
        name: 'home',
        components: {
            Lexicon,
            Competitors,
            Advantages,
            Inconveniences
        }
    }
</script>
