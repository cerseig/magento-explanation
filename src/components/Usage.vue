<template>
    <div class="use">
        <div class="use__container">
            <h2 class="use__title title-section">Dans quel cas faut-il choisir <span>Magento</span> ?</h2>
            <div class="use__content">
                <p>Si vous êtes une grosse entreprise et que souhaitez un site e-commerce performant permettant de gérer une grande quantité de produits et un important flux de visite, Magento est la technologie faites pour vous. Vous pourrez avoir la main sur quasiment tous les modules et personnaliser au maximum selon ses envies et besoins. Évitez cette plateforme si vous êtes plutôt une petite entreprise sur le début, cela engendrerait des coûts beaucoup trop importants et une perte de temps. </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Usage'
    }
</script>

<style scoped lang="scss">
    
    .use {
        background-image: url('../assets/pattern.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 50px;

        &__container {
            max-width: 1024px;
            margin:  0 auto;
        }

        &__title {
            font-size: 30px;

            span {
                color: #f26322;
            }
        }
    }

    @media screen and (max-width: 767px) {
        .use {
            background: none;
            padding: 20px;

            &__title {
                font-size: 25px;
                text-align: center;
            }
        }
    }



</style>
