<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0rem;
  overflow-x: hidden;
}
body {
    background-color: #c5c1c2;
}

button {
  outline: none;
  cursor: pointer;
}

button :focus{
  outline: none;
}

.header {
}
.icon {
  width: 10rem;
  margin-top: -3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.close{
  z-index: 15;
}
</style>
