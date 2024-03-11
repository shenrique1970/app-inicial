import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5-xl mb-10">Comunicação direta</h1>
            <Avo nome="Sebastião " sobrenome="Ribeiro Leite" />
            <Avo nome="Antomio " sobrenome="Ribeiro Leite" />
        </div>
    )
}