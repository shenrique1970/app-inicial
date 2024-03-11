interface BotoesProps {
    mais: () => void     //(valor: number)
    menos: () => void     //(valor: number)
}

// onClick={() => props.menos(10)}
// onClick={() => props.mais(7)}
export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex justify-between py-8 gap-2">
            <button className="botao flex-1" onClick={props.menos}> 
                Dec - 
            </button>   
            <button className="botao flex-1"  onClick={props.mais}>
                Inc +
            </button>          
        </div>
    )
}