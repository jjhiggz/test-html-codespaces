# My First Website

In this assignment you will be building your first webpage.

## Learning objectives

In order to complete this assignment, a student should be able to:

- Open a project in a text-editor/IDE of choice ( VSCode probably, unless you know what you're doing )
- Create an html file and name it correctly
- Update a page title
- Utilize `<h1>` heading tag to set page heading
- Utilize `<h2>` heading tag to set sections headings
- Utilize `<p>` paragraph tag to add paragraphs of text
- Use lorem ipsum to generate filler text
  - If you're using VSCode, you can use the Emmet shortcut `lorem` to generate lorem ipsum text
- Run an html project in the browser
- Open and use a terminal to run basic commands
  - Install project dependencies with `npm`
  - Run tests with `npx playwright test`
  - Kill Process
- Utilize playwright package commands to run tests with GUI interface
- Utilize playwright package commands to show tests report in the browser
- Track assignment progress using markdown checkboxes

## Setup

To get this project setup, you should:

- Download the zipped project folder
- Unarchive the zipped folder and move it to `devslopes-projects` root folder
- Run `npm i` to install all dependencies
- Run the Live Server with the 'Go Live' button in the VSCode status bar (bottom right)

## In order to pass the assignment

### Standard Requirements

- [ ] Create the index.html file **IN THE PROJECT ROOT**
- [ ] Add the HTML boilerplate specified [here](https://gist.github.com/jjhiggz/2caa88e49b0f0b6523185c8b502748a5)
  - Or just use the `!` Emmet shortcut
- [ ] Set the page title to be "My First Website - Main page"
- [ ] Set the page heading to be "Main Page"
- [ ] Add 3 page sections headings (spelling and case matters)
  - "Section One"
  - "Section Two"
  - "Section Three"
- [ ] Add 3 paragraphs of text beneath every section heading (use Emmet Lorem shortcut):
  - 20 words (strictly) paragraph beneath the "Section One" heading
  - 30 words (strictly) paragraph beneath the "Section Two" heading
  - 50 words (strictly) paragraph beneath the "Section Three" heading

### Testing your assignment before submit

- Start a new terminal session
- Run the tests with any of the following commands:
  - `npx playwright test` to run the tests in the terminal
  - `npx playwright test --ui` to run tests with graphical user interface (GUI)
- If any of the tests fails, read the test message and fix your html file to pass the test
- Run `npx playwright show-report` to open the tests report in the browser
- If all tests pass:
  - Zip the assignment's folder
  - Submit the zipped file in the assignment form
# test-html-codespaces
