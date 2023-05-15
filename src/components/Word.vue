<template>
    <div v-if="currentWord" class="edit-form">
        <h4>Słówko:</h4>
        <form>
            <div class="form-group">
                <label for="slowko">Słówko: </label>
                <input type="text" class="form-control" id="slowko" v-model="currentWord.slowko"/>
            </div>
            <div class="form-group">
                <label for="tlumaczenie">Tłumaczenie: </label>
                <input type="text" class="form-control" id="tlumaczenie" v-model="currentWord.tlumaczenie"/>
            </div>
            <div class="form-group">
                <label for="jezyk">Język: </label>
                <input type="text" class="form-control" id="jezyk" v-model="currentWord.jezyk"/>
            </div>
            <div class="form-group">
                <label for="zestaw">Zestaw: </label>
                <input type="text" class="form-control" id="zestaw" v-model="currentWord.zestaw"/>
            </div>
            <div class="form-group">
                <label for="kategoria">Kategoria: </label>
                <input type="text" class="form-control" id="kategoria" v-model="currentWord.kategoria"/>
            </div>
        </form>

        <button class="btn btn-dark my-3" @click="deleteWord">Usuń</button>

        <button type="submit" class="btn btn-dark m-3" @click="updateWord">Aktualizuj</button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Kliknij na słówko...</p>
    </div>
</template>

<script>
import WordDataService from "../services/WordDataService.js";

export default {
    name: "word",
    data() {
        return {
            currentWord: null,
            message: ''
        };
    },
    methods: {
        getWord(id) {
            WordDataService.get(id)
                .then(response => {
                    this.currentWord = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateWord() {
            WordDataService.update(this.currentWord.id, this.currentWord)
                .then(response => {
                    console.log(response.data);
                    this.message = 'Zaktualizowano słówko!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

        deleteWord() {
            WordDataService.delete(this.currentWord.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "words" });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getWord(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>