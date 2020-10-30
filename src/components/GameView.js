import React, { Component } from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";


import MoveValidation from "./MoveValidation"



class validation extends Component {
  render() {
    return (
      <div>
          <MoveValidation/>
      </div>
    );
  }
}

export default validation;

export const GameView = (props) => {
  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>
      {/* <Chessboardjsx position="start" /> */}
      <MoveValidation/>
    </div>
  );
};
