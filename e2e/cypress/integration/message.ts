describe('ホーム画面 ', () => {
    it('メッセージを見ることができる', () => {
        cy.visit('/'); //package.jsonのbaseUrl
        cy.contains('こんにちは').should('be.visible')
    })
})