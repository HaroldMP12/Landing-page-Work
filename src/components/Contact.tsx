import React, { useState } from 'react';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: ' ',
    subject: ' ',
    email: ' ',
    message: ' ',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formValues);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact_form flex flex-col md:flex-row justify-center items-center my-6 md:my-9 w-full bg-amber-200">
      <div className="form_wrapper">
        <h1 className='text-3xl mt-14 underline'>Contact Us.</h1>
        <div className="icons_wrapper flex flex-row items-center mt-4">
          <BsFacebook className='text-blue-800 m-2 ml-8' />
          <BsInstagram className='text-rose-600 m-2' />
          <BsWhatsapp className='text-green-600 m-2' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange} required />
          </div>
          <div className="mt-6">
            <label htmlFor="subject">Subject: </label>
            <input type="text" name="subject" id="subject" value={formValues.subject} onChange={handleChange} required />
          </div>
          <div className="mt-6">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} required />
          </div>
          <div className="mt-6">
            <label htmlFor="message">Message: </label>
            <textarea name="message" id="message" value={formValues.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="bg-white rounded-md text-black p-2 mt-5 border border-black hover:bg-amber-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;