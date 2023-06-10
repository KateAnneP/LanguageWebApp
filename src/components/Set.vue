<template>
    <div v-if="currentSet" class="edit-form">
        <h4>Zestaw:</h4>
        <form>
            <div class="form-group">
                <label for="nazwa">Nazwa: </label>
                <input type="text" class="form-control" id="nazwa" v-model="currentSet.nazwa"/>
            </div>
            <div class="form-group">
                <label for="owner">Właściciel zestawu: </label>
                <input type="text" class="form-control" id="owner" v-model="currentSet.owner"/>
            </div>
            <div class="form-group">
                <label for="jezyk">Język: </label>
                <input type="text" class="form-control" id="jezyk" v-model="currentSet.jezyk"/>
            </div>
        </form>

        <button class="btn btn-dark my-3" @click="deleteSet">Usuń</button>

        <button type="submit" class="btn btn-dark m-3" @click="updateSet">Aktualizuj</button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Kliknij na zestaw...</p>
    </div>
</template>

<script>
import SetDataService from "../services/SetDataService.js";

export default {
    name: "set",
    data() {
        return {
            currentSet: null,
            message: ''
        };
    },
    methods: {
        getSet(id) {
            SetDataService.get(id)
                .then(response => {
                    this.currentSet = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateSet() {
            SetDataService.update(this.currentSet.id, this.currentSet)
                .then(response => {
                    console.log(response.data);
                    this.message = 'Zaktualizowano zestaw!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

        deleteSet() {
            SetDataService.delete(this.currentSet.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "sets" });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getSet(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>