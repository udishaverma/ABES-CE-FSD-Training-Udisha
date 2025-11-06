import React from 'react';
import { Link } from 'react-router-dom';

function Book() {
    return (
        <div>
            <h1>Welcome to Book Portal</h1>
            <p>Please choose an option:</p>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Book;