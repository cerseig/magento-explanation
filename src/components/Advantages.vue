<template>
    <div class="advantages">
        <h2 class="advantages__title title-section">Les avantages de Magento</h2>
        <div class="advantages__content">
            <ul class="advantages__list">
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Open-source</h3>
                    <p class="advantage__abstract">Plateforme open-source, chaque développeur peut aider dans le développement des services, apporter de nouvelles idées et rendre le service avancée techniquement. La plateforme est donc en perpétuel évolution. </p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Multilingue</h3>
                    <p class="advantage__abstract">Sa fonctionnalité multilingue permet au commerce de s’ouvrir sur le marché international et de pouvoir concevoir différents sites pour les différents marchés. Tout ça est gérable via le même back-office*.  </p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Extensible</h3>
                    <p class="advantage__abstract">Au vu du grand nombres de plugins et de thèmes existants pour Magento, il est très simple de rendre son site extensible afin de gérer l’augmentation des produits, du trafic, des ventes et autres données.</p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Flexible</h3>
                    <p class="advantage__abstract">Grâce à toutes ses possibilités de personnalisation, les modules de Magento s’adaptent aux besoins et envies du client, que ce soit en terme de design ou de configuration. </p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Responsive</h3>
                    <p class="advantage__abstract">Dans la conception de ses thèmes, Magento prend en charge les différents formats mobiles afin de faciliter l’accès aux sites depuis n’importe quel support (ordinateur, tablette, téléphone portable..). </p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Statistique</h3>
                    <p class="advantage__abstract">Afin de récolter un maximum d’informations à propos de l’activité e-commerce, Magento propose un ensemble de statistiques détaillés : flux des visiteurs, les produits en rupture de stock, les commandes, les nouveaux clients.. </p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">Achat</h3>
                    <p class="advantage__abstract">Tout le processus d’achat de Magento est claire et rapide. Il guide l’utilisateur, du produit sélectionné jusqu’à l’étape finale de paiement, sans que celui-ci se perde entre les différentes étapes d’achat en ligne. De même que pour le panier qui est accessible partout et est facilement identifiable. Ajouté à cela que l’utilisateur a  la possibilité de payer avec différents moyens de paiement.</p>
                </li>
                <li class="advantages__item advantage">
                    <h3 class="advantage__name">SEO* & marketing</h3>
                    <p class="advantage__abstract">La plateforme propose également des fonctionnalités SEO qui aident à optimiser la place dans les résultats des moteurs de recherche. Grâce aux outils marketing déjà présent, pas besoin d’ajouter de plugin. </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Advantages'
    }
</script>

<style scoped lang="scss">

    .advantages {
        margin:  0 auto 100px auto;

        &__title {
            font-size: 25px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 30px 0;
            text-align: center;
            background-color: #f26322;
            color: white;
            letter-spacing: 2px;
            margin-bottom: 50px;
        }

        &__content {
            padding: 0 30px;
            max-width: 1024px;
            margin: 0 auto;
        }

        .advantage {
            max-width: 60%;

            &:nth-child(even) {
                margin-left: auto;
                text-align: right;

                .advantage__name {
                    margin-right: 220px;

                    &:before {
                        content: '';
                        position: absolute;
                        right: -220px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 200px;
                        height: 2px;
                        background: black;
                    }
                }
            }

            &:nth-child(odd) {
                text-align: left;

                .advantage__name {
                    margin-left: 220px;

                    &:before {
                        content: '';
                        position: absolute;
                        left: -220px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 200px;
                        height: 2px;
                        background: black;
                    }
                }
            }

            &__name {
                font-weight: 600;
                letter-spacing: 1px;
                font-size: 18px;
                text-transform: uppercase;
                position: relative;
            }
        }
    }

    @media screen and (max-width: 767px) {
        .advantages {
            margin:  0 auto 50px auto;

            &__title {
                font-size: 20px;
            }

            &__content {
                padding: 0 20px;
            }

            .advantage {
                max-width: 100%;
                margin-bottom: 40px;

                &:nth-child(even) {
                    .advantage__name {
                        margin-right: 120px;

                        &:before {
                            right: -120px;
                            width: 100px;
                        }
                    }
                }

                &:nth-child(odd) {
                    .advantage__name {
                        margin-left: 120px;

                        &:before {
                            left: -120px;
                            width: 100px;
                        }
                    }
                }

            }
        }
    }

</style>
