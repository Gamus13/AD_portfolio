import { Instance, Svg } from "@react-three/drei"
import {gsap} from "gsap"
import imagesLoaded from "imagesloaded"


const content = document.querySelector('section')

// recuperer tous les images

const imgLoad = imagesLoaded(content)

imgLoad.on('done', instance => {
    // ceci c'est pour enlever l'icone lors du chargement de la page
    gsap.to('Svg', {
        scale: 0
    })

    gsap.to('.blinder', {
        scaleY: 0,
        stagger: .3,
        ease: 'power3.out',
    })
})
