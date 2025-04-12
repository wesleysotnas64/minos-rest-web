import { IconArea, TitleArea } from "./ContentButton.style";
import { MainContainer } from "./ContentButton.style";

function ContentButton({ title }) {
    return (
        <MainContainer>
            <IconArea>
            
            </IconArea>

            <TitleArea>
            <label>{title}</label>
            </TitleArea>
        </MainContainer>
    );
}

export default ContentButton

