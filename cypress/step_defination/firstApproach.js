const { When } = require("@badeball/cypress-cucumber-preprocessor");
const { apiData } = require("../fixtures/apiInfo");

When("User wants to check all generic apis", () => {
  apiData.forEach(({ req, res }) => {
    cy.request(req).then((result) => {
      cy.log(result);
      expect(res.status).to.eq(result.status);
      if (res.body) {
        expect(Cypress._.isEqual(result.body, res.body)).to.be.true;
      }
    });
  });
});
