import { useState } from "react"
import { ButtonFalseStyled, ButtonTrueStyled } from "./styles"


export default function ButtonVoice() {
    const [voice, setVoice] = useState(false)




    function teste() {
        setVoice(!voice)
        console.log('oi')
    }

    return (
        !voice ? (
            <ButtonFalseStyled
                onClick={() => teste()}
            />
        ) : (
            <ButtonTrueStyled
                onClick={() => teste()}

            />
        )
    )
}