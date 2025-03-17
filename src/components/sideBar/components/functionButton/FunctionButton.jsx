import { MainContainer } from "./FunctionButton.styles";

function FunctionButton({ label }) {
  return (
    <MainContainer>
      <label>{label}</label>
    </MainContainer>
  );
}

export default FunctionButton;
