# Pair Employees
## About

This program allows to divide employees into team members of two.
In order for people to be with each other on the team they must fulfil 
the following criteria:
* People who work together in one team can not be together
* People of the same age can not be together
* People living in the same district of their city can not be together
* People with visual impairment can not be together
If there is odd number of employees it is possible that one person will be alone in team.

## Method used to solve the problem
The Forwardcheckig algorithm was used to solve the problem identified as
CSP problem (Constraint Satisfaction Problem).
This algorithm, testing various combinations of creating pairs with a 
possible solution, will find it for sure.

Due to the large number of restrictions imposed on how a team is to be built, 
program is able to complete such a division in a finite period
for a maximum of 14 people.

## Used Technologies</br>
This program was written using JavaScript library React.  
Pure CSS was used to style components.  
To make class names and animation names scoped 
locally by default throughout the whole React application
[CSS Modules](https://github.com/css-modules/css-modules) 
was used.

##Changing Employees Number
Employees data is generated using Faker.js. 
To change number of generated employees go to /src/data/config.js.

## Installation and Usage
### Node modules
First step to make the application to work is to install node modules.  
In developer console install node modules by typing:  
#### npm users
```
npm install
``` 
#### yarn users
```
yarn
``` 
****Remember: the condition to install the required dependencies is to be in the same directory as package.json****
### Start using 
**After going through all of the above steps** run application in a browser 
by typing below command in developer console
#### npm users
```
npm start
``` 
#### yarn users
```
yarn start
``` 
