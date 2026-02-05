// import { HomePage } from "../Helpers/PageObjects/HomePage"

// describe.skip ("Positive registration tests", ()=>{
//     const homePage = new HomePage();

//     beforeEach(()=>{
//         homePage.navigate();
//     });


//     it.skip("Positive test result with max data length", ()=>{
//         homePage.button.click();
//         homePage.inputName.type('Anastasiiausertestus');
//         homePage.inputLastName.type('Lebediuklastnameuser');
//         homePage.inputEmail.type('nasta@lebediuk.com');
//         homePage.inputPassword.type('TestPassword123');
//         homePage.inputRepeatPassword.type('TestPassword123');
//         homePage.buttonRegister.click();

//     });

//     it.skip("Positive test result with minimum data length", ()=>{
//         homePage.button.click();
//         homePage.inputName.type('te');
//         homePage.inputLastName.type('rh');
//         homePage.inputEmail.type('test3@teste.com');
//         homePage.inputPassword.type('Qwert123');
//         homePage.inputRepeatPassword.type('Qwert123');
//         homePage.buttonRegister.click();

//     });

// });

// describe ("Negative registration tests", ()=>{
//      const homePage = new HomePage();

//     beforeEach(()=>{
//         homePage.navigate();
//     });


//     it.skip("Empty name", ()=>{

//         homePage.button.click();
//         homePage.inputName.click();
//         homePage.inputLastName.click();

//         cy.contains("Name required").should("be.visible");
//     });


//     it.skip("Short name", ()=>{

//         homePage.button.click();
//         homePage.inputName.type('L');
//         homePage.inputLastName.click();

        
//         cy.contains("Name has to be from 2 to 20 characters long").should("be.visible");
//     });

//     it.skip("Incorrect language of the name", ()=>{

//         homePage.button.click();
//         homePage.inputName.type('ю3');
//         homePage.inputLastName.click();


//         cy.contains("Name is invalid").should("be.visible");

//     });

//     it.skip("Too long a name", ()=>{
//         homePage.button.click();
//         homePage.inputName.type('Anastasiia user test12');
//         homePage.inputLastName.click();

//         cy.contains("Name is invalid").should("be.visible");

//     });

//     it.skip("Empty LastNname", ()=>{
//         homePage.button.click();
//         homePage.inputLastName.click();
//         homePage.inputEmail.click();

//         cy.contains("Last name required").should("be.visible");

//     })

//     it.skip("Short LastName", ()=>{
//         homePage.button.click();
//         homePage.inputLastName.type('k');
//         homePage.inputEmail.click();

//         cy.contains("Last name has to be from 2 to 20 characters long").should("be.visible");

//     });

//     it.skip("Too long a LastName", ()=>{
//         homePage.button.click();
//         homePage.inputLastName.type('Lebediuk last name1234');
//         homePage.inputEmail.click();

//         cy.contains("Last name is invalid").should("be.visible");

//     });

//     it.skip("Incorrect of the last name", ()=>{
//         homePage.button.click();
//         homePage.inputLastName.type('35');
//         homePage.inputEmail.click();

//         cy.contains("Last name is invalid").should("be.visible");

//     });

//     it.skip("Empty Email", ()=>{
//         homePage.button.click();
//         homePage.inputEmail.click();
//         homePage.inputPassword.click();

//         cy.contains("Email required").should("be.visible");

//     });

//     it.skip("Invalid email", ()=>{
//         homePage.button.click();
//         homePage.inputEmail.type('testtest.com');
//         homePage.inputPassword.click();

//         cy.contains("Email is incorrect").should("be.visible");

//     });


//     it.skip("Empty password", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.click();
//         homePage.inputRepeatPassword.click();

//         cy.contains("Password required").should("be.visible");

//     });

//     it.skip("Short password", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('Test12');
//         homePage.inputRepeatPassword.click();

//         cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should("be.visible");

//     });

//     it.skip("Password in capital letters", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('TEST123W');
//         homePage.inputRepeatPassword.click();

//         cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should("be.visible");

//     });

//     it.skip("Password in lowercase letters", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('teste123');
//         homePage.inputRepeatPassword.click();

//         cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should("be.visible");

//     });

//     i.skip("Password without numbers", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('Testrrrr');
//         homePage.inputRepeatPassword.click();

//         cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should("be.visible");

//     });

//      it.skip("Empty Re-enter password", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('Qwert123');
//         homePage.inputRepeatPassword.click();
//         homePage.inputPassword.click();

//         cy.contains("Re-enter password required").should("be.visible");

//     });

//     it.skip("Short Re-enter password", ()=>{
//         homePage.button.click();
//         homePage.inputPassword.type('Qwert123');
//         homePage.inputRepeatPassword.type('Qwert12');
//         homePage.inputPassword.click();

//         cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should("be.visible");

//     });

// });


// describe ("Login tests", ()=>{
//     const homePage = new HomePage();

//     beforeEach(()=>{
//         homePage.navigate();
//     });

//     it.skip("Login", ()=>{
//         homePage.buttonSignIn.click();
//         homePage.login("nasta@lebediuk.com", "TestPassword123");

//     });

// });