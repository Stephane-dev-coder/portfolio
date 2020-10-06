<template> 
    <div>
        <v-navigation-drawer v-model="drawer" clipped right app>
            <v-list dense nav>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-title>Stéphane Zayat</v-list-item-title>

                    <v-btn
                    icon
                    @click.stop="drawer = !drawer"
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-list-item>
                <v-list-item-group color="primary" :value="activePage">
                    <v-list-item link @click="() => activePage != 0 ? this.$router.push('/portfolio/cv') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="cv">
                            <v-list-item-title class="green--text">CV</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 1 ? this.$router.push('/portfolio/experience') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-clipboard-text</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="experience">
                            <v-list-item-title class="green--text">Experience professionel</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 2 ? this.$router.push('/portfolio/patrimoine') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="patrimoine">
                            <v-list-item-title class="green--text">Patrimoine informatique</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 3 ? this.$router.push('/portfolio/situation') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-nature-people</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="situation">
                            <v-list-item-title class="green--text">Situation Professionel</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 4 ? this.$router.push('/portfolio/veille') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-rss</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="veille">
                            <v-list-item-title class="green--text">Veille Technologique</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 5 ? this.$router.push('/portfolio/competences') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="competences">
                            <v-list-item-title class="green--text">Competences</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                <v-btn color="red" block>
                    <span class="white--text" @click="disconnect">Logout</span>
                </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar elevation="2" app clipped-right>
            <h1 class="title" >Portfolio</h1>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            drawer: false,
        }
    },
    computed: {
        activePage () {
            switch (this.$route.name) {
                case 'Cv':
                    return 0
                case 'Experience':
                    return 1
                case 'Patrimoine':
                    return 2
                case 'Situation':
                    return 3
                case 'Veille':
                    return 4
                case 'Competences':
                    return 5
                default:
                    return 0
            }
        }
    },
    methods: {
        disconnect () {
            this.$router.push('/login')
            this.logout()
        },
        ...mapMutations([
        'logout',
        ]),
    }
}
</script>