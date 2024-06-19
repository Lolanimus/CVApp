function Phone({ general, setGeneral }) {
    return (
        <>
            <label htmlFor="phone">Phone: </label>
            <input
                type="tel"
                name="phone"
                id="phone"
                value={general.phone}
                onChange={(e) => setGeneral({ ...general, phone: e.target.value })}
                required={true}
            />
        </>
    )
}

export default Phone;