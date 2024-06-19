function TextInput({ keyValue, name, handleTextInput, value }) {
    return (
        <>
            <label htmlFor={keyValue}>{name}: </label>
            <input
                type="text"
                name={keyValue}
                id={keyValue}
                value={value}
                onChange={(e) => handleTextInput(keyValue, e.target.value)}
                required={true}
            />
        </>
    )
}

export default TextInput;