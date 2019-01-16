import Vue from 'vue'
import Router from 'vue-router'
import Agence from '../components/Agence'
import Accueil from '../components/Accueil'
import Contact from '../components/Contact'

import AmenagementInterieur from '../components/AmenagementInterieur'
import Art from '../components/Art'
import Design from '../components/Design'
import Renovation from '../components/Renovation'
import ConstructionNeuve from '../components/ConstructionNeuve'
import DetailProjet from '../components/DetailProjet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
        meta: {
            title: 'Accueil',
            metaTags: [
                {
                    name: 'description',
                    content: "Résumé des projets de Quezel Architecte à Passy et dans la vallée de l'Arve."
                },
                {
                    property: 'og:description',
                    content: "Résumé des projets de Quezel Architecte à Passy et dans la vallée de l'Arve."
                }
            ]
        }
    },
    {
        path: '/Agence',
        name: 'Agence',
        component: Agence,
        meta: {
            title: 'Agence',
            metaTags: [
                {
                    name: 'description',
                    content: "Petit historique de l'agence Quezel Architecte."
                },
                {
                    property: 'og:description',
                    content: "Petit historique de l'agence Quezel Architecte."
                }
            ]
        }
    },
      {
          path: '/DetailProjet',
          name: 'DetailProjet',
          component: DetailProjet,
          meta: {
              title: 'Architecture - Détail projet',
              metaTags: [
                  {
                      name: 'description',
                      content: "Détail d'un projet de l'agence Quezel Architecte à Passy et dans la vallée de l'Arve."
                  },
                  {
                      property: 'og:description',
                      content: "Détail d'un projet de l'agence Quezel Architecte à Passy et dans la vallée de l'Arve."
                  }
              ]
          }
      },
    {
        path: '/AmenagementInterieur',
        name: 'AmenagementInterieur',
        component: AmenagementInterieur,
        meta: {
            title: 'Architecture - Aménagement intérieur',
            metaTags: [
                {
                    name: 'description',
                    content: "Les projets professionels de l'agence Quezel Architecte en aménagement intérieur à Passy et dans la vallée de l'Arve."
                },
                {
                    property: 'og:description',
                    content: "Les projets professionnels de l'agence Quezel Architecte en aménagement intérieur à Passy et dans la vallée de l'Arve."
                }
            ]
        }
    },
    {
        path: '/Art',
        name: 'Art',
        component: Art,
        meta: {
            title: 'Projets personnels - Art',
            metaTags: [
                {
                    name: 'description',
                    content: "Les projets personnels dans le domaine de l'Art de Florian Quezel"
                },
                {
                    property: 'og:description',
                    content: "Les projets personnels dans le domaine de l'Art de Florian Quezel"
                }
            ]
        }
    },
    {
        path: '/Design',
        name: 'Design',
        component: Design,
        meta: {
            title: 'Projets personnels - Art',
            metaTags: [
                {
                    name: 'description',
                    content: "Les projets personnels dans le domaine du Design de Florian Quezel"
                },
                {
                    property: 'og:description',
                    content: "Les projets personnels dans le domaine du Design de Florian Quezel"
                }
            ]
        }
    },
    {
        path: '/Renovation',
        name: 'Renovation',
        component: Renovation,
        meta: {
            title: 'Architecture - Rénovation',
            metaTags: [
                {
                    name: 'description',
                    content: "Les projets professionels de l'agence Quezel Architecte en rénovation à Passy et dans la vallée de l'Arve."
                },
                {
                    property: 'og:description',
                    content: "Les projets professionnels de l'agence Quezel Architecte en rénovation à Passy et dans la vallée de l'Arve."
                }
            ]
        }
    },
    {
        path: '/ConstructionNeuve',
        name: 'Construction Neuve',
        component: ConstructionNeuve,
        meta: {
            title: 'Architecture - Construction Neuve',
            metaTags: [
                {
                    name: 'description',
                    content: "Les projets professionels de l'agence Quezel Architecte dans la construction neuve à Passy et dans la vallée de l'Arve."
                },
                {
                    property: 'og:description',
                    content: "Les projets professionnels de l'agence Quezel Architecte dans la construction neuve à Passy et dans la vallée de l'Arve."
                }
            ]
        }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
        meta: {
            title: 'Contact',
            metaTags: [
                {
                    name: 'description',
                    content: "Comment contacter l'agence Quezel Architecte"
                },
                {
                    property: 'og:description',
                    content: "Comment contacter l'agence Quezel Architecte"
                }
            ]
        }
    }
  ],
  mode: 'history'
})
