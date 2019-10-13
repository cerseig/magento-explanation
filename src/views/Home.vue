<template>
    <div class="home">
        <div class="landing">
            <div class="landing__logo">
                <img class="landing__logo--1" :src="require(`@/assets/logos/magento-logo-1.png`)" alt="Magento logo 1">
                <img class="landing__logo--2" :src="require(`@/assets/logos/magento-logo-2.png`)" alt="Magento logo 2">
            </div>
            <div class="landing__down"></div>
        </div>
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
        },
        mounted() {
            this.animateLogo();
        },
        methods: {
            animateLogo: function() {
                console.log('test');

            }
        }
    }
</script>

<style scoped lang="scss">

  @keyframes arrow {
    0%   {
      bottom: 30px;
    }
    75% {
      bottom: 35px;
    }
    100% {
      bottom: 30px;
    }
  }

  .home, .landing {
    width: 100%;
    height: 100%;
  }

  .landing {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f3f4; // grey color

    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;

      &--1 {
        width: 120px;
        margin-right: 20px;
        // transform: translateX(185px);
        transition: all 0.5s ease-in;
      }
      &--2 {
        width: 350px;
        // opacity: 0;
        transition: all 0.5s ease-in;
      }
    }

    &__down {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display : inline-block;
      height : 0;
      width : 0;
      border-top : 15px solid #f26322; // orange color
      border-right : 15px solid transparent;
      border-left : 15px solid transparent;
      animation-name: arrow;
      animation-iteration-count: infinite;
      animation-duration: 1s;
    }

  }

</style>
