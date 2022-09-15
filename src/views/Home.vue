<template>
    <div>
        <Header/>
        <Hero :magasin="magasin"/>
        <!--
            <WhyUS :why_us_header="why_us_header" :why_us_content="why_us_content"/>
        -->
        <hr color="#FFFEB0">
        <HowitWork :how_it_work_header="how_it_work_header" :how_it_work_content="how_it_work_content"/>
        <hr color="#FFFEB0">
        <Services :services_header="services_header" :services_content="services_content"/>
        <hr color="#FFFEB0">
        <Gallery :gallery_header="gallery_header" :gallery_content="gallery_content"/>
        <!--
            <Department :department_header="department_header" :department_content="department_content"/>
        -->
        <hr color="#FFFEB0">
        <Faq :faq_header="faq_header" :faq_content="faq_content"/>
        <hr color="#FFFEB0">
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
    import Hero from '../components/Hero';
    //import WhyUS from '../components/WhyUS';
    //import Department from '../components/Department';
    import Faq from '../components/Faq';
    import Services from '../components/Services';
    import HowitWork from '../components/HowitWork';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import Gallery from '../components/Gallery';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            Hero,
            //WhyUS,
            //Department,
            Faq,
            Services,
            HowitWork,
            Header,
            Footer,
            Gallery
        },
        data: () => ({
            overlay: false,
            magasin: {},
            faq_header: {},
            faq_content: [],
            department_header: {},
            department_content: [],
            services_header: {},
            services_content: [],
            how_it_work_header: {},
            how_it_work_content: [],
            gallery_header: {},
            gallery_content: [],
            why_us_header: {},
            why_us_content: {}
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Home'
        },
        methods: {
            initialize() {
                this.overlay = true
                this.$http.get("init").then(response => {
                    if(response.data != null){
                        this.magasin = response.data.magasin;
                        this.faq_header = response.data.faq_header[0];
                        this.faq_content = response.data.faq_content;
                        this.department_header = response.data.department_header[0];
                        this.department_content = response.data.department_content;
                        this.services_header = response.data.services_header[0];
                        this.services_content = response.data.services_content;
                        this.how_it_work_header = response.data.how_it_work_header[0];
                        this.how_it_work_content = response.data.how_it_work_content;
                        this.gallery_header = response.data.gallery_header[0];
                        this.gallery_content = response.data.gallery_content;
                        this.why_us_header = response.data.why_us_header[0];
                        this.why_us_content = response.data.why_us_content[0];
                        this.overlay = false
                    }
                }).catch(error => {
                    console.log(error)
                    this.overlay = false
                })
            },
            filterHours() {
                this.slot = null
                const splitDate = (this.cacSelectedDate.date).split('/');
                const afterSplitCacSelectedDate = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];
                if(this.delivery_methode === 'CAC'){
                    if ((this.cacSelectedDate.position === 1 && this.cacSelectedDate.en === "Wednesday") ||
                        (this.cacSelectedDate.position === 1 && this.cacSelectedDate.en === "Friday")) {
                        this.delivery_slot_hours = this.delivery_slots.filter((item) => {
                            const conditionOptions = this.options.length > 0 && this.options.some((item) => item.is_cooking);
                            const condition = conditionOptions ? item.start_hour === 17 : item.start_hour >= 14;
                            return this.dateToYMD(new Date(item.date_slot)) === this.dateToYMD(new Date(afterSplitCacSelectedDate)) &&
                                condition
                        });
                        return;
                    }
                    if (this.cacSelectedDate.date === "Saturday") {
                        this.delivery_slot_hours = this.delivery_slots.filter((item =>
                                this.dateToYMD(new Date(item.date_slot)) === this.dateToYMD(new Date(afterSplitCacSelectedDate)) &&
                                item.start_hour <= 16
                        ));
                        return;
                    }
                }
                this.delivery_slot_hours = this.delivery_slots.filter((item => this.dateToYMD(new Date(item.date_slot)) === this.dateToYMD(new Date(afterSplitCacSelectedDate))));

            },
        },
    }
</script>


