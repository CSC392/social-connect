# Welcome to Social Connect!

Social Connect is a web-based gaming platform made with the intention to bring users (friends, family, or even strangers) closer together. Games on Social Connect are turn-based to avoid real-time lag from connectivity issues, and also include a chat feature so that players can interact while in gameplay.

This is a project developed as part of DSC Community Projects in Fall 2020.

---

## Table of contents

1. [Usage](#Usage)
2. [Installation to Local Machine](#Installation)
3. [Development](#Development)
4. [Authors](#Authors)
5. [Acknowledgements](#Acknowledgements)

## Usage

This project was deployed to Heroku in December of 2020.

The link to the Social Connect app can be found here: http://social-connect-app.herokuapp.com/

## Installation to Local Machine

**How to run Social Connect locally**

1. Clone and enter the github repo: https://github.com/CSC398/social-connect
2. Switch to `master`branch
3. Install node modules using ` npm install`
4. Build a production version of the app with `npm run build`
5. Start the node.js server with ` node server.js`
6. Navigate to `http://localhost:5000`on web browser

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

## Authors

Alana Hodge (2020) https://github.com/alanahodge

Alex Salem Lamouri (2020) https://github.com/salemalex11

Bhawna Sharma (2020) https://github.com/bhawna-sharmaa

Navya Gupta (2020) https://github.com/NavyaGupta

Neraj Manamperi (2020) https://github.com/NerajM

**Project Manager:** Emilie Robichaud (2020) https://github.com/emilierobichaud1

## Acknowledgements

Thank you to Emilie Robichaud, our team’s amazing project manager, and Professor Andi Bergen for supervision and guidance during the entirety of this project.
