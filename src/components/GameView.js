import React from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";

export const GameView = (props) => {
  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>
      <Chessboardjsx position="start" />
    </div>
  );
};
