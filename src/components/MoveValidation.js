import React, { Component } from "react";
import Chessboardjsx from "chessboardjsx";
import Chess from "chess.js";
import PropTypes from "prop-types";
//133, 105, 45 colours

//Citation of Chessboardjsx move validation demo code (as suggested by Emilie)
// Title: test-chessboardjsx/WithMoveValidation.js
// Author: William Bashelor
// Date: Sept 3rd, 2019
// Code version: v2.4.2
// Availability: https://codesandbox.io/s/x332zqpkl4?file=/src/integrations/WithMoveValidation.js

class chessPlay extends Component {
    static propTypes = { children: PropTypes.func };
  
    componentDidMount() {
        this.game = new Chess();
    }
    state = {
      fen: "start",
      dropSquareStyle: {},
      squareStyles: {},
      pieceSquare: "",
      square: "",
      history: []
    };
  
    // keep clicked square style and remove hint squares
    removeHighlightSquare = () => {
      this.setState(({ pieceSquare, history }) => ({
        squareStyles: squareStyling({ pieceSquare, history })
      }));
    };
  
    // show possible moves
    highlightSquare = (sourceSquare, squaresToHighlight) => {
      const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
        (a, c) => {
          return {
            ...a,
            ...{
              [c]: { background: "radial-gradient(circle, #C8BFE7 36%, transparent 40%)", borderRadius: "50%" }
            },
            ...squareStyling({
              history: this.state.history,
              pieceSquare: this.state.pieceSquare
            })
          };
        },
        {}
      );
  
      this.setState(({ squareStyles }) => ({
        squareStyles: { ...squareStyles, ...highlightStyles }}));
    };
  
    onDrop = ({ sourceSquare, targetSquare }) => {
      // see if the move is legal
      let move = this.game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q" // always promote to a queen for example simplicity
      });
  
      // illegal move
      if (move === null) return;
      this.setState(({ history, pieceSquare }) => ({
        fen: this.game.fen(),
        history: this.game.history({ verbose: true }),
        squareStyles: squareStyling({ pieceSquare, history })
      }));
    };
  
    onMouseOverSquare = square => {
      // get list of possible moves for this square, return if there are no moves available.
      let moves = this.game.moves({square: square, verbose: true });
      if (moves.length === 0) return;
  
      let squaresToHighlight = [];
      for (var i = 0; i < moves.length; i++) {
        squaresToHighlight.push(moves[i].to);
      }
  
      this.highlightSquare(square, squaresToHighlight);
    };
  
    onMouseOutSquare = square => this.removeHighlightSquare(square);
  
    onDragOverSquare = square => {
      this.setState({
        dropSquareStyle:
          square === "e4" || square === "d4" || square === "e5" || square === "d5"
            ? { backgroundColor: "C8BFE7" }
            : { boxShadow: "inset 0 0 1px 4px #C8BFE7" }
      });
    };
  
    onSquareClick = square => {
      this.setState(({ history }) => ({
        squareStyles: squareStyling({ pieceSquare: square, history }),
        pieceSquare: square
      }));
  
      let move = this.game.move({
        from: this.state.pieceSquare,
        to: square,
        promotion: "q"
      });
  
      // illegal move
      if (move === null) return;
  
      this.setState({
        fen: this.game.fen(),
        history: this.game.history({ verbose: true }),
        pieceSquare: ""
      });
    };
  
    onSquareRightClick = square =>
      this.setState({
        squareStyles: { [square]: { backgroundColor: "C8BFE7" } }
      });
  
    render() {
      const { fen, dropSquareStyle, squareStyles } = this.state;
  
      return this.props.children({
        squareStyles,
        position: fen,
        onMouseOverSquare: this.onMouseOverSquare,
        onMouseOutSquare: this.onMouseOutSquare,
        onDrop: this.onDrop,
        dropSquareStyle,
        onDragOverSquare: this.onDragOverSquare,
        onSquareClick: this.onSquareClick,
        onSquareRightClick: this.onSquareRightClick
      });
    }
  }
  
  export default function MoveValidation() {
    return (
      <div>
        <chessPlay>
          {({
            position,
            onDrop,
            onMouseOverSquare,
            onMouseOutSquare,
            squareStyles,
            dropSquareStyle,
            onDragOverSquare,
            onSquareClick,
            onSquareRightClick
          }) => (
            <Chessboardjsx
              id="chessPlay"
              width={500}
              position={position}
              onDrop={onDrop}
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              boardStyle={{
                borderRadius: "5px",
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
              }}
              squareStyles={squareStyles}
              dropSquareStyle={dropSquareStyle}
              onDragOverSquare={onDragOverSquare}
              onSquareClick={onSquareClick}
              onSquareRightClick={onSquareRightClick}
            />
          )}
        </chessPlay>
      </div>
    );
  }
  
  const squareStyling = ({ pieceSquare, history }) => {
    const sourceSquare = history.length && history[history.length - 1].from;
    const targetSquare = history.length && history[history.length - 1].to;
  
    return {
      [pieceSquare]: { backgroundColor: "C8BFE7" },
      ...(history.length && {
        [sourceSquare]: {
          backgroundColor: "C8BFE7"
        }
      }),
      ...(history.length && {
        [targetSquare]: {
          backgroundColor: "C8BFE7"
        }
      })
    };
  };