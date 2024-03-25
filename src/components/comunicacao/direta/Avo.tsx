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
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Avô</span>
                <span>{props.nome}</span>
                <span>{props.snome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="Sebastião" snome={props.snome}/>
                <Pai nome="Mauro" snome={props.snome}/>
                <Pai nome="Luis" snome={props.snome} />
            </div>

        </div>
    )
}