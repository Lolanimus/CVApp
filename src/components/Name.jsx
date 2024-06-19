function Name({ isFirstName, general, setGeneral }) {
    return (
        isFirstName === 1 ? (
        <>
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={general.firstName}
                onChange={(e) => setGeneral({ ...general, firstName: e.target.value })} 
                required={true}    
            />
        </>  
        ) : (
        <>
            <label htmlFor="lastName">Last Name: </label>
            <input
                type="text"
                name="firstName"
                id="lastName"
                value={general.lastName}
                onChange={(e) => setGeneral({ ...general, lastName: e.target.value })} 
                required={true}
            />
        </>
        )
    )
}

export default Name;