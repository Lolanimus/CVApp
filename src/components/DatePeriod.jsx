function DatePeriod({ state, setState }) {
    return (
        <div>
            <label htmlFor="start">Start Date: </label>
            <input
                type="date"
                name="start"
                id="start"
                value={state.startDate}
                onChange={(e) => setState({ ...state, startDate: e.target.value })}
                required={true}
            />
            <label htmlFor="end">End Date: </label>
            <input
                type="date"
                name="end"
                id="end"
                value={state.endDate}
                onChange={(e) => setState({ ...state, endDate: e.target.value })}
                required={true}
            />
        </div>
    )
}

export default DatePeriod;