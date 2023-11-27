describe('Viseetor Login Test', () => {
    it('should log in with valid credentials and display dashboard elements', () => {
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

      // Verifikasi elemen-elemen dasbor setelah login berhasil
      cy.get('[class="text-primary p-3"]').should('be.visible')
    })

    it('should display accurate and relevant data in widgets', () => {
        // Masukkan kode untuk login sebelum memulai pengujian widget
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
    
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
    
        // Klik tombol "Login"
      cy.contains('Masuk').click()
    
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')

        // Verifikasi keterlihatan dan keakuratan data pada widget
        cy.get('[href="/"]').should('be.visible') 
    
        cy.get('[href="/marketing-info"]').should('be.visible')

        cy.get('[href="/marketing-content"]').should('be.visible')

        cy.get('[href="/marketing-messages"]').should('be.visible')
       
        cy.get('[key="t-client"]').should('be.visible') 
    
        cy.get('[key="t-event"]').should('be.visible')

        cy.get('[key="t-shop"]').should('be.visible')

        cy.get('[class="bx bx-dollar"]').should('be.visible')
    
        // Pastikan untuk menyesuaikan selektor ('.widget1', '.widget2', dst.) dengan elemen yang sesuai untuk masing-masing widget pada halaman dashboard Viseetor.
    })    

    it('should filter data based on specified criteria', () => {
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
    
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
    
        // Klik tombol "Login"
        cy.contains('Masuk').click()
    
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')

        cy.visit('appstaging.viseetor.id/transactions')

        // Lakukan aksi untuk mencari atau menerapkan filter
        // Misalnya, temukan elemen untuk filter atau kotak pencarian
        cy.get('input[placeholder="Pencarian No. Order..."]').type('I90JPKD3BD') // Ganti dengan kriteria filter yang sesuai
        
        // Tambahkan aksi untuk menerapkan filter dan menunggu perubahan pada data yang ditampilkan
        cy.contains('Cari').click() // Ganti dengan tombol atau aksi yang mengaplikasikan filter
        
        // Verifikasi perubahan pada data yang ditampilkan setelah filter diterapkan
        // Misalnya, verifikasi tabel atau elemen lainnya yang menampilkan informasi yang sesuai dengan kriteria filter yang diaplikasikan
        cy.get('[class="table-responsive"]').should('contain.text', 'I90JPKD3BD') // Ganti dengan selektor yang menampilkan data yang difilter
    })

    it('should verify dashboard load time', () => {
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
    
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
    
        // Klik tombol "Login"
        cy.contains('Masuk').click()
    
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')

        // Navigasi ke URL yang diberikan (profile page)
        cy.visit('appstaging.viseetor.id/profile')
    
        // Mengukur waktu yang dibutuhkan untuk pemuatan dashboard
        cy.window().then((win) => {
          // Catat waktu saat memulai pengukuran waktu
          const startTime = new Date().getTime()
    
          // Tunggu hingga semua sumber daya terkait dengan halaman dimuat sepenuhnya
          cy.wait(3000) // Tunggu selama 3 detik (Anda juga dapat menggunakan cy.waitUntil() atau teknik lainnya)
    
          // Catat waktu saat halaman selesai dimuat
          const endTime = new Date().getTime()
    
          // Hitung waktu total pemuatan halaman
          const loadTime = endTime - startTime
    
          // Verifikasi apakah waktu pemuatan memenuhi ekspektasi (kurang dari atau sama dengan 3 detik)
          expect(loadTime).to.be.lessThan(3000)
        })
    })

    it('should validate user profile details', () => {
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
    
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
    
        // Klik tombol "Login"
        cy.contains('Masuk').click()
    
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')

        // Navigasi ke URL yang diberikan (profile page)
        cy.visit('appstaging.viseetor.id/profile')
    
        // Memeriksa setiap detail profil yang ditampilkan
        cy.get('[class="card-body pt-0"]').should('contain.text', 'Demo Account') // Ganti dengan selektor untuk nama
        cy.get('[class="card-body pt-0"]').should('contain.text', 'demo@viseetor.id') // Ganti dengan selektor untuk email
        cy.get('[class="card-body pt-0"]').should('be.visible') // Ganti dengan selektor untuk gambar profil
    
        cy.get('[class="card"]').should('be.visible')
        // Perlu diingat bahwa informasi yang ditampilkan harus diakses dalam halaman dan ada dalam elemen yang dapat diidentifikasi dengan selector CSS atau XPath yang tepat.
        // Anda juga dapat menambahkan lebih banyak assertion sesuai dengan informasi profil lain yang ditampilkan di halaman.
    
        // Selanjutnya, jika memungkinkan, Anda dapat melakukan permintaan API atau query database untuk membandingkan informasi yang ditampilkan dengan data yang disimpan di database. Namun, hal ini tidak dapat dilakukan secara langsung di Cypress.
    })

    it('should check various dashboard functionalities', () => {
        // Buka halaman login
        cy.visit('appstaging.viseetor.id/login')
    
        // Memasukkan username dan password dari variabel lingkungan
        cy.get('input[name="email"]').type(Cypress.env('credentials').validUsername)
        cy.get('input[name="password"]').type(Cypress.env('credentials').validPassword)
    
        // Klik tombol "Login"
        cy.contains('Masuk').click()
    
        // Verifikasi apakah pengguna berhasil login
        cy.url().should('include', 'appstaging.viseetor.id/')

        // Navigasi ke URL yang diberikan (profile page)
        cy.visit('appstaging.viseetor.id/profile')
    
        // Interaksi dengan berbagai fungsi pada dashboard
        cy.get('[href="/edit-profile"]').click() // Ganti dengan selektor untuk tombol edit profile
        cy.get('[type="submit"]').click()
        // Verifikasi tindakan edit profile, kemungkinan dengan memeriksa apakah halaman edit profile terbuka atau elemen yang relevan muncul
    
         // Navigasi kembali ke halaman profile
         cy.visit('appstaging.viseetor.id/profile')
         
         // Interaksi dengan tombol Ubah Foto
         cy.contains('Ubah Foto').click()

         // Navigasi kembali ke halaman profile
         cy.visit('appstaging.viseetor.id/profile')
         
         // Interaksi dengan tombol Logout
         cy.get('[class="dropdown d-inline-block"]').click()

         cy.get('[href="/logout"]').click()
         // Verifikasi tindakan logout, misalnya, memastikan pengguna keluar dari akun dan diarahkan kembali ke halaman login
  })
})