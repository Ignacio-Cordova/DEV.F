

const Select = (props) => {
    return (
        <select>
            {props.opciones.map((elemento, index) => (
                <option key={index} value={elemento}>
                    {elemento}
                </option>
            ))}
        </select>
    );
}
export default Select;