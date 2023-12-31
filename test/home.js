// cypress/integration/homepage_spec.js
describe('Salon Harmony Homepage', () => {
    it('should navigate to the homepage and check content', () => {
      // Visit the homepage
      cy.visit('/');
  
      // Check if the header is present
      cy.get('header h1').should('contain', 'Salon Harmony');
  
      // Check the booking details section
      cy.get('.booking-details h2').should('contain', 'Manage Your Salon Effectively');
      cy.get('.booking-details p').should('contain', 'Welcome to Salon Harmony');
  
      // Check the button container
      cy.get('.button-container a.button').should('have.attr', 'href', '/home/bookings');
      cy.get('.button-container a.services-button').should('have.attr', 'href', '/home/services');
  
      // Click the "View Bookings" button
      cy.get('.button-container a.button').click();
  
      // After clicking, assert that the URL has changed
      cy.url().should('include', '/home/bookings');
  
      // Navigate back to the homepage
      cy.go('back');
  
      // Check the additional paragraph content
      cy.get('main p').should('contain', 'Effortlessly streamline your salon operations');
  
      // Add more assertions as needed for other elements and interactions
    });
  });
  