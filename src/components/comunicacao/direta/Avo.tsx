import Pai from "./Pai";

interface AvoProps {
    nome: String
    snome: string
}

export default function Avo(props: AvoProps) {
    return (
        <div className={`
            flex flex-col 
            gap-5 
            p-5 
            rounded-md 
            border border-gray
            bg-purple-500 text-white 
        `}>
            <div className="flex justify-center gap-2">
                <span>{props.nome}</span>
                <span>{props.snome}</span>
            </div>
            <div className="flex gap-5">
                <Pai />
                <Pai />
                <Pai />
            </div>

        </div>
    )
}