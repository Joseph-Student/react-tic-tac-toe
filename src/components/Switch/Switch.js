
function Switch(props) {
    return (
        <>
            <input
                id="idOrder" type="checkbox" name="order"
                aria-label="Ordenar movimientos descendentemente?" aria-required="false"
                checked={props.value} onChange={props.onChange}/>
            <label htmlFor="idOrder">
                {"Ordenar movimientos descendentemente?"}
            </label>
        </>
    );
}

export default Switch;