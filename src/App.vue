<template>
  <div id="app">
    <div class="nav">
      <router-link to="/advantages">Avantages</router-link>
      <router-link to="/inconveniences">Inconvénients</router-link>
      <router-link to="/competitors">Concurrents</router-link>
      <router-link to="/lexicon">Lexique</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      flex: 1;
      text-align: center;
      text-transform: uppercase;
    }
  }

</style>
