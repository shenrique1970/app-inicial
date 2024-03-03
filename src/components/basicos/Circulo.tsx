interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps){
    console.log(props)
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-red-400 rounded-full
            text-3xl
            ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}
