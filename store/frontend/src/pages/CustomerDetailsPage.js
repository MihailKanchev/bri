import React from 'react'
import { useState } from 'react';

const CustomerDetailsPage = () => {
    const [fname, setFname, lname, setLname, phone, setPhone, email, setEmail] = useState("");
    return(
        <form>
        <label>Име:
            <input
            type="text" 
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            />
        </label>
        <label>Фамилия:
            <input
            type="text" 
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            />
        </label>
        <label>Телефон:
            <input
            type="text" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </label>
        <label>Имейл:
            <input
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        </form>
    );
}
export default CustomerDetailsPage