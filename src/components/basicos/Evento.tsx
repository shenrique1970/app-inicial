export default function Evento() {
    let contador = 0

    function incremewntar() {
            console.log(contador++)
    }
    return (
        <button className={`
            flex
            h-72 w-72
            bg-green-600
            text-4xl
            justify-center
            items-center
        `} onClick={incremewntar}>
            Evento
        </button>
    )
}