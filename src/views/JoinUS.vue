<template>
    <div>
        <Header/>
        <div class="contact" style="background-color: #FFFEE9">
            <v-container>
                <div class="contact-form mt-6" v-if="magasin.website_under_maintenance == 0">
                    <v-form  enctype="multipart/form-data" ref="form" v-model="valid" lazy-validation>
                        <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1" color="#F6B401">
                                Category Selection
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step :complete="e1 > 2" step="2" color="#F6B401">
                                Student Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3" color="#F6B401">
                                Parent Information
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-alert dismissible class="mt-5" v-if="contactAlert === 1" type="success">Your registration has been sent successfully, we will contact you by email soon.</v-alert>
                                <v-alert dismissible class="mt-5" v-if="contactAlert === 2" type="error">Error</v-alert>
                                <v-row>
                                    <v-col md="6" cols="12">
                                        <h3><u>Our categories for this year</u></h3>
                                        <div class="hidden-sm-and-up">
                                            <span><v-icon color="success">mdi-check-all</v-icon> <b>Category N°01:</b> Age between 9 and 11 years.</span> <br>
                                            <span><v-icon color="success">mdi-check-all</v-icon> <b>Category N°02:</b> Age between 12 and 15 years.</span> <br>
                                            <span><v-icon color="success">mdi-check-all</v-icon> <b>Category N°03:</b> Age between 16 and 18 years.</span>
                                        </div>
                                        <v-list class="hidden-xs-only">
                                            <v-list-item>
                                                <v-icon color="success">mdi-check-all</v-icon>
                                                <v-divider inset></v-divider>
                                                <v-list-item-subtitle><b>Category N°01:</b> Age between 9 and 11 years.</v-list-item-subtitle>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-icon color="success">mdi-check-all</v-icon>
                                                <v-divider inset></v-divider>
                                                <v-list-item-subtitle><b>Category N°02:</b> Age between 12 and 15 years.</v-list-item-subtitle>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-icon color="success">mdi-check-all</v-icon>
                                                <v-divider inset></v-divider>
                                                <v-list-item-subtitle><b>Category N°03:</b> Age between 16 and 18 years.</v-list-item-subtitle>
                                            </v-list-item>
                                        </v-list>
                                        <h3><u>The required documents</u></h3>
                                        <div class="hidden-sm-and-up">
                                            <span><v-icon color="success">mdi-check-all</v-icon> ID Picture (image file wth size less than 1MB)</span> <br>
                                            <span><v-icon color="success">mdi-check-all</v-icon> Birth certificate (pdf file with size less than 2MB)</span>
                                        </div>
                                        <v-list class="hidden-xs-only">
                                            <v-list-item>
                                                <v-icon color="success">mdi-check-all</v-icon>
                                                <v-divider inset></v-divider>
                                                <v-list-item-subtitle>ID Picture (image file with size less than 1MB)</v-list-item-subtitle>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-icon color="success">mdi-check-all</v-icon>
                                                <v-divider inset></v-divider>
                                                <v-list-item-subtitle>Birth certificate (pdf file with size less than 2MB)</v-list-item-subtitle>
                                            </v-list-item>
                                        </v-list>

                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <div class="align-center text-center justify-center">
                                            <img src="../assets/categories.png" alt="categories" height="200">
                                            <v-row class="align-center text-center justify-center pt-3" align="center" justify="center">
                                                <v-chip-group v-model="selectedCategory">
                                                    <v-chip filter outlined>
                                                        Category N°01
                                                    </v-chip>
                                                    <v-chip filter outlined>
                                                        Category N°02
                                                    </v-chip>
                                                    <v-chip filter outlined>
                                                        Category N°03
                                                    </v-chip>
                                                </v-chip-group>
                                            </v-row>
                                            <p class="pt-5"><u><b>Please select a category to continue</b></u></p>
                                            <v-alert dismissible class="mt-5" v-if="contactAlert === 2" type="error">Sorry, this category is filled</v-alert>
                                        </div>

                                    </v-col>
                                </v-row>

                                <v-btn v-if="selectedCategory != null" @click="checkCategory" class="mb-2 ml-2" color="#F6B401">
                                    Continue
                                    <span class="mx-2"></span>
                                    <v-progress-circular
                                            v-if="contactLoad === true"
                                            indeterminate
                                            color="#FFFBC8"
                                            size="20"
                                    ></v-progress-circular>
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-row>
                                    <v-col md="6" cols="12" class="align-center justify-center pt-5">
                                        <v-text-field
                                                v-model="studentName"
                                                :rules="nameRules"
                                                label="Student Full Name"
                                                required
                                                filled
                                                dense
                                                rounded
                                        ></v-text-field>
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition"
                                                offset-y min-width="auto">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                        filled
                                                        dense
                                                        rounded
                                                        v-model="date"
                                                        label="  Birthday date"
                                                        prepend-icon=""
                                                        prepend-inner-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        :rules="dateRules"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                    v-model="date"
                                                    :active-picker.sync="activePicker"
                                                    max="2013-12-31"
                                                    min="2004-01-01"
                                                    @change="save"
                                            ></v-date-picker>
                                        </v-menu>
                                        <v-file-input
                                                v-model="photo"
                                                rounded dense
                                                label="  Student Picture"
                                                filled
                                                prepend-icon=""
                                                prepend-inner-icon="mdi-camera"
                                                accept="image/png, image/jpeg"
                                                :rules="photoRules"
                                        ></v-file-input>
                                        <v-file-input
                                                v-model="certificate"
                                                rounded dense
                                                label="  Student Birth Certificate"
                                                filled
                                                prepend-inner-icon="mdi-file"
                                                prepend-icon=""
                                                accept="application/pdf"
                                                :rules="certificateRules"
                                        ></v-file-input>
                                    </v-col>
                                    <v-col md="6" cols="12" class="text-center">
                                        <img src="../assets/students.jpg" alt="categories" height="300"/>
                                    </v-col>
                                </v-row>
                                <v-btn @click="e1 = 3" class="mb-2 ml-2" color="#F6B401" v-if="studentName !== '' && photo != null && photo.size < 1000000 && (photo.type == 'image/png' || photo.type == 'image/jpeg') && certificate != null && certificate.size < 2000000 && certificate.type == 'application/pdf' && date != null">Continue</v-btn>
                                <v-btn text @click="e1 = 1" class="mb-2">Back</v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-row>
                                    <v-col md="6" cols="12" class="align-center justify-center pt-5">
                                        <v-text-field
                                                v-model="parentName"
                                                :rules="nameRules"
                                                label="Parent Full Name"
                                                required
                                                filled
                                                dense
                                                rounded
                                        ></v-text-field>
                                        <v-text-field
                                                v-model="phone"
                                                :rules="phoneRules"
                                                label="Parent Phone Number"
                                                required
                                                filled
                                                dense
                                                rounded
                                        ></v-text-field>
                                        <v-text-field
                                                v-model="email"
                                                :rules="emailRules"
                                                label="Parent E-mail"
                                                required
                                                filled
                                                dense
                                                rounded
                                        ></v-text-field>
                                        <v-checkbox v-model="terms" style="margin-top: 0px; padding-top: 0px" color="#F6B401" :rules="termsRules"
                                                label="I assure that my son has all the mental and physical capabilities to practice scientific activities"
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col md="6" cols="12" class="text-center">
                                        <img src="../assets/parents.png" alt="categories" height="300"/>
                                    </v-col>
                                </v-row>
                                <v-btn :disabled="!valid" color="#F6B401" @click="validate" class="mb-2 ml-2">
                                    Submit
                                    <span class="mx-2"></span>
                                    <v-progress-circular
                                            v-if="contactLoad === true"
                                            indeterminate
                                            color="#FFFBC8"
                                            size="20"
                                    ></v-progress-circular>
                                </v-btn>

                                <v-btn text @click="e1 = 2" class="mb-2">Back</v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                    </v-form>
                </div>
                <div v-else class="mt-6">
                    <img class="hero-image text-center" alt="hero image" src="../assets/closed.png">
                </div>
            </v-container>
        </div>
        <Footer :magasin="magasin"/>
        <v-overlay :value="overlay" color="white" :opacity="1">
            <v-progress-circular
                    indeterminate
                    size="60"
                    color="#FFF59E"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Contact",
        components: {Header, Footer},
        data: () => ({
            e1: 1,
            selectedCategory: null,
            terms: false,

            valid: true,
            parentName: '',
            studentName: '',
            nameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 100) || 'Field must be less than 100 characters',
                v => (v && v.length > 5) || 'Field must be more than 5 characters',
            ],

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            phone: '',
            phoneRules: [
                v => !!v || 'Phone is required',
                v => /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(v) || 'Phone must be valid',
            ],

            photo: null,
            photoRules: [
                value => !value || value.size < 1000000 || 'Photo size should be less than 1 MB!',
                v => (v != null) || 'Photo is required',
                value2 => !value2 || value2.type == 'image/jpeg' || value2.type == 'image/png' || 'Invalid picture, we accept only png, jpg or jpeg type',
            ],

            certificate: null,
            certificateRules: [
                value => !value || value.size < 2000000 || 'Birth certificate size should be less than 2 MB!',
                v => (v != null) || 'Certificate is required',
                value2 => !value2 || value2.type == 'application/pdf' || 'Invalid certificate, we accept only pdf type',
            ],
            termsRules: [
                v => (v !== false) || 'Mental and physical abilities are essential',
            ],

            date: null,
            dateRules: [
                v => (v != null) || 'Date is required',
            ],

            magasin: {},
            contactLoad: false,
            contactAlert: 0,
            overlay: false,
            activePicker: null,

            menu: false,
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Registration'
        },
        watch: {
            menu (val) {
                val && setTimeout(() => (this.activePicker = 'YEAR'))
            },
        },
        methods: {
            checkCategory() {
                if(this.selectedCategory != null) {
                    this.contactLoad = true
                    this.$http.post("check-category", {student_category: "Category N°0" + (this.selectedCategory + 1).toString()})
                        .then(response => {
                            this.contactLoad = false
                            console.log(response.data)
                            if(response.data.success === true){
                                if(response.data.number < 25){
                                    this.e1 = 2
                                }else {
                                    this.contactAlert = 2
                                }
                            }
                        })
                        .catch(error => {
                            this.contactLoad = false
                            console.error("There was an error!", error);
                        });
                }
            },
            validate () {
                if(this.$refs.form.validate()) {
                    this.contactLoad = true
                    const info = {
                        student_full_name: this.studentName,
                        student_birth_date: this.date,
                        parent_full_name: this.parentName,
                        parent_email: this.email,
                        parent_phone_number: this.phone,
                        student_photo: this.photo,
                        student_birth_certificate: this.certificate,
                        student_category: "Category N°0" + (this.selectedCategory + 1).toString()
                    };
                    this.$http.post("new-registration", info, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                        .then(response => {
                            this.contactLoad = false
                            if(response.data.success === true){
                                this.contactAlert = 1
                            }else{
                                this.contactAlert = 2
                            }
                            this.reset()
                        })
                        .catch(error => {
                            this.contactLoad = false
                            this.reset()
                            this.errorMessage = error.message;
                            console.error("There was an error!", error);
                        });
                }
            },
            reset () {
                this.selectedCategory = null
                this.e1 = 1
                this.terms = false
                this.$refs.form.reset()
            },
            save (date) {
                this.$refs.menu.save(date)
            },
            initialize() {
                this.overlay = true
                this.$http.get("magasin").then(response => {
                    this.overlay = false
                    if(response.data != null){
                        this.magasin = response.data
                    }
                }).catch(error => {
                    console.log(error)
                    this.overlay = false
                })
            },
        }
    }
</script>

<style scoped>
    .contact {
        background-color: #FFF;
        padding-bottom: 25px;
    }
    .contact-item {
        background-color: #FFFEE9;
        padding: 15px;
        border-radius: 20px;
        margin: 8px;
    }
    .contact-form {
        background-color: #FFFEE9;

        border-radius: 20px;
    }
    .contact-map {
        height: 400px;
        width: 95%;
    }
    .contact-form-input {
        border-radius: 30px;
        background-color: #EFF2F9;
        border-bottom: none;
    }
    .hero-image {
        margin: 0 auto;
        /*max-width: 400px;*/
        width: 100%;
        height: auto;
        border-radius: 2.25rem;
        box-shadow: 0 16px 32px 8px rgba(223, 105, 81, .25);
    }
</style>