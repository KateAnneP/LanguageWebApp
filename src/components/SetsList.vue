<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="list row">
        <div class="col-sm-6">
            <h4>Lista zestawów:</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{active: index == currentIndex}" v-for="(set, index) in sets" :key="index" @click="setActiveSet(set, index)"> {{ set.nazwa }} </li>
            </ul>

            <button class="my-3 btn btn-danger" @click="removeAllSets">Usuń wszystkie</button>
        </div>
        <div class="col-sm-6">
            <div v-if="currentSet">
                <h4>Zestaw:</h4>
                <div>
                    <label><strong>Nazwa:</strong></label> {{ currentSet.nazwa }}
                </div>
                <div>
                    <label><strong>Właściciel zestawu:</strong></label> {{ currentSet.owner }}
                </div>
                <div>
                    <label><strong>Język:</strong></label> {{ currentSet.jezyk }}
                </div>

                <router-link :to="'/sets/' + currentSet.id" class="btn btn-dark m-3">Edytuj</router-link>
            </div>
            <div v-else>
                <br />
                <p>Kliknij na zestaw...</p>
            </div>
        </div>
    </div>
</template>

<script>
import SetDataService from "../services/SetDataService.js";

export default {
    name: "SetsList",
    data() {
        return {
            sets: [],
            currentSet: null,
            currentIndex: -1,
            nazwa: ""
        };
    },
    methods: {
        retrieveSets() {
            SetDataService.getAll()
                .then(response => {
                    this.words = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveSets();
            this.currentSet = null;
            this.currentIndex = -1;
        },

        setActiveSet(set, index) {
            this.currentSet = set;
            this.currentIndex = set ? index : -1;
        },

        removeAllSets() {
            SetDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },

        searchSet() {
            SetDataService.findByNazwa(this.set)
                .then(response => {
                    this.sets = response.data;
                    this.setActiveSet(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveSets();
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