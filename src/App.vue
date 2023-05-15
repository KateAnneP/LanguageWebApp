<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
