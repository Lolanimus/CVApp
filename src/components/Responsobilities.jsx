function Responsobilities({ practical, setPractical, value }) {
    return (
        <>
            <label htmlFor="resonsobilities">Responsobilities: </label>
            <textarea
                name="responsobilities"
                id="responsobilities"
                value={value}
                onChange={(e) => setPractical({ ...practical, responsobilities: e.target.value })}
                required={true}
            ></textarea>
        </>
    )
}

export default Responsobilities;