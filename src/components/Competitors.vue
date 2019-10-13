<template>
    <div class="competitors">
        <div class="competitors__container">
            <h2 class="competitors__title">Les concurrents de Magento</h2>
            <div class="competitors__content">
                <img class="competitors__logos" :src="require(`@/assets/logos/logos.png`)" alt="Logos des concurrents">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Competitors'
    }
</script>

<style scoped lang="scss">
    .competitors {
        margin:  0 auto 100px auto;

        &__container {
        }

        &__title {
            font-size: 25px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 30px 0;
            text-align: center;
            background-color: #f26322;
            color: white;
            letter-spacing: 2px;
            margin: 0 0 50px 0;
        }

        &__content {
            padding: 0 30px;
            max-width: 1024px;
            margin: 0 auto;
            text-align: center;
        }

        &__logos {
            width: 80%;
        }
    }
</style>
