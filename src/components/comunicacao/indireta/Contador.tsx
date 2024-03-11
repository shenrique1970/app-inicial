import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {

    const [num, setNum] = useState<number>(0)
    // (valor: number) (num + valor)
    function incrementar () {
        setNum(num + 1)
    }
    // (valor: number) (num - valor)
    function decrementar () {
        setNum(num - 1)
    }

    return (
        <div className={`
            flex 
            flex-col 
            p-2
            border
            border-zinc-400 
            rounded-lg
            w-72
            h-72
        `}>
            <Display valor={num} />
            <Botoes mais={incrementar} menos={decrementar} />
        </div>
    )
}