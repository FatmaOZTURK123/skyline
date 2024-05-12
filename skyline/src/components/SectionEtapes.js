import React from 'react';

const SectionEtapes = () => {
  return (
    <section className="page-section bg-dark text-white" id="etapes">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Étapes</h2>
          <h3 className="section-subheading">Suivez ces étapes simples pour choisir votre voiture idéale.</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-car fa-stack-2x text-primary"></i>
              <i className="fas fa-check fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Faites votre choix</h4>
            <p>Découvrez notre diversité de modèles et sélectionnez celui qui vous convient.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-phone fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Appelez-nous</h4>
            <p>Un conseiller en voiture vous aidera à finaliser votre achat.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-shield-alt fa-stack-2x text-primary"></i>
              <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Sécurité garantie</h4>
            <p>Votre sécurité est notre priorité. Profitez d'un processus d'achat sécurisé.</p>
          </div>
          <div className="mt-4">
              <a className="btn btn-primary btn-xl" href="#carTable">Découvrez nos voitures</a></div>
        </div>
      </div>
    </section>
  );
};

export default SectionEtapes;
