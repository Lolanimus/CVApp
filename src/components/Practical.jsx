import DatePeriod from "./DatePeriod";
import TextInput from "./TextInput";
import Responsobilities from "./Responsobilities";

function Practical({ practical, setPractical, handleTextInputPractice }) {
    function handleTextInput(keyValue, value) {
        handleTextInputPractice(practical, setPractical, keyValue, value);
    }
    return (
        <fieldset>
            <legend>Practical Experience: </legend>
            <div>
                <TextInput keyValue={"company"} name={"Company"} value={practical.company} handleTextInput={handleTextInput} />
                <TextInput keyValue={"position"} name={"Position Title"} value={practical.position} handleTextInput={handleTextInput}/>
            </div>
            <Responsobilities practical={practical} setPractical={setPractical} value={practical.responsobilities} />
            <DatePeriod state={practical} setState={setPractical} />
        </fieldset>
    )
}

export default Practical;