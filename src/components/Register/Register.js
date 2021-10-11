import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>

                <h2>Register: Create Account</h2>
                <form onSubmit="">

                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>

                <p>Already have an Account?  <Link to="/login">Login</Link></p> <br />

                <div>--------------------or----------------------</div> <br />

                <button className="btn-regular">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;