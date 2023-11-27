describe('Viseetor Login Test', () => {
  it('should successfully log in with valid credentials', () => {
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

  it('should display an error message for invalid username', () => {
    // Buka halaman login
    cy.visit('appstaging.viseetor.id/login')

    // Memasukkan username dan password dari variabel lingkungan
    cy.get('input[name="email"]').type('demo1@viseetor.id')
    cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)

    // Klik tombol "Login"
    cy.contains('Masuk').click()

    // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
    cy.get('[role="alert"]').should('contain.text', 'Wrong Email/Password!')
  })

  it('should display an error message for invalid password', () => {
    // Buka halaman login
    cy.visit('appstaging.viseetor.id/login')

    // Memasukkan username dan password dari variabel lingkungan
    cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
    cy.get('input[name="password"]').type('invalidpassword')

    // Klik tombol "Login"
    cy.contains('Masuk').click()

    // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
    cy.get('[role="alert"]').should('contain.text', 'Wrong Email/Password!')
  })

  it('should display a message for empty username and password fields', () => {
    // Buka halaman login
    cy.visit('appstaging.viseetor.id/login')

    // Klik tombol "Login"
    cy.contains('Masuk').click()

    // Verifikasi pesan selamat datang atau elemen lainnya setelah login berhasil
    cy.get('[role="alert"]').should('contain.text', 'Incorrect email!')
  })
})
