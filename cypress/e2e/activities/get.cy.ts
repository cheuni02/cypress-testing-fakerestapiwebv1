import { entity, endpoint } from "./";
describe(`Testing GET: ${endpoint}`, () => {
  const numberOfActivities = 30;

  it(`GET ${endpoint}: should be able to retrieve all ${numberOfActivities} activities`, () => {
    cy.request(endpoint).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(numberOfActivities);
    });
  });

  it(`GET ${endpoint}/{id}: should be able to retrieve an activity by supplying the id`, () => {
    const testArr = [...Array(numberOfActivities + 1).keys()];
    testArr.shift();
    cy.wrap(testArr).each((testId) => {
      cy.request(endpoint + "/" + testId).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(testId);
        expect(response.body.title).to.equal(`Activity ${testId}`);
      });
    });
  });

  it(`GET ${endpoint}/{id}: should return 404 when id is not found`, () => {
    const testId = 999999;
    cy.request({
      url: endpoint + "/" + testId,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
