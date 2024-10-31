describe(`addUser spec`, () => {

  it(`Chargement addUser`, () => {
    cy.visit(`https://testing.adrardev.fr/addUser`)
  });
  beforeEach(() => {
    cy.visit("https://testing.adrardev.fr/addUser");
    // Visite de l'URL avant chaque test
  });

  it(`Tous les inputs du formulaire sont présents et ont les bons attributs name`, () => {
    cy.get("form").children('input').eq(0).should('have.attr', 'name', 'nom');
    cy.get("form").children('input').eq(1).should('have.attr', 'name', 'prenom');
    cy.get("form").children('input').eq(2).should('have.attr', 'name', 'mail');
    cy.get("form").children('input').eq(3).should('have.attr', 'name', 'mdp');
  });

  it(`Le formulaire vérifie si tous les champs ont été remmplis (4 tests)`, () => {
    // cy.get("form").children('input').eq(0).type('Riri');
    cy.get("form").children('input').eq(1).type('Fifi');
    cy.get("form").children('input').eq(2).type('loulou@labandeapicsou.com');
    cy.get("form").children('input').eq(3).type('pathibulaire');
    cy.get("form").children('input').eq(4).click();
    cy.get("#msgzone").should('have.text', 'Veuillez remplir tous les champs du formulaire');

    cy.get("form").children('input').eq(0).type('Riri');
    // cy.get("form").children('input').eq(1).type('Fifi');
    cy.get("form").children('input').eq(2).type('loulou@labandeapicsou.com');
    cy.get("form").children('input').eq(3).type('pathibulaire');
    cy.get("form").children('input').eq(4).click();
    cy.get("#msgzone").should('have.text', 'Veuillez remplir tous les champs du formulaire');

    cy.get("form").children('input').eq(0).type('Riri');
    cy.get("form").children('input').eq(1).type('Fifi');
    // cy.get("form").children('input').eq(2).type('loulou@labandeapicsou.com');
    cy.get("form").children('input').eq(3).type('pathibulaire');
    cy.get("form").children('input').eq(4).click();
    cy.get("#msgzone").should('have.text', 'Veuillez remplir tous les champs du formulaire');

    cy.get("form").children('input').eq(0).type('Riri');
    cy.get("form").children('input').eq(1).type('Fifi');
    cy.get("form").children('input').eq(2).type('loulou@labandeapicsou.com');
    // cy.get("form").children('input').eq(3).type('pathibulaire');
    cy.get("form").children('input').eq(4).click();
    cy.get("#msgzone").should('have.text', 'Veuillez remplir tous les champs du formulaire');
  });

});
