import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5" id="contact">
            <h1 className="text-center mb-4">Contactez-nous</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Adresse</h3>
                    <p>Talence 33400</p>
                    <h3>Téléphone</h3>
                    <p>+33 748153990</p>
                    <h3>Email</h3>
                    <p>contact@skyline.com</p>
                    <h3>Suivez-nous</h3>
                    <p>LinkedIn, Twitter, Facebook</p>
                </div>
                <div className="col-md-6">
                    <h3>Laissez un message</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
