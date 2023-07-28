import React from "react";
import '../Asset/Style/Main.css';
import '../Asset/Style/Contact.css';
const Contact = () => {
    return (
        <div className="contact" transition-style="in:circle:top-right">
            <section class="section-contact section container" id="contact">
                <div class="contact-information">
                    <h3>JEaLiFe</h3>
                    <h2 class="section-about-title"> Contactez moi</h2>
                    <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg"
                        alt="Jean Guylane Memiaghe" />

                        <div className="skills socials ">
                        <a href="mailto:jealife.pictures@gmail.com"><box-icon color='#808080' size='md' name='envelope'></box-icon></a>
                        <a href="http://instagram.com/jealife_pictures"><box-icon color='#808080' size='md' type='logo' name='instagram-alt' ></box-icon></a>
                        <a href="https://github.com/jealife"><box-icon color='#808080' size='md' type='logo' name='github'></box-icon></a>
            
                    </div>

                </div>

                <form action="https://submit-form.com/Q6PX1HC6">
                    <div class="name">
                        <label for="name">Nom</label>
                        <input type="text" id="name" name="name" aria-required="true" placeholder="Nom" required="" />
                    </div>
                    <div class="email">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" aria-required="true" placeholder="Email" required="" />
                    </div>
                    <div class="message">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" aria-required="true" placeholder="Message"
                            required=""></textarea>
                    </div>
                    <div class="btn-form">

                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact;