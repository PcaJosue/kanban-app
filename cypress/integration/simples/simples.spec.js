describe('kanban app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('Should have default sprint', () => {
        cy.get('.mat-form-field-infix').should('contain', 'Default')
    })
    it('Should have menu options', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content').should('be.visible')
    })


    it('should be contain Sprints option', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content > :nth-child(1)').should('contain', 'Sprints')
    })
    it('should be contain Members option', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content > :nth-child(2)').should('contain', 'Members')
    })

    it('should display sprint dialog', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-dialog-0').should('be.visible')
    })

    it('should create a sprint', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-input-0').type('Sprint test')
        cy.get('.sprint__add > .mat-focus-indicator').click()
        cy.get('.sprint__list > :nth-child(2)').should('contain', 'Sprint test')

    })

    it('should show two options in sprints', () => {
        cy.get('.main__header > .mat-icon').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-input-0').type('Sprint test')
        cy.get('.sprint__add > .mat-focus-indicator').click()
        cy.get('.sprint__header > .mat-icon').click()
        cy.wait(1000)
        cy.get('.mat-form-field-infix').click()
        cy.get('#mat-select-0-panel').should('contain', 'Sprint test')

    })
})