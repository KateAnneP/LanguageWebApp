<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="slowko">Nazwa:</label>
                <input
                    type="text"
                    class="form-control"
                    id="nazwa"
                    required
                    v-model="set.nazwa"
                    name="nazwa"
                />
            </div>

            <div class="form-group">
                <label for="jezyk">Właściciel zestawu:</label>
                <input
                    class="form-control"
                    id="owner"
                    required
                    v-model="set.owner"
                    name="owner"
                />
            </div>

            <div class="form-group">
                <label for="zestaw">Język:</label>
                <input
                    class="form-control"
                    id="jezyk"
                    required
                    v-model="set.jezyk"
                    name="jezyk"
                />
            </div>

            <button @click="saveSet" class="btn btn-dark mt-3">Dodaj</button>
        </div>

        <div v-else>
            <h4>Zapisano zestaw!</h4>
            <button class="btn btn-dark mt-3" @click="newSet">Dodaj nowy</button>
        </div>
    </div>
</template>

<script>
import SetDataService from "../services/SetDataService.js";

export default {
    name: "add-set",
    data() {
        return {
            set: {
                id: null,
                nazwa: "",
                owner: "",
                jezyk: ""
            },
            submitted: false
        };
    },
    methods: {
        saveSet() {
            var data = {
                nazwa: this.set.nazwa,
                owner: this.set.owner,
                jezyk: this.set.jezyk
            };

            SetDataService.create(data)
                .then(response => {
                    this.set.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        newSet() {
            this.submitted = false;
            this.set = {};
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