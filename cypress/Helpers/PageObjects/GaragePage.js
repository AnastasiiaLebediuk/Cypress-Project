// import BaseElement from "../Elements/BaseElement";
import BaseElement from "../Elements/BaseElement.js";

export class GaragePage {
  // #baseElement = new BaseElement();

  get addCarBtn() {
    return cy.get(' .btn.btn-primary');
  }

  get brandField() {
    return cy.get('[formcontrolname="brand"]');
  }

  get modelField() {
    return cy.get('[formcontrolname="model"]');
  }

  get mileageField() {
    return cy.get('[formcontrolname="mileage"]');
  }

  get addButton() {
    return cy.get('.modal-footer .btn.btn-primary');
  }

  get garageButton() {
    return cy.get(".btn.btn-white.btn-sidebar.sidebar_btn.-active");
  }
}
