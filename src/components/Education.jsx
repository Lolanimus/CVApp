import TextInput from "./TextInput";
import DatePeriod from "./DatePeriod";

function Education({education, setEducation, handleTextInputEducation}) {
    function handleTextInput(keyValue, value) {
        handleTextInputEducation(education, setEducation, keyValue, value)
    }
    return (
        <fieldset>
            <legend>Education Information: </legend>
            <div>
                <TextInput keyValue={'school'} name={"School"} value={education.school} handleTextInput={handleTextInput} />
                <TextInput keyValue={'titleOfStudy'} name={"Title of Study"} value={education.titleOfStudy} handleTextInput={handleTextInput} />
            </div>
            <DatePeriod state={education} setState={setEducation} />
        </fieldset>
    )
}

export default Education;