import Avo from '@/components/comunicacao/direta/Avo'

export default function PaginaDireta() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-5xl font-black mb-10'>Comunicação direta entre componentes</h1>
            <Avo nome='Sebatião' snome='Leite' />
            <Avo nome='Antonio' snome='Leite' />
        </div>
    )
}