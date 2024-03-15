describe('Get List Users', () => {
    it('verifying user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=1'
        }).then((response) => {
            expect(response.status).to.equal(200)
            // expect(response.body).has.property('george.bluth@reqres.in'),
            // expect(response.body).has.property("data[0].email", 'george.bluth@reqres.in')
            // expect(response.body).should('have.text', 'george.bluth@reqres.in')
        })
    })
})