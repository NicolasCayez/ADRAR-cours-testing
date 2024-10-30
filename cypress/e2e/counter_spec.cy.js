describe(`Counter spec`, () => {
  
  it(`Chargement de la page`, () => {
    cy.visit(`localhost:5173`)
  })
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    // Visite de l'URL avant chaque test
  });

  it(`Le bouton initialisé à "count is 0"`, () => {
    let counter = cy.get("#counter")
    counter.contains("count is 0")
  })

  it(`1 Clic sur le bouton affiche bien "count is 1"`, () => {
    let counter = cy.get("#counter")
    counter.contains("count is 0")
    counter.click().contains("count is 1")
  })

  it(`2 Clics sur le bouton affiche bien "count is 2"`, () => {
    let counter = cy.get("#counter")
    counter.contains("count is 0")
    counter.click().click().contains("count is 2")
  })

  it(`Le parent du logo vite est bien un lien`, () => {
    let logoVite = cy.get(".logo").eq(0)
    logoVite.parents("a").should("have.attr", "href", "https://vite.dev");
  })

  it(`Le parent du logo Js est bien un lien`, () => {
    let logoJs = cy.get(".logo.vanilla").eq(0)
    logoJs.parents("a").should("have.attr", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
  })
  
  it(`Le message invitant à cliquer sur le lien Vite est présent`, () => {
    cy.get(".read-the-docs")
  })

  it(`Le body est bien en display flex`, () => {
    cy.get("body").should('have.css', 'display', 'flex')
  })
})
