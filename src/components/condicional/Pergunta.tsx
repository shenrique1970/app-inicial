import Faq from "@/components/condicional/Faq";
import { useState } from "react";

export default function Pergunta() {

    const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className={`
            border border-white
            rounded-md overflow-hidden
        `}>
            <div className="bg-zinc-700 p-5 cursor-pointer select-none"
                onClick={() => setAberta(!aberta)}>
                Pergunta
            </div>
            {aberta && (
                <div className="p-5">
                    Resposta
                </div>
            )}

        </div>
    )
}