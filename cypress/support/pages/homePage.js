export class HomePage {
    constructor() {
        this.onlineShop = "#onlineshoplink";
       
    }
      clickOnlineShop() {
        cy.get(this.onlineShop).click()
    }
}