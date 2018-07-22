<template>
    <div id="wrapper">
        <div class="menu-left">
            <menu-left></menu-left>
        </div>
        <span class="title-box">TrueSneakerz</span>
        <div class="products">
            <product v-for="(shoe) in shoes" :key="shoe.id" :shoe="shoe"></product>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Shoe from "../../models/shoe/shoe.entity";
    import Product from '../product/Product.vue';
    import ProductExpanded from '../product-expanded/ProductExpanded.vue';
    import MenuLeft from '../menu-left/MenuLeft.vue';

    @Component({
        components: {
            MenuLeft,
            Product,
            ProductExpanded
        },
    })
    export default class ProductsWrapper extends Vue {
        shoes: Shoe[] = [
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/2llqY8WAS8GffeARmYu1",
                200,
                ['39', '40', '41'],
                "Nike React Element 87"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/veiTP6H2Th20c0J0UWLQ",
                200,
                ['41', '42', '43', '45', '46'],
                "Nike x Off-White Air VaporMax Flyknit"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/Eu0TvCorTUaoM9LGaWkc",
                200,
                ['40', '44'],
                "x Sean Wotherspoon Air Max 97/1"
            ),
            new Shoe(
                "https://cdn.filestackcontent.com/TcZu1sMQfyJwmBRF775o",
                200,
                ['39', '40', '41'],
                "Adidas Yeezy Boost 350 V2 Butter"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/veiTP6H2Th20c0J0UWLQ",
                200,
                ['41', '42', '43', '45', '46'],
                "Nike x Off-White Air VaporMax Flyknit"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/2llqY8WAS8GffeARmYu1",
                200,
                ['40', '44'],
                "Nike React Element 87"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/2llqY8WAS8GffeARmYu1",
                200,
                ['39', '40', '41'],
                "Nike React Element 87"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/veiTP6H2Th20c0J0UWLQ",
                200,
                ['41', '42', '43', '45', '46'],
                "Nike x Off-White Air VaporMax Flyknit"
            ),
            new Shoe(
                "https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=width:800,height:600/output=compress:true,quality:70,strip:true/2llqY8WAS8GffeARmYu1",
                200,
                ['40', '44'],
                "Nike React Element 87"
            ),

        ];
    }
</script>

<style lang="scss" scoped>
        #wrapper {
            position: relative;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }

        .menu-left {
            grid-column: 1 / 3;
            grid-row: 1;
        }

        .menu-left:hover + .title-box {
            color: white;
        }

        .title-box {
            position: relative;
            display: flex;
            align-items: center;
            grid-row: 1;
            grid-column: 1 / 3;
            padding-left: 10%;
            height: 10vh;
            z-index: 4;
            font-weight: bold;
            color: white;
        }

        .products {
            display: grid;
            height: 100%;
            grid-column: 3 / 13;
            grid-template-columns: 1fr 1fr 1fr;
            padding-left: 10%;
            padding-right: 10%;
        }

    @media (max-width: 767.98px) {
        .products {
            grid-template-columns: 1fr;
        }
    }
</style>
