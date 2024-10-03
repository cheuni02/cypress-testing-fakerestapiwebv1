import { entityStrInterpolated, endpoint } from ".";
describe(`Testing GET: ${endpoint}`, () => {
  const numberOfEntities = 200;
  it(`GET ${endpoint}: should be able to retrieve all ${numberOfEntities} ${entityStrInterpolated}s`, () => {
    cy.request(endpoint).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(numberOfEntities);
    });
  });

  it(`GET ${endpoint}/{id}: should be able to retrieve a ${entityStrInterpolated} by supplying the id`, () => {
    const testArr = [...Array(numberOfEntities + 1).keys()];
    testArr.shift();
    cy.wrap(testArr).each((testId) => {
      cy.request(endpoint + "/" + testId).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(testId);
        expect(response.body.title).to.equal(`Book ${testId}`);
      });
    });
  });
});
