import { FunctionsArea, MainContainer } from "./SideBar.style"
import FunctionButton from "./components/functionButton/FunctionButton"

function SideBar() {

  return (

    <MainContainer>
        <h1>Administrador</h1>
        <label>Bem-vindo(a) Wesley Santos</label>

        <FunctionsArea>
            <FunctionButton label="Gerenciar" />
            <FunctionButton label="Mesas" />
            <FunctionButton label="Em breve..." />
        </FunctionsArea>

        <footer>
            <h2>MinOS-Rest</h2>
            <p>Minimal Operational System Restaurant</p>
        </footer>
    </MainContainer>
  )
}

export default SideBar
