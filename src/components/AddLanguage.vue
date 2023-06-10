<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="slowko">Nazwa:</label>
                <input
                    type="text"
                    class="form-control"
                    id="jezyk"
                    required
                    v-model="language.jezyk"
                    name="jezyk"
                />
            </div>

            <button @click="saveLanguage" class="btn btn-dark mt-3">Dodaj</button>
        </div>

        <div v-else>
            <h4>Zapisano język!</h4>
            <button class="btn btn-dark mt-3" @click="newLanguage">Dodaj nowy</button>
        </div>
    </div>
</template>

<script>
import LanguageDataService from "../services/LanguageDataService.js";
import language from "@/components/Language.vue";

export default {
    name: "add-language",
    data() {
        return {
            language: {
                id: null,
                jezyk: ""
            },
            submitted: false
        };
    },
    methods: {
        saveLanguage() {
            var data = {
                jezyk: this.language.jezyk
            };

            LanguageDataService.create(data)
                .then(response => {
                    this.language.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        newLanguage() {
            this.submitted = false;
            this.language = {};
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