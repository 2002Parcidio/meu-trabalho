import React from 'react';
import emailjs from 'emailjs-com';
import { styled } from '@mui/material/styles';
import Fotografias  from './button';
export default function ContactUs() {
    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_n2brc0g', e.target, 'kpI_-XyAKb6kTekAN')
            .then((result) => {
                alert('Mensagen enviada com sucesso! :)');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();

    }
    return (
        <div>
            <div className="container">
                <form onSubmit={enviarEmail}>
                    <div className='row pt-5 mx-auto'>
                        <div className='col-lg-8 col-sm-12 form-group mx-auto'>
                            <label>Nome</label>
                            <input type="text" autoFocus className='form-control' required placeholder='Nome' name="name"></input>
                        </div>
                        <div className='col-lg-8 col-sm-12 form-group pt-1 mx-auto'>
                            <label>Email</label>
                            <input type="email" className='form-control' required placeholder='Seu email' name="email"></input>
                        </div>
                        <div className='col-lg-8 col-sm-12 form-group  pt-1 mx-auto'>
                            <label>Mensagen</label>
                            <textarea className='form-control' id="" cols="30" rows="8" required placeholder='Sua mensagen' name="mesagen"></textarea>
                        </div>
                            
                        <div className='col-lg-8 col-sm-12 pt-3 mx-auto'>
                        <Fotografias /><input type="submit" className='btn btn-info' value="Enviar mensagen" name="email"></input>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}
