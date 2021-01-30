import { callFirestore } from "tasks";

describe('ホーム画面 ', () => {
    it('メッセージを見ることができる', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('こんにちは').should('be.visible')
    })
})