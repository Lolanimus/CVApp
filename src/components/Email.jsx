function Email({general, setGeneral}) {
    return (
        <>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                name="email"
                id="email"
                value={general.email}
                onChange={(e) => setGeneral({ ...general, email: e.target.value })}
                required={true}
            />
        </>
    )
}

export default Email;