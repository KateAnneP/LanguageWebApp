<template>
    <div v-if="currentCategory" class="edit-form">
        <h4>Kategoria:</h4>
        <form>
            <div class="form-group">
                <label for="nazwa">Nazwa: </label>
                <input type="text" class="form-control" id="nazwa" v-model="currentCategory.nazwa"/>
            </div>
        </form>

        <button class="btn btn-dark my-3" @click="deleteCategory">Usuń</button>

        <button type="submit" class="btn btn-dark m-3" @click="updateCategory">Aktualizuj</button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Kliknij na kategorię...</p>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService.js";

export default {
    name: "category",
    data() {
        return {
            currentCategory: null,
            message: ''
        };
    },
    methods: {
        getCategory(id) {
            CategoryDataService.get(id)
                .then(response => {
                    this.currentCategory = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateCategory() {
            CategoryDataService.update(this.currentCategory.id, this.currentCategory)
                .then(response => {
                    console.log(response.data);
                    this.message = 'Zaktualizowano kategorię!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

        deleteCategory() {
            CategoryDataService.delete(this.currentCategory.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "categories" });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getCategory(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>