import { React, Component } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateComponent(props) {
  const navigate = useNavigate();
  return (
    <div>
      <props.element navigate={navigate}></props.element>
    </div>
  );
}

