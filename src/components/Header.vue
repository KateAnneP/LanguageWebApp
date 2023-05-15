<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="row">
        <div class="col-sm-12">
          <div id="app">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
              <router-link to="/" class="navbar-brand">Strona główna</router-link>
              <div class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/words" class="nav-link">Słówka</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/words/add" class="nav-link">Dodaj słówko</router-link>
                </li>
              </div>
            </nav>

            <div class="container mt-3">
              <router-view />
            </div>
          </div>
        </div>
    </div>

</template>

<style scoped>

</style>
