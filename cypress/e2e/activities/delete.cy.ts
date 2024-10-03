import { endpoint } from "./"
describe(`Testing DELETE: ${endpoint}`, () => {
  const testId = 15;
  it(`DELETE ${endpoint}: delete an existing activity, such as Id: ${testId}`, () => {
    cy.request({
      method: "DELETE",
      url: endpoint + "/" + testId,
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.request({ method: "GET", url: endpoint + "/" + testId }).then(
        (response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.empty;
        }
      );
    });
  });
});