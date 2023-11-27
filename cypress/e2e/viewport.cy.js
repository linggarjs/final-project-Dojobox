describe('Responsive Design Check', () => {
    it('should verify responsiveness on Desktop view', () => {
        // Desktop view
        cy.viewport(1280, 720)
        // Perform checks for desktop layout
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
        
        // Klik tombol "Login"
        cy.contains('Masuk').click()
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')
        // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
        cy.get('[class="page-content"]').should('contain.text', 'Dashboard')
    })

    it('should verify responsiveness on Tablet view', () => {
        // Tablet view
        cy.viewport('ipad-2')
        // Perform checks for tablet layout
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
        
        // Klik tombol "Login"
        cy.contains('Masuk').click()
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')
        // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
        cy.get('[class="page-content"]').should('contain.text', 'Dashboard')
    })

    it('should verify responsiveness on Mobile view', () => {
        // Mobile view
      cy.viewport('iphone-6')
      // Perform checks for mobile layout
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
        
        // Klik tombol "Login"
        cy.contains('Masuk').click()
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')
        // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
        cy.get('[class="page-content"]').should('contain.text', 'Dashboard')
    })
})

  