import React, { useEffect, useState } from 'react';

function TableauVoitures() {

    /*useEffect(() => {
        fetch('http://localhost:3015/voitures') 
            .then(response => response.json())
            .then(data => setVoitures(data))
            .catch(error => console.error('Erreur dans la telechargement des voitures:', error));
    }, []); */

    const [voitures, setVoitures] = useState([
        { ID: 1, consommationParLitre: 4, kilometrage: 1 },
        { ID: 2, consommationParLitre: 1, kilometrage: 4 },
        { ID: 3, consommationParLitre: 2, kilometrage: 2 },
        { ID: 4, consommationParLitre: 2, kilometrage: 3 },
        { ID: 5, consommationParLitre: 2, kilometrage: 4 },
        { ID: 6, consommationParLitre: 2, kilometrage: 2},
    ]);
    const [voituresFiltrees, setVoituresFiltrees] = useState(voitures);
    const [filtreConsommation, setFiltreConsommation] = useState(false);
    const [filtreKilometrage, setFiltreKilometrage] = useState(false);
// on gere l etat avec useffect a chaque fois il y a un changement d etat . a chaque fois il ya un changement dans les valeur dans les dependances react reexecute ce code 
    useEffect(() => {
        if (filtreConsommation || filtreKilometrage) {
            if (filtreConsommation && filtreKilometrage) {
                setVoituresFiltrees(appliquerDeuxFiltres(voitures));
            } else {
                appliquerUnFiltre();
            }
        } else {
            setVoituresFiltrees(voitures); 
        }
    }, [filtreConsommation, filtreKilometrage, voitures]);

    function appliquerUnFiltre() {
        // on cree une copie des voitures en filtered data 
        let selectionTemporaire = [...voitures];
        //on utilise la fonction math.Min 
        if (filtreConsommation) {
            const consommationLaPlusBasse = Math.min(...selectionTemporaire.map(auto => auto.consommationParLitre));
            selectionTemporaire = selectionTemporaire.filter(auto => auto.consommationParLitre === consommationLaPlusBasse);
        }
    
        // Application du filtre de kilométrage si activé
        if (filtreKilometrage) {
            const kilométrageLePlusBas = Math.min(...selectionTemporaire.map(auto => auto.kilometrage));
            selectionTemporaire = selectionTemporaire.filter(auto => auto.kilometrage === kilométrageLePlusBas);
        }
        //le hook elle va remplir 
        setVoituresFiltrees(selectionTemporaire);
    }
    function appliquerDeuxFiltres(ensembleVoitures) {
        const minimumConsommation = Math.min(...ensembleVoitures.map(vehicule => vehicule.consommationParLitre));
        const minimumKilometrage = Math.min(...ensembleVoitures.map(vehicule => vehicule.kilometrage));
        
        let voituresOptimales = ensembleVoitures.filter(vehicule =>
            vehicule.consommationParLitre === minimumConsommation && vehicule.kilometrage === minimumKilometrage
        );
        
        if (voituresOptimales.length > 0) {
            return voituresOptimales;
        }
        
        let selectionProvisoire = ensembleVoitures.filter(vehicule =>
            vehicule.consommationParLitre === minimumConsommation || vehicule.kilometrage === minimumKilometrage
        );
        
        let voituresAmeliorees = augmenterPerformanceVoitures(selectionProvisoire, ensembleVoitures);
        let voituresFinales = exclureVoituresMoinsPerformantes(voituresAmeliorees);
        
        return voituresFinales;
    }
    
    function augmenterPerformanceVoitures(selectionCourante, toutesVoitures) {
        let ajoutsPotentiels = toutesVoitures.filter(vehiculeExterieur => {
            return selectionCourante.some(vehiculeInterieur => {
                const amelioreConso = vehiculeExterieur.consommationParLitre < vehiculeInterieur.consommationParLitre && vehiculeExterieur.kilometrage >= vehiculeInterieur.kilometrage;
                const amelioreKm = vehiculeExterieur.kilometrage < vehiculeInterieur.kilometrage && vehiculeExterieur.consommationParLitre >= vehiculeInterieur.consommationParLitre;
                return amelioreConso || amelioreKm;
            });
        });
    
        return Array.from(new Set([...selectionCourante, ...ajoutsPotentiels]));
    }
    
    function exclureVoituresMoinsPerformantes(selectionCourante) {
        return selectionCourante.filter(vehiculeEnTest => {
            const estSubalterne = selectionCourante.some(autreVehicule => {
                const pireConsoMemeKm = vehiculeEnTest.kilometrage === autreVehicule.kilometrage && vehiculeEnTest.consommationParLitre > autreVehicule.consommationParLitre;
                const pireKmMemeConso = vehiculeEnTest.consommationParLitre === autreVehicule.consommationParLitre && vehiculeEnTest.kilometrage > autreVehicule.kilometrage;
                const pireDansTout = vehiculeEnTest.consommationParLitre > autreVehicule.consommationParLitre && vehiculeEnTest.kilometrage > autreVehicule.kilometrage;
                return pireConsoMemeKm || pireKmMemeConso || pireDansTout;
            });
    
            return !estSubalterne;
        });
    }
    
    
    
    
    return (
        <section className="container mt-5">
            <h1 className="mb-4">Voitures disponibles</h1>
            <div className="d-flex justify-content-start mb-3">
                <div className="form-check me-4">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={filtreConsommation}
                        onChange={() => setFiltreConsommation(!filtreConsommation)}
                        id="consommationCheck"
                    />
                    <label className="form-check-label" htmlFor="consommationCheck">
                        Consommation
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={filtreKilometrage}
                        onChange={() => setFiltreKilometrage(!filtreKilometrage)}
                        id="kilometrageCheck"
                    />
                    <label className="form-check-label" htmlFor="kilometrageCheck">
                        Kilométrage
                    </label>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Consommation (L/100km)</th>
                        <th>Kilométrage</th>
                    </tr>
                </thead>
                <tbody>
                    {voituresFiltrees.map(voiture => (
                        <tr key={voiture.ID}>
                            <td>{voiture.ID}</td>
                            <td>{voiture.consommationParLitre}</td>
                            <td>{voiture.kilometrage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
    
}

export default TableauVoitures;
