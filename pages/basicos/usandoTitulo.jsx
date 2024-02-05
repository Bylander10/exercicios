import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                primario="Titulo massa"
                secundario="Subtitulo olha só"
                check={true}
            />
            <Titulo
                primario="Giga"
                secundario="can you feel mahaaar"
                check={false}
            />
        </div>
    )
}
