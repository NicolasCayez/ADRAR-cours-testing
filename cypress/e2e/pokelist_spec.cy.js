describe(`PokeListe spec`, () => {

  it(`Chargement Pokelist`, () => {
    cy.visit(`localhost:5173/pokelist.html`)
  });
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/pokelist.html");
    // Visite de l'URL avant chaque test
  });

  it(`La div PokeListe doit exister`, () => {
    cy.get("#pokeListe");
  });

  it(`La réponse de l'api est 200`, () => {
    // cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
    //   //Expecting the response status code to be 200
    //   expect(response.status).to.eq(200)
    // })
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon')
    .its('status').should('equal', 200);
  });

  it('Devrait mesurer le temps de réponse de l API (inf à 2000ms)', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const startTime = performance.now(); // Démarre le chrono
    cy.request('GET', url).then((response) => {
        const endTime = performance.now(); // Arrête le chronom
        const duration = endTime - startTime; // Calcule la durée
        expect(response.status).to.eq(200); // Vérifie que le statut est 200
        expect(duration).to.be.lessThan(2000); // Vérifie que le temps de réponse est inférieur à 2000 ms
    });
  });
  
  it(`Devrait vérifier que bulbasaur est bien le premier affiché`, () => {
    cy.get("#pokeListe").children().eq(0).should("have.text", 'bulbasaur');
  });
  
  it(`Devrait vérifier que la réponse a bien les champs name et url`, () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
      console.log(response);
      // expect(response.name, response.url);
      expect(response.body).to.have.property('results');// vérif présence results
      expect(response.body.results[0]).to.have.all.keys('name', 'url');//v&rif des clés du premier pokemon
    })
  });

  it(`Devrait afficher un message d'erreur si l'api échoue`, () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { statusCode: 500 }).as('getPokemonError');
  })
});
