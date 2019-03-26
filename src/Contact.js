
import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Contact</h1>
            <form action="https://formspree.io/jaredpotter1@gmail.com" method="POST">
              <label for="name">Name:</label>
              <input type="text" name="name" placeholder="Name..."/>
              <label for="email">Email:</label>
              <input type="email" name="email" placeholder="Email..."/>
              <textarea name="message" placeholder="Message..."></textarea>
              <input type="submit" value="Send"/>
              <img src="https://www.kroger.com/product/images/medium/front/0004400003202"/>
            </form>
          </header>
        </div>
      );
    }
  }
  
  export default Contact;