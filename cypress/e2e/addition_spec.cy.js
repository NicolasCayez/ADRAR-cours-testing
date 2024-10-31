describe(`Add Number spec`, () => {

  it(`Chargement Adding Numbers`, () => {
    cy.visit(`localhost:5173/addition.html`)
  })
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/addition.html");
    // Visite de l'URL avant chaque test
  });

  it(`L'app doit additionner 2 nombres`, () => {
    // Input test entries
    cy.get("#firstNumber").type(1);
    cy.get("#secondNumber").type(1);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("2");
  })

  it(`L'app doit additionner 2 nombres positifs`, () => {
    // Input test entries
    cy.get("#firstNumber").type(4);
    cy.get("#secondNumber").type(1);
        // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("5");
  })

  it(`L'app doit additionner 2 nombres négatifs`, () => {
    // Input test entries
    cy.get("#firstNumber").type(-4);
    cy.get("#secondNumber").type(-3);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("-7");
  })

  it(`L'app doit gérer correctement les nombres décimaux`, () => {
    // Input test entries
    cy.get("#firstNumber").type(1.2);
    cy.get("#secondNumber").type(2.3);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("3.5");
  })

  it(`L'app doit gérer l'addition avec un 0`, () => {
    // Input test entries
    cy.get("#firstNumber").type(12);
    cy.get("#secondNumber").type(0);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("12");
  })

  it(`L'app doit gérer l'addition avec deux 0`, () => {
    // Input test entries
    cy.get("#firstNumber").type(0);
    cy.get("#secondNumber").type(0);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("0");
  })

  it(`L'app doit gérér des grands nombres positifs`, () => {
    // Input test entries
    cy.get("#firstNumber").type(13434313577443);
    cy.get("#secondNumber").type(1);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("13434313577444");
  })

  it(`L'app doit gérér des grands nombres négatifs`, () => {
    // Input test entries
    cy.get("#firstNumber").type(-13434313577443);
    cy.get("#secondNumber").type(-1);
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("-13434313577444");
  })

  it(`L'app doit afficher un message d'erreur si on ne saisis rien`, () => {
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("");
  })

  it(`L'app doit afficher un message d'erreur si on saisis du texte`, () => {
    // Input test entries
    cy.get("#firstNumber").type("toto");
    cy.get("#secondNumber").type("tata");
    // Button click
    cy.get("#calculBtn").click()
    // Expected result
    cy.get("#result").contains("");
  })
})
