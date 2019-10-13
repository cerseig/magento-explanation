<template>
    <div class="competitors">
        <div class="competitors__container">
            <h2 class="competitors__title">Les concurrents de Magento</h2>
            <div class="competitors__content">
                <img class="competitors__logos" :src="require(`@/assets/logos/logos.png`)" alt="Logos des concurrents">
                <p>Contrairement à Magento, ces 4 autres alternatives pour le développement d'un site e-commerce sont plus simple à prendre main pour les non développeurs. Avec <a href="https://www.prestashop.com/" target="_blank" title="Lien vers Shopify">Shopify</a>, pas besoin de s'y connaitre en développement pour s'assurer du bon fonctionnement de son site, il est reconnu comme le plus simple à utiliser. Chez <a href="https://www.volusion.com/v1/" title="Lien vers Volusion" target="_blank">Volusion</a>, on retrouve des fonctionnalités qu'on ne trouve pas chez Shopify ou Magento, comme le traitement des commandes par téléphone. Quant à <a href="https://www.bigcommerce.com" title="Lien vers BigCommerce" target="_blank">BigCommerce</a>, celui-ci propose des prix beaucoup plus élevés que ses concurrents. En ce qui concerne <a href="https://www.prestashop.com/" title="Lien vers Prestashop" target="_blank">Prestashop</a>, il s'agit d'une solution totalement gratuite et représente le bon compromis entre Magento et Shopify.</p>
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

            p {
                margin: 20px auto;
                max-width: 80%;

                a {
                    color: #f26322;
                }
            }
        }

        &__logos {
            width: 80%;
        }
    }
</style>
