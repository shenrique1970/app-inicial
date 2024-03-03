import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className={`flex justify-around items-center h-screen`}>
            <Circulo texto="Ciculo #1" />
            <Circulo texto="Ciculo #2" quasePerfeito />
            <Circulo texto="Ciculo #3" />
        </div>
    )
}   