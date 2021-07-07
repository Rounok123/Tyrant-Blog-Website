import React from 'react';
import './style.css';

const Contact  = props => {
    return (
        <div id="contact">
        <h1>Reach Us Any Time</h1>
        <h3 className="s">Contact details:+91 7908883220</h3>
        <h4 className="g">Email: tyrant@company.com</h4>
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
                <input type="text" name="" id="conpassword" placeholder="Write your Issue here"/>
                <small></small>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        </div>
    );
}

export default Contact;