type propsContador = {
    text: number;
}

export function Contador (props: propsContador){
    return(
    <p>{props.text}</p>
    );
}