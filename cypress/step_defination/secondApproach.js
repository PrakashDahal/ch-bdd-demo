const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// const { callAPI } = require("../Pages/ApiPage");
const { apiData } = require("../fixtures/apiInfo");

When("User wants to GET {string} data", (url) => {
  cy.request({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    failOnStatusCode: false,
  }).as("get_post_data");
});

Then("Verify response status code is {int}", (statusCode) => {
  cy.get("@get_post_data").then((response) => {
    cy.log(response)
    expect(response.status).to.eq(statusCode);
  });
});

Then("Verify response body title as {string}",(title)=>{
    cy.get("@get_post_data").then((response) => {
        expect(response.body.title).to.eq(title);
      });
})
