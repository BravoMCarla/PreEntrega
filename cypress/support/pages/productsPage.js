export class ProductsPage {

    agregarProducto(product) {

        
        cy.get(`[value='${product}']`).click()
        cy.get('#closeModal').click()
    
        
    };
    
clickGoToShopping(){
    cy.get('#goShoppingCart').click()

};
}