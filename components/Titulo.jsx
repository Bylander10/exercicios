export default function Titulo(props) {
    if (props.check) {
        return (
            <>
                <h1>{props.primario}</h1>
                <h2>{props.secundario}</h2>
            </>
        )
    }
    else {
        return (
            <>
                <p>{props.primario}</p>
                <p>{props.secundario}</p>
            </>
        )
    }
}
