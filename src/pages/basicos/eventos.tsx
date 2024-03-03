import Evento from "@/components/basicos/Evento";

export default function paginaEventos() {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen gap-5 bg-purple-400">
            <Evento />
            <Evento />
            <Evento />
            
        </div>
    )
}