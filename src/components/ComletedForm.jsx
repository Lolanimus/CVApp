import "../styles/CompletedForm.css";

function CompletedForm({ setSubmitted, form }) {
    const general = form.general;
    const education = form.education;
    const practical = form.practical;
    return (
        <div id="completedForm">
            <div id="general">
                <div>
                    <p>First Name: {general.firstName}</p>
                    <p>Last Name: {general.lastName}</p>
                </div>
                <div>
                    <p>Email: {general.email}</p>
                    <p>Phone: {general.phone}</p>
                </div>
            </div>
            <div id="education">
                <div>
                    <p>School: {education.school}</p>
                    <p>Title of Study: {education.titleOfStudy}</p>
                </div>
                <div>
                    <p>Start Date: {education.startDate}</p>
                    <p>End Date: {education.endDate}</p>
                </div>
            </div>
            <div id="company">
                <div>
                    <p>Company: {practical.company}</p>
                    <p>Position Title: {practical.position}</p>
                </div>
                <div>
                    Responsobilities:
                    <textarea>{practical.responsobilities}</textarea>
                </div>
                <div>
                    <p>Start Date: {education.startDate}</p>
                    <p>End Date: {education.endDate}</p>
                </div>
            </div>
            <button id="edit" onClick={() => {setSubmitted(false)}}>Edit</button>
        </div>
    )
}

export default CompletedForm;