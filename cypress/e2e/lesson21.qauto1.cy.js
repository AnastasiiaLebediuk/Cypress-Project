// import { HomePage } from "../Helpers/PageObjects/HomePage";
// import { GaragePage } from "../Helpers/PageObjects/GaragePage";
// import { FuelExpenses } from "../Helpers/PageObjects/FuelExpenses"

import { HomePage } from "../Helpers/PageObjects/HomePage";
import { GaragePage } from "../Helpers/PageObjects/GaragePage";
import { FuelExpenses } from "../Helpers/PageObjects/FuelExpenses";

describe("Garage page", () => {
  const homePage = new HomePage();
  const garagePage = new GaragePage();
  const fuelExpenses = new FuelExpenses();


  beforeEach(() => {
  cy.visit('/', {
    auth: {
      username: "guest",
      password: "welcome2qauto",
    },
  });

  // homePage.buttonSignIn.click();
  // // homePage.login(Cypress.env('email'), Cypress.env('password'));
  // // homePage.login('nasta@lebediuk.com', 'TestPassword12');
  // homePage.inputSignInEmail.type('nasta@lebediuk.com');
  // homePage.inputSignInPassword.type('TestPassword12');
  // homePage.buttonLogIn.click();


  // // cy.url().should('include', '/panel/garage');
  // garagePage.addCarBtn.should('be.visible')
});

  it("E2E test", () => {

    homePage.buttonSignIn.click();
  // homePage.login(Cypress.env('email'), Cypress.env('password'));
  // homePage.login('nasta@lebediuk.com', 'TestPassword12');
  homePage.inputSignInEmail.type('nasta@lebediuk.com');
  homePage.inputSignInPassword.type('TestPassword12');
  homePage.buttonLogIn.click();


  // cy.url().should('include', '/panel/garage');
  garagePage.addCarBtn.should('be.visible')

  // // Add a car

  //   garagePage.addCarBtn.click();
  //   garagePage.brandField.select('Audi');
  //   garagePage.modelField.select('TT');
  //   garagePage.mileageField.type('3');
  //   garagePage.addButton.click();
    

  // Add an expense
    //  fuelExpenses.fuelExpensesButton.should('be.visible').click();
    //  fuelExpenses.addAnExpenseButton.should('be.visible').click();
    //   fuelExpenses.mileageField2.clear().type('5');
    //   fuelExpenses.numberOfLiters.type('6');
    //   fuelExpenses.totalCost.type('45');
    //   fuelExpenses.addButton2.click();
    

});
});