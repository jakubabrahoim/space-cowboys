import { useState } from 'react';

import { IconContext } from "react-icons";
import { IoIosRocket } from "react-icons/io";

function Contact() {

    type FormField = {firstName: string, lastName: string}
    let [formValidation, setFormValidation] = useState<FormField>({firstName: 'valid', lastName: 'valid'});
    let [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    
    function submitForm(event: any): void {
        event.preventDefault();
        
        let firstName: string = event.target.firstName.value;
        let lastName: string = event.target.lastName.value;

        let onlyLettersRegex: RegExp = /[a-zA-Z]/s;
        let firstNameCheck: boolean = onlyLettersRegex.test(firstName);       
        let lastNameCheck: boolean = onlyLettersRegex.test(lastName);

        if(firstNameCheck === false) {
            setFormValidation({...formValidation, firstName: 'invalid'});
            return;
        } else {
            setFormValidation({...formValidation, firstName: 'valid'});
        }

        if(lastNameCheck === false) {
            setFormValidation({...formValidation, lastName: 'invalid'});
            return;
        } else {
            setFormValidation({...formValidation, lastName: 'valid'});
        }

        // Form data ready for sending to server
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let formData: any = {
            firstName: firstName,
            lastName: lastName,
            email: event.target.email.value,
            message: event.target.message.value
        }

        setFormSubmitted(true);
    }
    
    return (
        <section className='bg-gray-300 h-screen'>
            <div className='flex flex-col items-center h-9/10'>
                <h2 className='text-3xl font-bold text-black mt-12'>SAY HELLO</h2>
                <p className='text-gray-700 text-center mt-4'>
                    Got some questions about us? Wanna do business with us? <br />
                    Or do you just want to send us your latest cat-content - there you go:
                </p>

                <form className='grid grid-cols-2 items-center justify-items-center mt-12' onSubmit={submitForm}>
                    <div className='flex flex-col mx-4'>
                        <span id='firstNameLabel' hidden>First Name</span>
                        <span className='text-red-500 text-xs mb-2' hidden={formValidation.firstName === 'valid'}>First Name can contain only letters.</span>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            aria-labelledby='firstNameLabel'
                            className={
                                `text-sm mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100 
                                ${formValidation.firstName === 'invalid' && 'text-red-500 border-red-500'}`
                            }
                            required
                        />
                        <span id='lastNameLabel' hidden>Last Name</span>
                        <span className='text-red-500 text-xs mb-2' hidden={formValidation.lastName === 'valid'}>First Name can contain only letters.</span>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            aria-labelledby='lastNameLabel'
                            className={
                                `text-sm mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100 
                                ${formValidation.lastName === 'invalid' && 'text-red-500 border-red-500'}`
                            }
                            required
                        />
                        <span id='emailLabel' hidden>E-Mail</span>
                        <input
                            type='email'
                            name='email'
                            placeholder='E-Mail'
                            aria-labelledby='emailLabel'
                            className='text-sm mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100'
                            required
                        />
                    </div>

                    <textarea
                        name='message'
                        placeholder='Your Message'
                        className='text-sm mb-4 rounded-md h-[152px] w-64 pl-2 pt-2 outline outline-1 outline-gray-100 border border-gray-100'
                        required
                    />

                    <div className='col-span-2 mt-12'>
                        <input
                            type='submit'
                            value='SEND THAT MAIL'
                            className='font-bold text-black text-lg bg-yellow-300 rounded-md px-16 py-4 hover:cursor-pointer'
                        /> <br/>
                        <span className='text-xs font-bold text-green-500 px-16' hidden={formSubmitted === false}>Form submitted successfuly</span>
                    </div>

                </form>
            </div>

            <div className='h-1/10 w-full bg-gray-800 flex flex-col items-center justify-center'>
                <p className='text-gray-500 mb-2'>Copyright © 2015</p>
                <div className='text-gray-500 font-bold flex flex-row items-center'>
                    SPACE &nbsp;
                    <IconContext.Provider value={{ className: 'text-gray-500 h-8 w-8' }}>
                        <IoIosRocket />
                    </IconContext.Provider> &nbsp;
                    COWBOYS
                </div>
            </div>
        </section>
    )
}

export default Contact;