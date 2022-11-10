export class HomePage {
    constructor() {
        this.onlineShop = "#onlineshoplink";
       
    }

    returnUser(user) {
        return cy.get(`[id^='user_${user}']`);
    };
    
      clickOnlineShop() {
        cy.get(this.onlineShop).click()
    }
}