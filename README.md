# Welcome to Social Connect!

Social Connect is a web-based gaming platform made with the intention to bring users (friends, family, or even strangers) closer together. Games on Social Connect are turn-based to avoid real-time lag from connectivity issues, and also include a chat feature so that players can interact while in gameplay.

This is a project developed as part of DSC Community Projects in Fall 2020.

---

## Table of contents

1. [Usage](#Usage)
2. [Installation](#Installation)
3. [Deployment](#Deployment)
4. [Development](#Development)
5. [Challenges](#Challenges)
6. [Improvements](#Improvements)
7. [Next Steps](#Next-Steps)
8. [Authors](#Authors)
9. [Acknowledgements](#Acknowledgements)

## Usage

This project was deployed to Heroku in December of 2020.

The link to the Social Connect app can be found here: http://social-connect-app.herokuapp.com/

## Installation

**Prerequisites**

- Install Node.js
- Version >= 10.18 (Includes npm and npx)
- Install create-react-app (optional)

**How to run**

1. Clone and enter the github repo: https://github.com/CSC398/social-connect
2. Switch to `master`branch
3. Install node modules using ` npm install`
4. Build a production version of the app with `npm run build`
5. Start the node.js server with ` node server.js`
6. Navigate to `http://localhost:PORT`on web browser

```
 $ npm run build

> social-connect@1.0.0 build /social-connect
> react-scripts build

Creating an optimized production build...
Compiled without warnings.

File sizes after gzip:

226.99 KB build/static/js/2.a5df9fc1.chunk.js
3.98 KB build/static/js/main.5fcda821.chunk.js
777 B build/static/js/runtime-main.d1e23670.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

npm install -g serve
serve -s build

Find out more about deployment here:

https://cra.link/deployment
```
```
$ node server.js
Server started on port 5000
```
## Deployment

**Prerequisites**
1. Clone directory
`$ git clone https://github.com/CSC398/social-connect/`
2. cd into directory
`$ cd social-connect`
3. Switch to master branch
`$ git checkout master`

**How to deploy**
1. Create a Heroku account
2. Install Heroku Command Line Interface (CLI)
`$ brew install heroku/brew/heroku`
3. Login to Heroku through your terminal 
`$ heroku login`
4. Create an app on Heroku with the create-react-app buildpack 
`$ heroku create <app_name> --buildpack https://github.com/mars/create-react-app-buildpack`
5. Deploy your app 
`$ git push heroku master`
6. Scale your app
`$ heroku ps:scale web=1`
7. Open your app
`$ heroku open`

## Development

Social Connect is built using `React.js` and `CSS makestyles` styling to create a functional user interface for gameplay.

This project uses routers to switch to all components in this project with the suffix “Page” (i.e. ./HomePage, ./GamePage and ./PlayPage). This project also uses conditional rendering to render all components with “View” as the suffix.

Node modules are used for major UI components, including the text-chat UI which utilizes the `MUI` and `ChatController` from the [Chat-UI-Reac](https://www.npmjs.com/package/chat-ui-react)t library.
All other stylized UI components, including buttons and dialog buttons are imported and stylized from [Material-UI](https://material-ui.com/).

The Chess game itself is built using two components. [Chessboard.js](https://www.npmjs.com/package/chessboardjs) is a standalone Javascript chess board that is designed to act only as a viewable/UI component.
[Chess.js](https://github.com/jhlywa/chess.js/blob/master/README.md), a Javascript chess library is used as the game engine for the chess game. Chess.js includes move generation/validation, check/checkmate/stalemate detection and piece placement/movement. As it does not include the UI, Chessboard.jsx and Chess.js are coupled to create the chess game and interface that the user can interact with.

The players are connected through a socket, implemented using [npm socket.io](https://www.npmjs.com/package/socket.io), which allows hosts of games to open a connection, players to join the game via the socket using join code validation, and to communicate with each other via text-chat across the UI of the chat interface.

Once players are connected in game play, the state of the game is captured through the Chess.js state-variable chess.fen(), as per the Chess.js game engine, and is updated as players move pieces on the board. Once a piece has been moved by one player, the state of the board is passed through the socket to the other player and their Chessboard is updated accordingly, while the Chess.js game engine keeps track of which player’s turn it is. React hooks are used to identify, use and reuse stateful logic about the major components.

---

## Challenges

**Technical Challenges**

**Non-Techincal Challenges**
The entire development of this project was done remotely while the development team practiced social distancing
as per imposed regulations due to the ongoing COVID-19 pandemic (2020).
This created difficulty in clear communication while the developers worked asynchronously.
Additionally, developers were continuously working on other projects/assignments due to conflicts with school and work throughout the
development of the project, which made scheduling and time management difficult.

## Improvements

**Potential Improvements**

- Pawn is automatically promoted to queen upon reaching other side of the board. User should have a choice of chess piece to change pawn to.
- Add accessibility features and accessibility compatibility throughout the project
- Add highlighting when hovering over chess piece to show possible moves for piece.
- Have responsive window sizing, so that entire view scales with browser window size
- Join Button in the Join Game dialogue box/ pop-up should span width of dialogue box


## Next Steps
- Add new turn-based games (e.g. Chess, Ludo, etc.)
- Include a browse feature, so that users can browse public/open games and join through lobby
- Add video chat feature


## Authors

Alana Hodge (2020) https://github.com/alanahodge

Alex Salem Lamouri (2020) https://github.com/salemalex11

Bhawna Sharma (2020) https://github.com/bhawna-sharmaa

Navya Gupta (2020) https://github.com/NavyaGupta

Neraj Manamperi (2020) https://github.com/NerajM

**Project Manager:** Emilie Robichaud (2020) https://github.com/emilierobichaud1

## Acknowledgements

Thank you to Emilie Robichaud, our team’s amazing project manager, and Professor Andi Bergen for supervision and guidance during the entirety of this project.
