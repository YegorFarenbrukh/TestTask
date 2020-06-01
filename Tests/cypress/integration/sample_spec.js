describe('Test task for ScrumLaunch', () => {
	it('Check that user able to donate on "Project university of minnesota" home screen', () => {

		// 1. Navigate to url
		cy.visit('https://crowdfund.umn.edu/?cfpage=project&project_id=32920')

		// 2. Click "Make a donation" button
		cy.contains('Make a Donation').click()

		// Make sure that user sees field for set donation value with a default value
		cy.get('input[name="your-pledge"]').should('have.value', '50')

		// Creating random number for donation value field
		const randomNumber = Math.floor(Math.random() * 15001)

		// 3. Enter any donation amount and click "Donate Now" button.
		cy.get('input[name="your-pledge"]')
		.clear() // Clear the default value
		.type(randomNumber) // Type a random number
		.should('have.value', randomNumber) // Compare our random numbers in text fields

	})


	// Two part of test because i have problem to redirected to another URL from first part of test
	it('Check that user able to pay donate when he filled out the form with valid data', () => {

		// Constants
		const name = 'Firstname and Lastname'
		const email = "test@gmail.com"
		const address = "Some avenue 221b"
		const city = "New-York"
		const defaultState = "MN"
		const addressZip = "22222-2222"

		// 1. Navigate to url
		cy.visit('https://makingagift.umn.edu/give/cfgift.html?cart=6340%7C50.00%7CJean+K.+Quam+Fellowship+in+Social+Work&cftoken=V1Z0ZnBoRXZUNndpQ3JFbUkyL2xqVW5MTlV6QVpEeVZwMDA0ZHFWd2tNS015dmFsV1pveHg2RC81di92QlFyVGdBR2hZME91U2lRWEhFaVlMT1k5NzlmeEFOeUtCVUozcTFMampDTDJoWW40T3VtdjlxbnIzZFoxbWNPZVU2V3gzWVhwa0tneG5JaG1FZ2EwSEFoYUJmei9zUnl6NW9RMXFtQ1NmQzQzdzYxNUQyeVdhQmpNL0pWbmdGdEd5SStlNGJDZXRCaXFWZ0RZdERUWnFnWGE5NFZscXp3WHFCSkRjazJJVml1bFhPVGZFSGVJZDhQMTVLTHo0Wkx1Rkk5UE5udlhpRVYwbUR1T2hSbEZ0TXI2R01oTmQrSisyQ20wTkNVVk5tdzExREl4OHZXamlvM3dzR1JKdGEycms4b2tNd1JaSkpxUkpRdzNmNTIyeFNmdnlRPT0=')

		// 2. Input valid name into "Name" field
		cy.get('input[name="registrant_name"]')
		.type(name)
		.should('have.value', name)

		// 3. Input valid name into "Email address" field
		cy.get('input[name="registrant_email"]')
		.type(email)
		.should('have.value', email)

		// 4. Check that "Country" field has default value
		cy.get('.select-flat')
  		.should('have.value', 'United States')

		// 5. Input valid address into "Addreess" field
  		cy.get('input[name="registrant_address"]')
  		.type(address)
  		.should('have.value', address)

		// 6. Input valid city into "City" field
  		cy.get('input[name="registrant_city"]')
  		.type(city)
  		.should('have.value', city)

		// 7. Check that "State" field has default value
  		cy.get('.registrant.state')
  		.should('have.value', defaultState)

		// 8. Input valid address zip into "Address zip" field
		cy.get('input[name="address_zip"]')
			.type(addressZip)
			.should('have.value', addressZip)

		// 9. Find "Proceed to Payment" button and click
		cy.contains('Proceed to Payment').click()
	})
})
