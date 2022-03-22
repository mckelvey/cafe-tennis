# café tennis

## Setup for Play

### Development Environment

To use Vercel Next.js, you need the following tools:

- Node.js - [Install Node.js 14](https://nodejs.org/en/), including the npm package management tool. [NVM](https://github.com/nvm-sh/nvm) is recommended.

1. Clone the repo and change directory
   ```
   git clone https://github.com/mckelvey/cafe-tennis.git && cd cafe-tennis
   ```
2. Use nvm to use the correct version of node
   ```
   nvm use
   ```
3. Install node modules. Your package-lock.json should not change, if it did you are probably not using the correct node version. (See step 2)
   ```
   npm install
   ```
4. Use development environment variables
   ```
   cp .env.development .env.local
   ```
5. Run the Next.js app locally
   ```
   npm run dev
   ```
6. You should see the website running locally at: http://localhost:8080

### Storybook

Storybook was installed along with the package, you can start it locally with `npm run storybook`.

## Volley

When it’s your turn, be sure to create a new branch in the format `initials/edition-##/some-descriptive-title` where `##` is the edition of café tennis you will be volleying and `some-descriptive-title` gives us some indication of what you will be making during your volley. (Hopefully that’s clear by the time the volley is heading your way.)

Your job is to render the assigned volley faithfully in Storybook.

Please do commit your work as it will make for a great retrospective and provoke great thoughts. We’ll keep the branches alive.
