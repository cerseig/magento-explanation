<template>
    <div class="inconveniences">
        <h2 class="inconveniences__title title-section">Les inconvenients de Magento</h2>
        <div class="inconveniences__content">
            <ul class="inconveniences__list">
                <li class="inconveniences__item inconvenience">
                    <h3 class="inconvenience__name">Hébergement</h3>
                    <p class="inconvenience__abstract">Héberger un site Magento requiert un minimum de connaissance informatique et d’un certain temps afin que la plateforme et ses modules fonctionnent correctement une fois en ligne. Ce temps de configuration et de connaissance a un coût assez élevé. </p>
                </li>
                <li class="inconveniences__item inconvenience">
                    <h3 class="inconvenience__name">Maniabilité</h3>
                    <p class="inconvenience__abstract">Le back-office n’est pas encore optimisé comme il devrait être, même s’il y a eu un énorme progrès entre Magento 1 et Magento 2, la multitude des fonctionnalités proposées ne facilitent pas la prise en main de la plateforme et reste peu ergonomique. </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Inconveniences'
    }
</script>

<style scoped lang="scss">
    .inconveniences {
        max-width: 1024px;
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

        .inconvenience {
            max-width: 60%;

            &:nth-child(even) {
                margin-left: auto;
                text-align: right;

                .inconvenience__name {
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

                .inconvenience__name {
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
</style>
