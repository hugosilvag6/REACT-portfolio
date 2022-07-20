import * as C from "./styles";
import { SocialBox } from "../social-box";

export const Footer = () => {
    return (
        <C.Footer>
            <C.FooterContainer>
                <C.FooterContent>
                    <p>&copy; 2022. <br/>Desenvolvido por Hugo Silva.</p>
                    <SocialBox />
                </C.FooterContent>
            </C.FooterContainer>
        </C.Footer>
    )
}

