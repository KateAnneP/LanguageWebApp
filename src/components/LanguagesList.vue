<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="list row">
        <div class="col-sm-6">
            <h4>Lista języków:</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{active: index == currentIndex}" v-for="(language, index) in languages" :key="index" @click="setActiveLanguage(language, index)"> {{ language.jezyk }} </li>
            </ul>

            <button class="my-3 btn btn-danger" @click="removeAllLanguages">Usuń wszystkie</button>
        </div>
        <div class="col-sm-6">
            <div v-if="currentLanguage">
                <h4>Język:</h4>
                <div>
                    <label><strong>Nazwa:</strong></label> {{ currentLanguage.jezyk }}
                </div>

                <router-link :to="'/languages/' + currentLanguage.id" class="btn btn-dark m-3">Edytuj</router-link>
            </div>
            <div v-else>
                <br />
                <p>Kliknij na język...</p>
            </div>
        </div>
    </div>
</template>

<script>
import LanguageDataService from "../services/LanguageDataService.js";

export default {
    name: "LanguagesList",
    data() {
        return {
            languages: [],
            currentLanguage: null,
            currentIndex: -1,
            jezyk: ""
        };
    },
    methods: {
        retrieveLanguages() {
            LanguageDataService.getAll()
                .then(response => {
                    this.languages = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveLanguages();
            this.currentLanguage = null;
            this.currentIndex = -1;
        },

        setActiveLanguage(language, index) {
            this.currentLanguage = language;
            this.currentIndex = language ? index : -1;
        },

        removeAllLanguages() {
            LanguageDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },

        searchLanguage() {
            LanguageDataService.findByJezyk(this.language)
                .then(response => {
                    this.languages = response.data;
                    this.setActiveLanguage(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveLanguages();
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