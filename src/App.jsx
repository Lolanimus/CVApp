import CompletedForm from './components/ComletedForm.jsx';
import Form from './components/Form.jsx'
import { useState } from 'react' 

function App() {
    const [form, setForm] = useState({
        general: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
        education: {
            school: "",
            titleOfStudy: "",
            startDate: "",
            endDate: "",
        },
        practical: {
            company: "",
            position: "",
            responsobilities: "",
            startDate: "",
            endDate: "",
        }
    });
    const [submitted, setSubmitted] = useState(false);
    console.log(form);
    
    return !submitted ? (
        <Form form={form} setForm={setForm} setSubmitted={setSubmitted} />
    ) : (
        <CompletedForm setSubmitted={setSubmitted} form={form} />
    )
}

export default App;