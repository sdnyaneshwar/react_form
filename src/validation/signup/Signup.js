import React from 'react'

const Signup = () => {
    return (
        <div>
            <div>
                <input type='text' placeholder='FirstName' />
            </div>
            <div>
                <input type='text' placeholder='LastName' />
            </div>
            <div>
                <input type='text' placeholder='Username' />
            </div>
            <div>
                <input type='text' placeholder='Email' />
            </div>
            <div>
                <input type='text' placeholder='Password' />
            </div>

            <div>
                <input type='text' placeholder='Phone_No' />
            </div>

            <div>
                <input type='text' placeholder='Pan_NO' />
            </div>

            <div>
                <input type='text' placeholder='Adhar_No' />
            </div>
            <div>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

            <div>
                First Name, Last Name, Username, E-mail, password (show/hide), PhoneNo. (country code ____ number), country (dropdown), city (dropdown), Pan No. & Aadhar No.
            </div>
        </div>
    )
}

export default Signup