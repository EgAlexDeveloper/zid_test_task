# Set ZID app env

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available scripts

In your CMD install yarn in the global environment using
### `npm i -g yarn`

In the project directory to install all NPM packages, you can run:
### `yarn`

In the project directory to start the application, you can run:
### `yarn start`

In the project directory to build an AOT, you can run:
### `yarn build`


# ZID test app architecture

the main template architecture depending on MVW 
### MVVM
is used over Redux for shared data in the same VM
### MVC
is used to relate between Components and Logic Layers like API calling Layers
### MVP
is used in Forms using ms-react-reactive-forms, this plugin is a full reactive forms for react developed and deployed over NPM last year by me (for any support please be free to send me any time)


# ZID test app payment

all validations depending on REGEX
### check if entered card number is VISA or MASTER CARD or else and min and max length is 16 numbers only
### check if expiry month between 1 to 12 and year start from the current year and higher
### check if card holder name written in latin not arabic letters
### check CVV number in case entered by the user to be only numbers and max and min length is 3
### prevent letters in numbers inputs
### all integration API simulated

# ZID test app UI

### all template based on Bootstrap v5
### all UI elements created as abstracted components (card, card header, card footer, inputs)
### all styles written in SCSS https://sass-lang.com/ using BEM http://getbem.com/introduction/ 
