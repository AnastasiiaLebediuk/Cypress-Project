// import { GaragePage } from "../Helpers/PageObjects/GaragePage";

// describe.skip("API", ()=>{

//     const garagePage = new GaragePage();
//     let carId;

//     const expenseData = {
//         mileage: Math.floor(Math.random() * 1000) + 1, 
//         liters: 17,
//         totalCost: 16,
//          }; 

//     before(()=>{
//         cy.request({
//             method: "POST",
//             url: "/api/auth/signin",
//             body:{
//                 email: "nasta@lebediuk.com",
//                 password: "TestPassword123",
//             }

//         });

//         cy.visit('/panel/garage', {
//     auth: {
//       username: "guest",
//       password: "welcome2qauto",
//           },
//         });
//     });
    
//     it.skip ("E2E", ()=>{
      
//         cy.intercept("POST","/api/cars").as ('cars')

//         garagePage.addCarBtn.click();
//         garagePage.brandField.select('Audi');
//         garagePage.modelField.select('TT');
//         garagePage.mileageField.type('9');
//         garagePage.addButton.click();


//       cy.wait("@cars").then(({ response }) => {
//              expect(response.statusCode).to.eq(201);
//       cy.wrap(response.body.data.id).as('carId');

//           carId = response.body.data.id;
//           expect(carId).to.exist;
//       });


//      cy.request("GET","/api/cars").then(({ body, status }) => {
//            expect(status).to.eq(200);
     
//     const createdCar = body.data.find(car => car.id === carId);

//       expect(createdCar).to.exist;
//       expect(createdCar.id).to.eq(carId);
//       expect(createdCar.brand).to.eq('Audi');

//      });

//      cy.get('@carId').then((carId) => {
//         cy.createExpense({      
//             carId,
//             reportedAt: new Date().toISOString(),
//             mileage: expenseData.mileage,
//             liters: expenseData.liters,
//             totalCost: expenseData.totalCost,
//             forceMileage: false

//         }).then((response)=>{
//            expect(response.status).to.eq(200);
//            expect(response.body.data.carId).to.eq(carId);
//            expect(response.body.data.mileage).to.eq(expenseData.mileage);
//            });
//           });

//       cy.contains("Audi TT").should("be.visible").click();
//       cy.contains("Fuel expenses").click();

//       cy.contains(expenseData.mileage).should("be.visible");
//       cy.contains(expenseData.liters).should("be.visible");
//       cy.contains(expenseData.totalCost).should("be.visible");
  
      
//     });   
      
//      after(()=>{
//       if (carId){
//      cy.request( "DELETE", `/api/cars/${carId}`)
//      .its('status').should('eq', 200);
//       }
//     });
//   })