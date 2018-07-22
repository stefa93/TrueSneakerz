<template>
    <div class="expanded-screen">
        <div class="left-panel">
        </div>
        <div class="right-panel">
            <div class="size-row">
                <div>Choose your size</div>
                <div class="size-boxes">
                    <div v-for="(size, index) in shoe.sizes" class="size-box" v-bind:class="{active: selected === index}" v-on:click="select(index)"> {{ size }}</div>
                </div>
            </div>
            <div class="info-row">
               <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in lorem sit amet tellus lobortis viverra.
                Morbi et libero tellus. Mauris vitae ante vestibulum, viverra lacus et, pharetra est. Donec gravida,
                turpis at aliquam scelerisque, ligula orci tempor sapien, at convallis nulla eros posuere purus.
                Suspendisse ut scelerisque mi. Nullam bibendum mi varius turpis consequat, nec sollicitudin dolor
                ultricies. Nulla congue metus egestas justo consectetur, eu porttitor arcu blandit.
               </span>
            </div>
            <div class="bottom-row">
                <div>
                    <span class="price">{{ shoe.price }}</span>
                </div>
                <div class="name"> {{ shoe.name }}</div>
                <button class="cart-button">
                    ADD TO CART
                </button>
                <div class="policy">
                    <a>Terms & Conditions</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {TimelineLite, Power1, Power2} from "gsap/TweenMax";
    import Shoe from "../../models/shoe/shoe.entity";

    export type middleDimensions = { leftOffset: number, topOffset: number };

    @Component({
        components: {},
    })
    export default class ProductExpanded extends Vue {
        @Prop() imgPos;
        @Prop() shoe;
        timelineLite: TimelineLite;
        selected = 0;

        constructor() {
            super();
            this.timelineLite = new TimelineLite();
        }

        mounted() {
            const leftPanel = this.$el.querySelector('.left-panel');
            const rightPanel = this.$el.querySelector('.right-panel');
            const boundingClientRect = leftPanel.getBoundingClientRect();
            console.log(boundingClientRect);
            let middle: middleDimensions = this.getMiddle(boundingClientRect.width, boundingClientRect.height);
            this.$emit('leftPanelElement', middle);
            this.timelineLite
                .from(leftPanel, 0.8, {
                    bottom: this.imgPos.bottom,
                    height: this.imgPos.height,
                    left: this.imgPos.left,
                    right: this.imgPos.right,
                    top: this.imgPos.top,
                    width: this.imgPos.width,
                    x: this.imgPos.x,
                    y: this.imgPos.y,
                    ease: Power2.easeOut
                }).from(rightPanel, 0.5, {x: "100%"}, "-=0.6")
        }

        select(index: number) {
            this.selected = index;
        }

        getMiddle(width: number, height: number): middleDimensions {
            const leftOffset = (width / 2);
            const topOffset = (height / 2);
            return {leftOffset, topOffset}
        }
    }

</script>

<style lang="scss" scoped>

    .expanded-screen {
        display: grid;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;

        grid-template-columns: 1.5fr 1fr;

        .left-panel {
            width: 100%;
            background-color: #E1DEE2;
            will-change: auto;
            z-index: 2;
        }

        .right-panel {
            display: grid;
            padding: 10vh 15% 5%;
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas: "size-row" "info-row" "." "bottom-row";

            background-color: white;
            will-change: auto;
            z-index: 3;

            .size-row {
                grid-area: size-row;
                display: grid;
                grid-template-rows: 10% 1fr;
                font-weight: bold;

                .size-boxes {
                    display: grid;
                    height: 20%;
                    grid-gap: 5%;
                    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));

                    .size-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: white;
                        color: black;
                        border: 2px black solid;

                        &:hover {
                            background-color: black;
                            color: white;
                        }

                        &.active {
                            background-color: black;
                            color: white;
                        }
                    }
                }
            }

            .info-row {
                grid-area: info-row;
                font-weight: lighter;
            }

            .bottom-row {
                grid-area: bottom-row;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 5%;
                grid-template-rows: repeat(3, 1fr);
                grid-template-areas: "price . " "name button" ". policy";

                .price {
                    grid-area: price;
                    color: white;
                    background-color: black;
                    padding-left: 2%;
                    padding-right: 2%;
                }


                .name {
                    grid-area: name;
                    font-weight: bold;
                }

                .cart-button {
                    grid-area: button;
                    background-color: black;
                    color: white;
                }

                .policy {
                    grid-area: policy;
                    text-align: center;
                }
            }
        }
    }
</style>
