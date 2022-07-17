import React from "react";

function Contact () {
    return (
        <div>
            <h1>Contact me by filling the form out below: </h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea name="message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;


//improvements:
// handle form may be more useful with handle submit?