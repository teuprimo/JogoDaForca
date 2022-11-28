import Forca from "./Jogo/Forca"

import Letras from "./Letras"
import Acertos from "./Jogo/Acertos"
import { useState } from "react"

export default function Jogo(prop){
    
    console.log(prop.tentativa)

    

    return(
        <div className='jogo'>
        <Forca erro={0} />
        <button class="comecar"  onClick={() => prop.apertouBotao('awa')}>Escolher Palava</button>
        <Acertos palavra={prop.palavra} />
        </div>
    )
}