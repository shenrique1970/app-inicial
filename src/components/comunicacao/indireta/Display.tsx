interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className={`
        flex 
        justify-center
        items-center 
        bg-zinc-800 
        rounded-md 
        text-5xl 
        text-white 
        font-black 
        p-5
        flex-1
        `}>
            <div className="p-8">
               {props.valor} 
            </div>
            
        </div>
    )
}