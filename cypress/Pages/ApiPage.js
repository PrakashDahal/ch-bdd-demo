export function callAPI(method = "GET", url, body, status = 200, response) {
  
  // cy.request(method, url, body).then((res) => {
  //   cy.log(res);
  //   expect(res.status).to.eq(status);
  //   // compare response with res
  //   if (response) {
  //     expect(Cypress._.isEqual(response, res.body)).to.be.true;
  //   }
  // });
}

// cy.request({
//   method: 'GET',
//   url: 'https://pokeapi.co/api/v2/pokemon/' + pokename,
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   failOnStatusCode:false
// }).as('get_pokemon_data')
