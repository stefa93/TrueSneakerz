<template>

    <div>
        <div class="product" v-on:click="Expand()">
            <img :src="shoe.imageUrl" v-bind:style="{width: styleWidthProperty, height: styleHeightProperty}"
                 v-bind:class="{expanded: expanded}"/>
                <span class="name">{{ shoe.name }}</span>
                <span class="price">€ {{ shoe.price }}</span>
        </div>
        <product-expanded v-if="expanded" :imgPos="initialImagePos" :shoe="shoe" v-on:leftPanelElement="expandTransformation($event)">
        </product-expanded>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Shoe from "../../models/shoe/shoe.entity";
    import {TimelineLite, Power1, Power3} from "gsap/TweenMax";
    import ProductExpanded from '../product-expanded/ProductExpanded.vue';

    @Component({
        components: {
            ProductExpanded
        },
    })
    export default class Product extends Vue {
        @Prop() shoe: Shoe;
        timelineLite: TimelineLite;
        width = 0;
        height = 0;
        expanded = false;
        imageElement: HTMLImageElement;
        initialImagePos: DOMRectInit;

        constructor() {
            super();
            this.timelineLite = new TimelineLite();
        }

        mounted() {
            this.imageElement = this.$el.querySelector('img');
            this.initialImagePos = this.imageElement.getBoundingClientRect();
        }


        get styleHeightProperty() {
            return this.height > 0 ? this.height + 'px' : 'inherit';
        }

        get styleWidthProperty() {
            return this.width > 0 ? this.width + 'px' : 'inherit';
        }

        sizeHandler() {
            const rect = this.imageElement.getBoundingClientRect();
            this.height = rect.height;
            this.width = rect.width;
        }

        Expand() {
            if (!this.expanded){
                this.sizeHandler();
                this.expanded = true;
            }
        }


        expandTransformation(middle: middleDimensions) {
            this.timelineLite
                .to(this.imageElement, 1, {
                    left: middle.leftOffset,
                    top: middle.topOffset,
                    scale: 1.3,
                    xPercent: -50,
                    yPercent: -50,
                    ease: Power3.easeOut
                })
            this.timelineLite.play();
        }


    }
</script>

<style lang="scss" scoped>

    .product {
        display: grid;
        align-content: space-between;
        justify-content: center;

        img {
            max-width: 100%;
        }

        .name {
            font-weight: bold;
        }

        .price {

        }
    }
    .products-wrapper {
        grid-column: 3 / 13;
    }

    .title-box {
        display: flex;
        align-items: center;
        grid-row: 1;
        grid-column: 1 / 3;
        padding-left: 10%;
        height: 10vh;
        z-index: 200;
        font-weight: bold;
    }

    .expanded {
        position: absolute;
        z-index: 3;
        background-color: #E1DEE2;
    }

    @media (max-width: 767.98px) {
        img {

        }

    }
</style>
