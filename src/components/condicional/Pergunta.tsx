import Faq from "@/components/condicional/Faq";
import { useState } from "react";

interface PerguntaProps {
    texto: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {

    const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className={`
            border border-white
            rounded-md overflow-hidden
        `}>
            <div className="bg-zinc-700 p-5 cursor-pointer select-none"
                onClick={() => setAberta(!aberta)}>
                {props.texto}
            </div>
            {aberta && (
                <div className="p-5">
                    {props.resposta}
                </div>
            )}

        </div>
    )
}