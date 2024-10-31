describe(`PokeListe spec`, () => {

  it(`Chargement Pokelist`, () => {
    cy.visit(`localhost:5173/pokelist.html`)
  })
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/pokelist.html");
    // Visite de l'URL avant chaque test
  });

  it(`La div PokeListe doit exister`, () => {
    cy.get("#pokeListe")
  })

  it(`La réponse de l'api est 200`, () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
      //Expecting the response status code to be 200
      expect(response.status).to.eq(200)
    })
  })

  it(`Devrait mesurer le temps de réponse de l'api (<2000ms)`, () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
      //Expecting the response status code to be 200
      console.log(response)
      expect(response.duration).to.lessThan(2000)
    })
  })
  
  it(`Devrait vérifier que bulbasaur est bien le premier affiché`, () => {
    cy.get("#pokeListe").children().eq(0).should("have.text", 'bulbasaur')
  })
  
  it(`Devrait vérifier que la réponse a bien les champs name et url`, () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
      console.log(response)
      expect(response.name, response.url)
    })
  })

  it(`Devrait afficher un message d'erreur si l'api échoue`, () => {
    // cy.request('GET', 'https://pokeapi.co/api/v2/pokemon2').then((response) =>{
    //   console.log(response)
    // })
  })
})
