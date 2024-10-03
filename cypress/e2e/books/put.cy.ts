import { entityStrInterpolated, endpoint } from ".";
describe(`Testing PUT: ${endpoint}`, () => {
  const testId = 15;
  it(`PUT ${endpoint}: amend an existing ${entityStrInterpolated}, such as Id: ${testId}`, () => {
    cy.request({
      method: "PUT",
      url: endpoint + "/" + testId,
      body: {
        title: "test title amended",
        description: "lorem ipsum dolor sit amet",
        pageCount: Math.floor(Math.random() * 1000),
        excerpt: "string",
        publishDate: new Date().toISOString(),
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
