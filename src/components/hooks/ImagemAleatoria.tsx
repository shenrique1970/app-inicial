import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTanho] = useState<number>(300)

    const url = 'https://source.unsplash.com/featured/'


    function remderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500
                px-4 py-2 
                rounded-md p-2
            `} onClick={() => {
                    alterarPesquisa(valor)
                    console.log(valor)
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-700 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-7">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
            width={300} 
            height={300}
            alt="Imagem" 
            className="rounded-md"
            />
            <div className="flex justify-between">
                {remderizarBotao('abstract')}
                {remderizarBotao('city')}
                {remderizarBotao('person')}
            </div>
            <div>
                <input
                    type="number"
                    value={tamanho}
                    className="bg-zinc-800 p-2 rounded-md outline-none text-white w-full"
                    onChange={e => {
                        alterarTanho(+e.target.value)
                    }}
                />
            </div>
        </div>
    )
}