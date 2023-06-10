import React from 'react';
import Layout from './Layout'
import emailjs from 'emailjs-com';

const Quote = () => {

  const sendEmail = async(e) => {
    e.preventDefault();
    const btn = document.getElementById('button');
   btn.value='Sending...';
   await emailjs.sendForm('gmail', 'technoid', e.target, 'SDCirC6Vq-c14Z7mu')
      .then((result) => {
      alert('Message Sent !!!!');
      btn.value='Send'
        // console.log(result.text);
        e.target.reset();
      }, (error) => {

        console.log(error.text);
      });
  };
  return (
    <Layout>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" id="name"/>
        <label>Email</label>
        <input type="email" name="email" id="email" />
        <label>Mobile</label>
        <input type="number" name="mobile" id="mobile"/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" id="button"/>
      </form>
    </Layout>
  )
}

export default Quote