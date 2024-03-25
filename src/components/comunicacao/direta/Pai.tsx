import Filho from "./Filho";

interface PaiProps {
    nome: String
    snome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Pai</span>
                <span>{props.nome}</span>
                <span>{props.snome}</span>
            </div>
            <Filho nome="Maria" snome={props.snome} />
            <Filho nome="Rose" snome={props.snome} />
        </div>
    )
}