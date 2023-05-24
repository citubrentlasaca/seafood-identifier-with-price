# Seafood Identifier with Price
This repository contains a project called Seafood Identifier with Price, which utilizes two ASP .NET Core WEB API projects to predict the seafood name and price. The frontend of the project was created using ReactJS and makes use of Axios to handle API requests.
## Features
Identification of seafood: The project leverages machine learning algorithms implemented in the ASP .NET Core WEB API projects to predict the name of the seafood based on the provided input data.
Price prediction: Along with identifying the seafood, the project also predicts the price of the identified seafood using the second ASP .NET Core WEB API project.
ReactJS frontend: The frontend of the project is built using ReactJS, providing a user-friendly interface for interacting with the Seafood Identifier with Price system.
API integration: Axios is used to handle API requests and communicate with the ASP .NET Core WEB API projects. This allows seamless integration between the frontend and backend components.
## Installation
Follow the steps below to set up the Seafood Identifier with Price project:
1. Clone this repository to your local machine using the following command:
```git clone https://github.com/citubrentlasaca/seafood-identifier-with-price.git```
2. Navigate to the ReactJS application directory.
3. Install the required dependencies for the ReactJS frontend. Run the following command:
```npm install```
## Usage
1. Open the Visual Studio solution.
2. Right-click on the solution and click properties.
3. Check Multiple startup projects and set Action for FishIdentifierAPI and FishPriceAPI to Start.
![image](https://github.com/citubrentlasaca/seafood-identifier-with-price/assets/111823676/7738ce33-20d5-4805-9bed-3c1770232d71)
4. Start the projects. FishIdentifierAPI will be running on https://localhost:52799/, while FishPriceAPI will be running on https://localhost:52805/.
5. Open the ReactJS application in Visual Studio Code.
6. Access the MainScreen.js component in ./src/Components/MainScreen.js.
7. Change the filePath variable to where you stored the seafood images.
![image](https://github.com/citubrentlasaca/seafood-identifier-with-price/assets/111823676/65b2bd32-4929-46c1-b921-97013aa9d948)
8. Start the ReactJS frontend. In the terminal, run the following command:
```npm start```
The frontend will start running on http://localhost:3000/, and you can access it in your web browser.
9. Use the Seafood Identifier with Price system by uploading a seafood image. The system will predict the seafood name and its price based on the uploaded image.
