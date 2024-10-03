import { endpoint } from "./";
describe(`Testing POST: ${endpoint}`, () => {
  it(`POST ${endpoint}: create a new activity`, () => {
    cy.request({
      method: "POST",
      url: endpoint,
      body: {
        title: "Activity 31",
        description: "Activity 31 description",
        date: new Date().toISOString(),
        isCompleted: false,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.request({
        method: "GET",
        url: endpoint,
      })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(30);
      });
    });
  });
});
