import React, { useState } from 'react';

function NewClient() {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [ownerFirstName, setOwnerFirstName] = useState('');
    const [ownerLastName, setOwnerLastName] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            companyName: companyName,
            email: email,
            ownerFirstName: ownerFirstName,
            ownerLastName: ownerLastName,
            ownerPhone: ownerPhone
        };

        console.log(formData);

        try {
            const response = await fetch('http://127.0.0.1:5000/add_client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Client added successfully');
            } else {
                console.error('Error adding client');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Add Client</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="ownerFirstName">Owner First Name:</label>
                <input type="text" id="ownerFirstName" name="ownerFirstName" value={ownerFirstName} onChange={(e) => setOwnerFirstName(e.target.value)} required />

                <label htmlFor="ownerLastName">Owner Last Name:</label>
                <input type="text" id="ownerLastName" name="ownerLastName" value={ownerLastName} onChange={(e) => setOwnerLastName(e.target.value)} required />

                <label htmlFor="ownerPhone">Owner Phone:</label>
                <input type="tel" id="ownerPhone" name="ownerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} />

                <button type="submit">Add Client</button>

            </form>

        </div>
    );
}

export default NewClient;
