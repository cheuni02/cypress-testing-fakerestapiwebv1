import { endpoint } from "./";
describe(`Testing PUT: ${endpoint}`, () => {
  const testId = 15;
  it(`PUT ${endpoint}: amend an existing activity, such as Id: ${testId}`, () => {
    cy.request({
      method: "PUT",
      url: endpoint + "/" + testId,
      body: {
        title: "test title amended",
        dueDate: new Date().toISOString(),
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.request({ method: "GET", url: endpoint + "/" + testId }).then(
        (response) => cy.log(JSON.stringify(response.body))
      );
    });
  });
});
