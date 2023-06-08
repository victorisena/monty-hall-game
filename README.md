# Monty Hall Game

The project is based on the Monty Hall game, a probability puzzle, and aims to develop an application using Next.js that allows users to play the game and improve their decision-making skills.

## Overview

The "Monty Hall Game" project is a personal project aimed at creating an interactive application that replicates the famous Monty Hall game. The application challenges users to choose the correct door among three options and win a prize. The game is designed to illustrate the concept of conditional probability and demonstrate the advantage of switching doors.

## Features

- Door selection: Users will be presented with three doors and asked to select one of them.
- Prize distribution: Behind one of the doors, there will be a prize, while the other doors will contain nothing.
- Switching option: After the user selects a door, they will be given the choice to switch their selection to another door.
- Result feedback: The application will provide immediate feedback to the user, indicating whether they have won the prize or not.

## Architecture

The "Monty Hall Game" application follows the Model-View-Controller (MVC) architectural pattern to ensure a clear separation of concerns and facilitate code maintainability. The application's architecture consists of the following components:

- Model: The model component represents the data and business logic of the application. It encapsulates the game rules, door selections, and prize distribution functionalities. In this project, the model utilizes local variables to store and manage the game state, ensuring simplicity and ease of maintenance.
- View: The view component focuses on the presentation layer of the application. It provides a user-friendly interface for interacting with the game and displaying the doors. In this architecture, the view is responsible for rendering the game UI and receiving user input.
- Controller: The controller acts as an intermediary between the model and the view components. It handles user interactions, processes input from the view, and updates the model accordingly. The controller also ensures synchronization between the model and the view, keeping the application state consistent.

## Getting Started

To run the "Monty Hall Game" application locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/victorisena/monty-hall-game.git`
2. Install Node.js: Download and install Node.js from the official website.
3. Install project dependencies: Open a terminal, navigate to the project directory, and run `npm install` to install the required dependencies.
4. Start the development server: Run `npm run dev` in the terminal to start the Next.js development server.
5. Access the application: Open your web browser and visit `http://localhost:3000` to access the "Monty Hall Game" application.

## Contact

If you have any questions, suggestions, or feedback regarding the "Monty Hall Game" project, please feel free to connect with me:

- Email: victorigorsena@gmail.com
- LinkedIn: [linkedin.com/in/victor-igor-sena](https://www.linkedin.com/in/victor-igor-sena/)
- Twitter: [@victorisena](https://twitter.com/victorisena)
