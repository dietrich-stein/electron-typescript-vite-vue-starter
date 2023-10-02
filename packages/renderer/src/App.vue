<script lang="ts" setup>
  import ReactiveCounter from '/@/components/ReactiveCounter.vue';
  import ReactiveHash from '/@/components/ReactiveHash.vue';
  import ElectronVersions from '/@/components/ElectronVersions.vue';
  const APP_VERSION = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <img
    alt="Vue logo"
    src="../assets/logo.svg"
    width="150"
  />

  <p>
    <!-- Example how to inject current app version to UI -->
    App version: {{ APP_VERSION }}
  </p>

  <fieldset>
    <legend>Test Vue Reactivity</legend>
    <reactive-counter />
  </fieldset>

  <fieldset>
    <legend>Test Node.js API</legend>
    <reactive-hash />
  </fieldset>

  <fieldset>
    <legend>Environment</legend>
    <electron-versions />
  </fieldset>

  <p>
    Edit
    <code>packages/renderer/src/App.vue</code> to test hot module replacement.
  </p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  justify-content: center;
  /*align-content: center;*/
  /*box-sizing: border-box;*/
  display: flex;
  align-items: center; /*stretch;*/
  flex-direction: column; /*row;*/
  flex-wrap: nowrap; /* flex-wrap: wrap; */

  background-color: rgba(0, 0, 0, 0.2);
  /*height: 100vh;*/
}

fieldset {
  margin: 1rem;
  padding: 1rem;
}
</style>
