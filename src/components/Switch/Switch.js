
function Switch(props) {
    return (
        <label htmlFor="idOrder">
            <input
                id="idOrder" type="checkbox" name="order"
                aria-label="Ordenar movimientos descendentemente?" aria-required="false"
                checked={props.value} onChange={props.onChange}/>
            {"Ordenar movimientos descendentemente?"}
        </label>
    );
}

export default Switch;