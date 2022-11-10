import { LoginPage } from '../support/pages/loginPage'
import { HomePage } from '../support/pages/homePage'
import { UserRegistrationPage } from '../support/pages/userRegistrationPage'
import {ProductsPage} from '../support/pages/productsPage'
import {ShoppingCartPage} from '../support/pages/shoppingCartPage'


describe("PRE ENTREGA ", () =>{
    let registroData, productosData, totalSum
  
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const userRegistrationPage = new UserRegistrationPage()
    const productsPage = new ProductsPage()
    const shoppingCartPage = new ShoppingCartPage()

    before( () => {
        cy.fixture('datosLogin').then(datos => {
            registroData = datos
        })
  
              cy.fixture('datosProductos').then(datos => {
            productosData = datos
        })
    })
  
    beforeEach("Visitar sitio web, y loguearse", () => {
      cy.visit('');
      userRegistrationPage.clickRegister();
      loginPage.writeUser(registroData.login.user);
      loginPage.writePassword(registroData.login.password);
      loginPage.clickLoginButton();
      cy.viewport(1280, 720)
      cy.get(homePage.returnUser(registroData.login.user), {timeout:30000})
        
    })
    it("Deberia agregar 2 productos y checkear precios", () => {
      
     homePage.clickOnlineShop();
     productsPage.agregarProducto(productosData.firstProduct.product1)
     productsPage.agregarProducto(productosData.secondProduct.product2)
     productsPage.clickGoToShopping()
     shoppingCartPage.checkProductName(productosData.firstProduct.product1).should('have.text', productosData.firstProduct.product1)
     shoppingCartPage.checkProductName(productosData.secondProduct.product2).should('have.text', productosData.secondProduct.product2)
     shoppingCartPage.checkPrice(productosData.firstProduct.product1,productosData.firstProduct.price1).should('contains.text', productosData.firstProduct.price1)
     shoppingCartPage.checkPrice(productosData.secondProduct.product2, productosData.secondProduct.price2).should('contains.text', productosData.secondProduct.price2)
     totalSum =  productosData.firstProduct.price1 + productosData.secondProduct.price2
     shoppingCartPage.clickTotalButton()
     shoppingCartPage.checkFinalTotal().should('have.text', totalSum)

  });

  
  });