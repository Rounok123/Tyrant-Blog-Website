import React from 'react';
import './style.css';

const Contact  = props => {
    return (
        <div id="contact">
        <h1>Reach Us any Time</h1>
        <form action="/blogs" onsubmit="return validate()" id="form" autocomplete="off">
            <div class="form-control">
                <input type="text" autocomplete="off" name="names" id="username" placeholder="Name"/>
                <small></small>
            </div>
            <div class="form-control">
                <input type="email" name="emails" id="email" placeholder="Email"/> 
                <small></small>
            </div>
            <div class="form-control">
                <input type="number" name="phones" id="number" placeholder="Phone no."/>
                <small></small>
            </div>
            <div class="form-control">
                <input type="text" name="passwords" id="password" placeholder="Password"/>
                <small></small>
            </div>
            <div class="form-control">
                <input type="text" name="" id="conpassword" placeholder="Confirm password"/>
                <small></small>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        </div>
    );
}

export default Contact;