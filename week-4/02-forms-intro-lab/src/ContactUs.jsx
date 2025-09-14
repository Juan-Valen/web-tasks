import { useState } from "react";

function ContactUs() {
    const onSubmit = e => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date()
        }

        console.log(contactUsInformation);
        // Reset the form state.
        setName('');;
        setEmail('');;
        setPhone('');;
        setPhoneType('');;
        setComments('');;
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [comments, setComments] = useState('');
    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input id='phone' type='text' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <select name='phoneType' onChange={e => setPhoneType(e.target.value)} value={phoneType} >
                    <option value='' disabled></option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <textarea id='comments' name='comments' onChange={e => setComments(e.target.value)} value={comments} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
