interface Filhoprops {
    nome: string
    sobrenome: string
}

export default function Filho(props: Filhoprops) {

  

    return (
        <div className={`
            flex justify-center items-center
            bg-green-500 rounded-md p-5 border border-whitte
        `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="">Filho</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        
        </div>
    )
}