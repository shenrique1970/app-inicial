import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta texto="Quem descobril as Americas?" resposta="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI," />
            <Pergunta texto="Quantos dedos tem uma mão?" resposta="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,"/>
            <Pergunta texto="Quem foi Salomão?" resposta="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,"/>
            <Pergunta texto="Quem matou Jesus?" resposta="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,"/>
        </div>
    )
}