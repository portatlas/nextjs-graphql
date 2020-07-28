This is a simple application that calls a graphql endpoint for a country data
And has a simple form to encrypt the returned data with a [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Getting Started

Clone down the project and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit Testings
#### Tips & Recommended Practice
1. Your unit tests are the documentation for your code
2. Structure of A Unit Test
   - Given, When, Then
   - Arrange, Act, Assert
   - They should be independent and testing should be targeted to smallest unit of your
3. If something is hard to test then that could be a code smell
   - Can the code be refactored to adhere to the Single Responsibility Principle
   - Are the abstractions correct
   - Are the test independent
4. One assertion per unit test
5. Set Up a Clean Environment For Each Test (beforeEach, afterEach, beforeAll, afterAll)
6. Use Mocks to test effectively


#### Unit Testing Classses and Functions
Testings pure functions can be a great way to get started unit testing and get familiar with the testing framework you are using.
For this example, we will test a function that implements the Caesar Cipher

#### React Unit Testing with GraphQL Dependencies
react-testing-library makes it easier to test how the user will interact with our app. 
As we dive deeper we will take a look at how we can mock external graphql calls 
and test how our app is being used based on those dependencies





