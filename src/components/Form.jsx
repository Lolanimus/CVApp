import General from "./General.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import { useState, useEffect } from "react";
import "../styles/Form.css";

function Form({form, setForm, setSubmitted}) {
    function handleTextInput(state, setState, keyValue, value) {
        setState({ ...state, [keyValue]: value });
    }
    const [practical, setPractical] = useState({...form.practical});
    const [education, setEducation] = useState({...form.education});
    const [general, setGeneral] = useState({...form.general});
    useEffect(() => {
        setForm({ ...form, general: { ...general }, education: {...education}, practical: { ...practical } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [general, education, practical]);
    const onSubmitForm = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    return (
        <div id="form">
            <form id="cvForm" onSubmit={onSubmitForm}>
                <General general={general} setGeneral={setGeneral} />
                <Education education={education} setEducation={setEducation} handleTextInputEducation={handleTextInput} />
                <Practical practical={practical} setPractical={setPractical} handleTextInputPractice={handleTextInput} />
            </form>
            <button
                id="submitBtn"
                form="cvForm"
            >
                Submit
            </button>
        </div>
    )
}

export default Form;