<template>
<div id="menu-wrapper">
    <div class="menu-items">
        <ul>
            <li>Brand<span class="fa fa-plus fa-1x"></span></li>
            <li>Size<span class="fa fa-plus fa-1x"></span></li>
            <li>Color<span class="fa fa-plus fa-1x"></span></li>
            <li>Gender<span class="fa fa-plus fa-1x"></span></li>
        </ul>
    </div>
    <div class="search-button"></div>
</div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class MenuLeft extends Vue {
    }
</script>

<style lang="scss" scoped>
#menu-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: #0f1b25;
    padding-left: 10%;
    padding-right: 10%;

    display: grid;
    grid-template-rows: auto 10vh;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;

    color: white;

    &:hover {
        color: white;
        background-color: #0f1b25;
    }

    .title-box {
        font-weight: bold;
    }

    .menu-items {
        ul {
            margin: 0;
            padding: 0;
            line-height: 3;
            list-style: none;
        }

        li {
            display: grid;
            grid-template-columns: auto 20%;
            padding-left: 10%;
            transition: border-bottom 0.2s ease-out;
        }

        li::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #fff;
            transition: width .2s;
        }

        li:hover::after {
            width: 120%;
        }

        span {
            justify-self: center;
            align-self: center;
        }
    }
}

@media (max-width: 767.98px) {
    #menu-wrapper {
        background-color: #0f1b25;
        color: white;

        .menu-items {
            display: none;
        }

        .title-box {
            display: none;
        }
    }
}
</style>