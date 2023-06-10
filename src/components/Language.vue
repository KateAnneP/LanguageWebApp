<template>
    <div v-if="currentLanguage" class="edit-form">
        <h4>Język:</h4>
        <form>
            <div class="form-group">
                <label for="jezyk">Nazwa: </label>
                <input type="text" class="form-control" id="jezyk" v-model="currentLanguage.jezyk"/>
            </div>
        </form>

        <button class="btn btn-dark my-3" @click="deleteLanguage">Usuń</button>

        <button type="submit" class="btn btn-dark m-3" @click="updateLanguage">Aktualizuj</button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Kliknij na język...</p>
    </div>
</template>

<script>
import LanguageDataService from "../services/LanguageDataService.js";

export default {
    name: "language",
    data() {
        return {
            currentLanguage: null,
            message: ''
        };
    },
    methods: {
        getLanguage(id) {
            LanguageDataService.get(id)
                .then(response => {
                    this.currentLanguage = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateLanguage() {
            LanguageDataService.update(this.currentLanguage.id, this.currentLanguage)
                .then(response => {
                    console.log(response.data);
                    this.message = 'Zaktualizowano język!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

        deleteLanguage() {
            LanguageDataService.delete(this.currentLanguage.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "languages" });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getLanguage(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>