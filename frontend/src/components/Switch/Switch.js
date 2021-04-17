function Switch({value, onChange}) {
    return (
        <>
            <input
                id="idOrder" type="checkbox" name="order"
                aria-label="Ordenar movimientos descendentemente?" aria-required="false"
                checked={value} onChange={onChange}/>
            <label htmlFor="idOrder">
                {"Ordenar movimientos descendentemente?"}
            </label>
        </>
    );
}

export default Switch;