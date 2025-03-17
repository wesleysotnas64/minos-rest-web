import {LoginArea, SplashArtArea, PageContainer, LogoArea, LoginInputArea, LoginInput} from "./Login.style";
import bgImage from "../../assets/img/restaurant01.jpg"
import iconLogin from "../../assets/icon/icon-login.svg"

function Login() {

    return (
      <>
        <PageContainer>
            <SplashArtArea>
                <img src={bgImage} />
            </SplashArtArea>

            <LoginArea>
                <LogoArea>

                </LogoArea>

                <h1>Login</h1>

                <LoginInputArea>
                    <label>Usuário</label>
                    <LoginInput />

                    <label>Senha</label>
                    <LoginInput type="password"/>
                </LoginInputArea>

                <button>
                    <img src={iconLogin} />
                </button>

                <footer>
                    <h2>MinOS-Rest</h2>
                    <p>Minimal Operational System Restaurant</p>
                </footer>
            </LoginArea>
        </PageContainer>
      </>
    )
  }
  
  export default Login