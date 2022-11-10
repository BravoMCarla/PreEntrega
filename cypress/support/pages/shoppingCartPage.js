export class ShoppingCartPage {
    constructor() {
        this.showTotalPrice = "//button[text()='Show total price']";
        this.total = "#price";
            }

    checkProductName(product){
        return cy.xpath(`//*[@name='${product}']`);

    };

    checkPrice(product,price){
       return cy.xpath(`//*[@name='${product}']//following-sibling::p[@name=${price}]`);

    };

    clickTotalButton(){
        cy.xpath(this.showTotalPrice).click();

           }

     checkFinalTotal(){
            return cy.get(this.total);
    
               }
    }
