<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="input-group mb-3">
<!--                <input type="text" class="form-control" placeholder="Wyszukaj słowko" v-model="slowko"/>-->
<!--                <div class="input-group-append">-->
<!--                    <button class="btn btn-outline-secondary " type="button" @click="searchWord">Wyszukaj</button>-->
<!--                </div>-->
            </div>
        </div>
    </div>
    <div class="list row">
        <div class="col-sm-6">
            <h4>Lista słówek:</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{active: index == currentIndex}" v-for="(word, index) in words" :key="index" @click="setActiveWord(word, index)"> {{ word.slowko }} </li>
            </ul>

            <button class="my-3 btn btn-danger" @click="removeAllWords">Usuń wszystkie</button>
        </div>
        <div class="col-sm-6">
            <div v-if="currentWord">
                <h4>Słówko:</h4>
                <div>
                    <label><strong>Słówko:</strong></label> {{ currentWord.slowko }}
                </div>
                <div>
                    <label><strong>Tłumaczenie:</strong></label> {{ currentWord.tlumaczenie }}
                </div>
                <div>
                    <label><strong>Język:</strong></label> {{ currentWord.jezyk }}
                </div>

                <router-link :to="'/words/' + currentWord.id" class="btn btn-dark m-3">Edytuj</router-link>
            </div>
            <div v-else>
                <br />
                <p>Kliknij na słówko...</p>
            </div>
        </div>
    </div>
</template>

<script>
import WordDataService from "../services/WordDataService.js";

export default {
    name: "WordsList",
    data() {
        return {
            words: [],
            currentWord: null,
            currentIndex: -1,
            slowko: ""
        };
    },
    methods: {
        retrieveWords() {
            WordDataService.getAll()
                .then(response => {
                    this.words = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveWords();
            this.currentWord = null;
            this.currentIndex = -1;
        },

        setActiveWord(word, index) {
            this.currentWord = word;
            this.currentIndex = word ? index : -1;
        },

        removeAllWords() {
            WordDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },

        searchWord() {
            WordDataService.findBySlowko(this.word)
                .then(response => {
                    this.words = response.data;
                    this.setActiveWord(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveWords();
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