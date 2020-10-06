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
                <p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I know words. I have the best words.</p>
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
            window.open('https://google.com')
        }
    }
}
</script>