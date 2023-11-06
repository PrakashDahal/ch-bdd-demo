const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("User post in url {string} with data:", (url, body) => {
  body = JSON.parse(body);
  cy.request({
    method: "POST",
    url,
    body,
    headers: {
      "Content-Type": "application/json",
    },
    failOnStatusCode: false,
  }).as("post_data");
});

Then("Verify post request response status code is {int}", (statusCode) => {
  cy.get("@post_data").then((response) => {
    cy.log(response);
    expect(response.status).to.eq(statusCode);
  });
});

Then("Verify post request response body title as {string}", (title) => {
  cy.get("@post_data").then((response) => {
    expect(response.body.title).to.eq(title);
  });
});
