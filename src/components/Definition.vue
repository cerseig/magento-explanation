<template>
    <div class="definition">
        <h2 class="definition__title">Qu’est ce que <span>Magento</span> ?</h2>
        <div class="definition__content">
            <p>Magento est une plateforme open-source*, appelée CMS*, qui permet la réalisation d’une boutique e-commerce.  Cette plateforme est basée sur le langage PHP et utilise le framework Zend. Grâce à ses multiples fonctionnalités, comme le fait de pouvoir gérer son catalogue de produits, les commandes, la boutique et les fiches clients, Magento permet de booster le business de la boutique et d’augmenter sa rentabilité. Elle est reconnue aujourd'hui comme étant l'un des piliers du secteur e-commerce.</p>
            <ul>Magento met à disposition 2 offres pour ces clients :
                <li>le Magento Open Source (gratuit mais limité dans les fonctionnalités)</li>
                <li>le Magento Commerce (payant et illimité dans les fonctionnalités)</li>
            </ul>
            <p>Le Magento Commerce est une solution fiable et qui répond aux besoins de toutes les entreprises : petites, moyennes et grandes. </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Definition'
    }
</script>

<style scoped lang="scss">
    .definition {
        max-width: 1024px;
        margin: 100px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;

        &__title {
            font-size: 50px;
            line-height: 50px;
            text-align: right;
            margin-right: 50px;

            span {
                color: #f26322;
            }
        }

        &__content {
            border-left: 5px solid #f26322;
            padding-left: 20px;
            width: 100%;

            p {
                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }

            ul {
                li {
                    margin-left: 30px;
                    position: relative;

                    &:before {
                        content: '';
                        position: absolute;
                        left: -10px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 5px;
                        height: 5px;
                        background-color: #f26322;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

</style>
