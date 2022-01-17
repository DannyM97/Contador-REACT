const Contador = () => {

    const [contador, setContador] = React.useState(0);

    const aumentar = () => setContador(contador + 1)
    const disminuir = () => setContador(contador - 1)

    return (
        <div>
            <h1 className={contador < 0 ? "menor" : "mayor"} >Contador: {contador} </h1>
            <hr /> 

            <button className={contador <= 0 ? "neutro" : "mayor"} onClick = {aumentar} >Aumentar</button>
            <button className={contador >= 0 ? "neutro" : "menor"} onClick = {disminuir} >Disminuir</button>

        </div>

    );

};