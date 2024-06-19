import Name from "./Name.jsx";
import Email from "./Email.jsx";
import Phone from "./Phone.jsx";

function General({general, setGeneral}) {
    return (
        <fieldset>
            <legend>General Information</legend>
            <div>
                <Name isFirstName={1} general={general} setGeneral={setGeneral} />
                <Name isFirstName={0} general={general} setGeneral={setGeneral} />
            </div>
            <div>
                <Email general={general} setGeneral={setGeneral} />
                <Phone general={general} setGeneral={setGeneral} />
            </div>
        </fieldset>
    )
}

export default General;