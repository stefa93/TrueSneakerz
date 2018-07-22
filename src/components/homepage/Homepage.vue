<template>
    <div id="homepage">
        <div class="main-menu" v-bind:class="{'hide-animation': addHideClass}">
            <span class="logo-box">TrueSneakerz</span>
            <div class="menu-items">
                <span>Adidas</span>
                <span>Nike</span>
                <span> Our Story</span>
            </div>
            <span class="cart">
                <i class="fas fa-shopping-cart"></i>
            </span>
        </div>
        <div class="landing">
            <div class="landing-container">
                <div class="landing-frame">
                    <image-slider></image-slider>
                </div>
                <div class="explore-button" v-on:click="scroll()">
                    <span>TO SHOP</span>
                </div>
            </div>
        </div>
        <div class="products-wrapper">
            <products-wrapper></products-wrapper>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ProductsWrapper from '../products-wrapper/ProductsWrapper.vue';
    import ImageSlider from '../image-slider/ImageSlider.vue';

    @Component({
        components: {
            ProductsWrapper,
            ImageSlider
        },
    })
    export default class Homepage extends Vue {
        menuhidden = false;
        scrollListener: any;

        mounted() {
            const landingBottom = this.$el.querySelector(".landing").getBoundingClientRect().height;
            this.scrollListener = window.addEventListener('scroll', (e) => {
               return this.menuhidden = window.scrollY > landingBottom;
            } )
        }

        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollListener);
        }

        scroll() {
            const productsWrapper = this.$el.querySelector(".products-wrapper");
            productsWrapper.scrollIntoView({behavior: "smooth", block: "start"});
        }

        get addHideClass() {
            return this.menuhidden;
        }

    }
</script>

<style lang="scss" scoped>
    @keyframes glitch-anim-text {
        0%, 100% {
            transform: translate3d(2px, -2px, 0) scale3d(-1,-1,1);
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        }
        20% {
            -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        }
        41% {
            -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        }
        52% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        }
        61% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
            clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        }
        75% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        }
        80% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        }
        96% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
            clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        }
    }

    #homepage {
        display: grid;
        grid-template-rows: 8vh 100vh auto;
        height: 100%;
        grid-template-areas: "main-menu" "landing" "productswrapper";

        .main-menu {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-area: main-menu;
            position: sticky;
            top: 0;
            z-index: 4;
            background-color: white;
            border-bottom: 1px solid #eff1f4;
            transition: all 0.5s;

            .logo-box {
                display: flex;
                justify-content: center;
                align-items: center;
                grid-column: 3 / 4;
                font-weight: bold;
            }

            .menu-items {
                align-items: center;
                display: flex;
                flex-direction: row-reverse;
                grid-column: 4 / 11;
                span {
                    padding-left: 5%;
                }
            }

            .cart {
                display: flex;
                justify-content: center;
                align-items: center;
                border-left: 1px black solid;
                grid-column: 12 /13;
                background-color: #0f1b25;
                color: white;
            }

            &.hide-animation {
                -webkit-transition: -webkit-transform 0.5s;
                -moz-transition: -moz-transform 0.5s;
                transition: transform 0.5s;
                -webkit-transform: rotateX(-90deg);
                -moz-transform: rotateX(-90deg);
                transform: rotateX(-90deg);
                top: 50px;
                padding-left: 50px;
                padding-right: 50px;
                animation: glitch-anim-text 0.3s linear alternate 1 backwards;
            }
        }

        .landing {
            display: grid;
            grid-area: landing;
            grid-template-rows: repeat(12, 1fr);
            grid-template-columns: repeat(12, 1fr);

            .landing-container {
                grid-template-rows: repeat(12, 1fr);
                grid-template-columns: repeat(12, 1fr);
                display: grid;
                grid-column: 3/11;
                grid-row: 2 / 13;

                .landing-frame {
                    display: grid;
                    grid-column: 5/12;
                    grid-template-columns: repeat(12, 1fr);
                    grid-row: 1 / 9;
                    border-bottom: 3px solid #eff1f4;
                }
            }

            .explore-button {
                display: flex;
                grid-row: 8 / 9;
                grid-column: 1 / 4;
                background-color: #0f1b25;
                color: white;
                font-weight: bold;
                justify-content: center;
                align-items: center;
            }
        }

        .products-wrapper {
            grid-area: productswrapper;
        }
    }

    @media (max-width: 767.98px) {

        .landing-container {
            grid-column: 1 / 13;
            grid-row: 1;
        }

        .products-wrapper {
            grid-column: span 12;
        }
    }
</style>