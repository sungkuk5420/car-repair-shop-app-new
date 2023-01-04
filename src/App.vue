<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>


<style>
html,
body {
  overflow: hidden;
}

#q-app {
  overflow: auto;
  height: 100%;

}

#q-app,
.q-footer {
  border: 1px solid #ddd;
}


#q-app,
.q-footer,
.q-header {
  width: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: flex-start;
}
</style>