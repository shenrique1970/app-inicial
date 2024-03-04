export default function ImagemAleatoria() {

    let pesquisa: string = ''

    const url = 'https://source.unsplash.com/featured/300x300?'

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function remderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md p-2
            `} onClick={() => {
                    pesquisa = valor
                    console.log(urlImagem())
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {remderizarBotao('abstract')}
            {remderizarBotao('city')}
            {remderizarBotao('person')}
        </div>
    )
}