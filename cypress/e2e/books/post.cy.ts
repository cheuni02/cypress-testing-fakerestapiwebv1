import { entityStrInterpolated, endpoint } from ".";
describe(`Testing POST: ${endpoint}`, () => {
  const numberOfEntities = 200;
  it(`POST ${endpoint}: create a new ${entityStrInterpolated}`, () => {
    cy.request({
      method: "POST",
      url: endpoint,
      body: {
        title: "Book 31",
        description: "Book 31 description",
        date: new Date().toISOString(),
        isCompleted: false,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.request({
        method: "GET",
        url: endpoint,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(numberOfEntities);
      });
    });
  });
});
