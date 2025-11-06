import React from 'react';

function Registration() {
    return (
        <div>
            <h2>Register</h2>
            <form>
                Name<input type="text" placeholder="Name" required /><br />
                Email<input type="email" placeholder="Email" required /><br />
                Password<input type="password" placeholder="Password" required /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;