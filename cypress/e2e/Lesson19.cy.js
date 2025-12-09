describe("Test", ()=>{
    it ("Found all buttons in the hero section", ()=>{
        cy.visit("https://qauto.forstudy.space/",{
            auth:{
                username: "guest",
                password: "welcome2qauto",
            },
        });
        
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
        cy.get('app-signup-modal .modal-header').should('be.visible')

    });



    it("Found Hillel button", ()=>{
        cy.visit("https://qauto.forstudy.space/",{
            auth:{
                username: "guest",
                password: "welcome2qauto",
            },
        });

        cy.get("[class='contacts_link display-4']")
        .should('be.visible')
        .invoke("removeAttr", "target")
        .click()

        cy.url().should("contain", "hillel");
    });

// Пробний тест, але він не може фінішнутись через довге завантадення сторінки
    // it ("Found the telegram button", ()=>{
    //      cy.visit("https://qauto.forstudy.space/",{
    //         auth:{
    //             username: "guest",
    //             password: "welcome2qauto",
    //         },
    //     });
       
    //     cy.get(".contacts_socials")
    //     .get(".socials_link")
    //     .invoke("removeAttr", "target")
        

    //     cy.get(".socials_icon.icon.icon-telegram").click()
    //     })
})