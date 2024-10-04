describe(`demonstrate the capabilities of cypress stubbing on ${pageUnderTest} pages`, () => {
  let pageUnderTest = "https://reqres.in/api/users/2";
  it("should be able to stub a response", () => {
    cy.intercept("GET", pageUnderTest, {
      statusCode: 200,
      body: {
        data: {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Johnson",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        },
        support: {
            url: "https://reqres.in/#support-heading",
            text: "To keep ReqRes free, contributions towards server costs are appreciated!"
        },
      }
    }).as("getUser");

    cy.visit("https://reqres.in/").get(`[data-id="users-single"]`).click();

  }):

});