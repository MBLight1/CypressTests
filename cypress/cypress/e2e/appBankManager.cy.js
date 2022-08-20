import { Appointment} from "../classes/Appointment";
import selector from "../classes/selector";
import text from "../classes/text";

describe('Main cases', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  describe('User Money Flow Log', () =>{
    it("Verification of the user's money income flow", () => {
      cy.contains(text.customerLogin).click()
      cy.userOption(2).contains('Harry Potter')
      cy.get(selector.buttonLogin).type('submit').click()
      cy.nameUser('Harry Potter')
      cy.get('select').select('1005')
      cy.findByNgClass('btnClass2').click()
      cy.makeDeposit(200);
      cy.message('message').should('contain','Deposit Successful')
      cy.findByNgClass('btnClass1').click()
      cy.wait(1000)
      cy.get(selector.trRow)
        .last()
        .should('contain', 200)
    })

    it("Verification of the outflow of money from the user", () => {
      cy.contains(text.customerLogin).click()
      cy.userOption(2).contains('Harry Potter')
      cy.get(selector.buttonLogin).type('submit').click()
      cy.nameUser('Harry Potter')
      cy.get('select').select('1005')
      cy.findByNgClass('btnClass2').click()
      cy.makeDeposit(200);
      cy.message('message').should('contain', 'Deposit Successful')
      cy.findByNgClass('btnClass3').click()
      cy.wait(1000)
      cy.get('[ng-model="amount"]')
        .type(10)
      cy.get('form.ng-dirty > .btn')
        .click()
      cy.message('message').should('contain', 'Transaction successful')
      cy.findByNgClass('btnClass1').click()
      cy.wait(2000)
      cy.get(selector.trRow)
        .last()
        .should('contain',10)
    })
  })

  describe('User banking control', () =>{
    it('user management',() => {

      const appointment = new Appointment('Marcelo','boroni','45');
      
      cy.contains(text.bankManagerLogin).click()
      cy.findByNgClass('btnClass1').click()
      cy.addAppointment(appointment)
      cy.findByNgClass('btnClass3').click()
      cy.get(selector.trRow)
        .last()
        .should('contain', "Marcelo")

    })
  })
})
