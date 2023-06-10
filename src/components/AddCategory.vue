<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="kategoria">Kategoria:</label>
                <input
                    class="form-control"
                    id="nazwa"
                    required
                    v-model="category.nazwa"
                    name="nazwa"
                />
            </div>

            <button @click="saveCategory" class="btn btn-dark mt-3">Dodaj</button>
        </div>

        <div v-else>
            <h4>Zapisano kategorię!</h4>
            <button class="btn btn-dark mt-3" @click="newCategory">Dodaj nową</button>
        </div>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService.js";

export default {
    name: "add-category",
    data() {
        return {
            category: {
                id: null,
                nazwa: ""
            },
            submitted: false
        };
    },
    methods: {
        saveCategory() {
            var data = {
                nazwa: this.category.nazwa
            };

            CategoryDataService.create(data)
                .then(response => {
                    this.category.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        newCategory() {
            this.submitted = false;
            this.category = {};
        }
    }
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>