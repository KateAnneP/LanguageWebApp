<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="list row">
        <div class="col-sm-6">
            <h4>Lista kategorii:</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{active: index == currentIndex}" v-for="(category, index) in categories" :key="index" @click="setActiveCategory(category, index)"> {{ category.nazwa }} </li>
            </ul>

            <button class="my-3 btn btn-danger" @click="removeAllCategories">Usuń wszystkie</button>
        </div>
        <div class="col-sm-6">
            <div v-if="currentCategory">
                <h4>Kategoria:</h4>
                <div>
                    <label><strong>Nazwa:</strong></label> {{ currentCategory.nazwa }}
                </div>

                <router-link :to="'/categories/' + currentCategory.id" class="btn btn-dark m-3">Edytuj</router-link>
            </div>
            <div v-else>
                <br />
                <p>Kliknij na kategorię...</p>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService.js";

export default {
    name: "CategoriesList",
    data() {
        return {
            categories: [],
            currentCategory: null,
            currentIndex: -1,
            nazwa: ""
        };
    },
    methods: {
        retrieveCategories() {
            CategoryDataService.getAll()
                .then(response => {
                    this.categories = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveCategories();
            this.currentCategory = null;
            this.currentIndex = -1;
        },

        setActiveCategory(category, index) {
            this.currentCategory = category;
            this.currentIndex = category ? index : -1;
        },

        removeAllCategories() {
            CategoryDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },

        searchCategory() {
            CategoryDataService.findByNazwa(this.category)
                .then(response => {
                    this.categories = response.data;
                    this.setActiveCategory(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveCategories();
    }
};
</script>

<style scoped>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>