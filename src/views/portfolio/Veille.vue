<template>
    <v-container>
        <h1 class="title text-center my-10">Veille Technologique</h1>
        <v-row align="start" justify="center">
            <v-col cols="12" sm="8" md="6" lg="3">
                <v-card>
                    <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flipboard_logo.svg/langfr-220px-Flipboard_logo.svg.png"></v-img>
                </v-card>
            </v-col>
            <v-col cols="12" sm="8" md="6" lg="4">
                <p>L'informatique est un domaine qui evolue de jour en jour,chaque personne voulant travailler dans se domaine se doit d'avoir une veille sur l'actualité,personnelement j'utilise flipboard</p>
                <v-row justify="end">
                    <v-btn color="red" text @click="flipboardLink">mon flipboard</v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        flipboardLink() {
            window.open('https://flipboard.com/')
        }
    }
}
</script>