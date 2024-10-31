describe(`Counter spec`, () => {

  it(`Chargement Adding Numbers`, () => {
    cy.visit(`https://testing.adrardev.fr/addUser`)
  })
  
  beforeEach(() => {
    cy.visit("https://testing.adrardev.fr/addUser");
    // Visite de l'URL avant chaque test
  });

  // it(`La div PokeListe doit exister`, () => {
  //   cy.get("#pokeListe")
  // })

  // it(`La réponse de l'api est 200`, () => {
  //   cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
  //     //Expecting the response status code to be 200
  //     expect(response.status).to.eq(200)})
  // })

  // it(`Devrait mesurer le temps de réponse de l'api (<2000ms)`, () => {
  //   cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) =>{
  //     //Expecting the response status code to be 200
  //     console.log(response)
  //     expect(response.duration).to.lessThan(2000)})
  // })
})
