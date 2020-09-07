# CarSales Coding Challenge
Mini Web-Application for CarSales technical assessment.

## Aim/Task Provided
The aim of this project was to create a vehicle management system that allows users to add cars to the system.

## Prerequisites
You will need to have the following installed to run this project:
- Visual Studio
- .NET Core SDK
- Node.js

## Planning
I planned this project to be developed in two phases. Phase 1 involved development of the user interface where I made sure that there were reusable components. Phase 2 involved 
the development of the models and API.

## Implementation
Keeping in view the specification requirements needed, the project has the following use cases:
- Create Car

This project has been developed as a single page application using .NET Core 3.1 for data persistence and web API and React for the user interface. Bootstrap has been used to make sure the application is responsive.

It has been assumed that all the fields are required and validation on the "Doors" and "Wheels" attributes which are integers have been done on the input.
The input only accepts numeric values as valid input where as the rest of the fields are strings. Appropriate error messages have been shown for the validation of each input field
and an error message has been shown should the data not be added. Considering the task requirements at hand and for simplicity purposes I decided to persist the data in memory 
rather than in a database (which would have been easier in my opinion) similarly, I have kept the API controller functionality in one project however, 
in a production environment I would use a database to store the input from user and I would move the API controller and data persistence out into a separate project. The user
interface would only reference the API and the API would interact with the database.

Should the need ever arise for further use cases to be implemented, this can be done with ease as the structure of the project allows for further use cases to be implemented such as:
- Create Boat
- Create Truck
- Create Bike



## Results
The user can successfully add a car into the application while there have been some issues remaining regarding the data persistence the user can easily add a car into the system.

## References
- [Get started with EF Core in an ASP.NET MVC web app](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro?view=aspnetcore-3.1)
- [Dependency injection into controllers in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/dependency-injection?view=aspnetcore-3.1)
