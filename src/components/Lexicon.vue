<template>
    <div class="lexicon">
        <h2 class="lexicon__title title-section">Le lexique</h2>
        <div class="lexicon__content">
            <ul class="lexicon__list">
                <li class="lexicon__item word">
                    <h4 class="word__name">Back-office</h4>
                    <p class="word__description">Partie du site visible uniquement par l’administrateur, où celui-ci peut gérer son site (son contenu, son design, ses fonctionnalités…).</p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">CMS</h4>
                    <p class="word__description">(Content Management System) Programme informatique utilisant une base de données qui permet de gérer de A à Z le contenu et l’apparence d’un site web. </p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">E-commerce</h4>
                    <p class="word__description">commerce électronique à travers Internet.</p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">Framework</h4>
                    <p class="word__description">Appelé “Cadre de travail”, un framework est une sorte d'architecture prête à l’emploi pour les développeurs afin de leur simplifier le travail et de commencer sur une base solide. </p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">Mode SaaS</h4>
                    <p class="word__description">(Software as a Service) Pouvoir profiter d’un service en ligne via Internet sans avoir besoin de l’installer sur un ordinateur ou un serveur.</p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">Open-source</h4>
                    <p class="word__description">Le code source est en libre accès, les développeurs peuvent prendre part à la conception du code et aider à la réalisation et l’optimisation du logiciel / plugin / plateforme.</p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">Plugin</h4>
                    <p class="word__description">Appelé aussi module, il s’agit d’un paquet de fichiers informatiques qui permettent d’ajouter de nouvelles fonctionnalités.</p>
                </li>
                <li class="lexicon__item word">
                    <h4 class="word__name">SEO</h4>
                    <p class="word__description">(Search Engine Optimization) Désigne le référencement naturel qui est “l’art” de positionner un site web dans les premiers résultats naturels des moteurs de recherche.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Lexicon'
    }
</script>

<style scoped lang="scss">

    .lexicon {
        margin-bottom: 50px;

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

        &__list {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 30px;
        }

        .word {
            &__name {
                margin: 0;
            }

            &__description {
                margin-top: 5px;
            }
        }
    }

    @media screen and (max-width: 767px) {
        .lexicon {
            margin-bottom: 20px;

            &__title {
                font-size: 20px;
            }
            &__content {
                padding: 0 20px;
            }

            &__list {
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 20px;
            }
        }
    }

</style>
