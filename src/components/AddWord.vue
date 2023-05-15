<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="slowko">Słówko:</label>
                <input
                    type="text"
                    class="form-control"
                    id="slowko"
                    required
                    v-model="word.slowko"
                    name="slowko"
                />
            </div>

            <div class="form-group">
                <label for="tlumaczenie">Tłumaczenie:</label>
                <input
                    class="form-control"
                    id="tlumaczenie"
                    required
                    v-model="word.tlumaczenie"
                    name="tlumaczenie"
                />
            </div>

            <div class="form-group">
                <label for="jezyk">Język:</label>
                <input
                    class="form-control"
                    id="jezyk"
                    required
                    v-model="word.jezyk"
                    name="jezyk"
                />
            </div>

            <div class="form-group">
                <label for="zestaw">Zestaw:</label>
                <input
                    class="form-control"
                    id="zestaw"
                    required
                    v-model="word.zestaw"
                    name="zestaw"
                />
            </div>

            <div class="form-group">
                <label for="kategoria">Kategoria:</label>
                <input
                    class="form-control"
                    id="kategoria"
                    required
                    v-model="word.kategoria"
                    name="kategoria"
                />
            </div>

            <button @click="saveWord" class="btn btn-dark mt-3">Dodaj</button>
        </div>

        <div v-else>
            <h4>Zapisano słówko!</h4>
            <button class="btn btn-dark mt-3" @click="newWord">Dodaj nowe</button>
        </div>
    </div>
</template>

<script>
import WordDataService from "../services/WordDataService.js";

export default {
    name: "add-word",
    data() {
        return {
            word: {
                id: null,
                slowko: "",
                tlumaczenie: "",
                jezyk: "",
                zestaw: "",
                kategoria: ""
            },
            submitted: false
        };
    },
    methods: {
        saveWord() {
            var data = {
                slowko: this.word.slowko,
                tlumaczenie: this.word.tlumaczenie,
                jezyk: this.word.jezyk,
                zestaw: this.word.zestaw,
                kategoria: this.word.kategoria
            };

            WordDataService.create(data)
                .then(response => {
                    this.tutorial.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        newWord() {
            this.submitted = false;
            this.word = {};
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