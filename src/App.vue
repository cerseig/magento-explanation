<template>
  <div id="app">
    <div class="nav">
      <a @click="scrollToSection('definition')">Définition</a>
      <a @click="scrollToSection('advantages')">Avantages</a>
      <a @click="scrollToSection('inconveniences')">Inconvénients</a>
      <a @click="scrollToSection('competitors')">Concurrents</a>
      <a @click="scrollToSection('lexicon')">Lexique</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            scrollToSection: function(section) {
                console.log('scroll to');
                $('html, body').animate({
                    scrollTop: ($('.' + section).offset().top - 50)
                }, 2000);
            }
        }
    }
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    line-height: 25px;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    a {
      font-size: 12px;
      flex: 1;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      transition: color 0.3s ease;

      &:hover {
        color: #f26322;
      }

    }
  }

</style>
