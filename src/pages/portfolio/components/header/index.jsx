import * as C from "./styles";
import { SocialBox } from "../social-box";

export const Header = () => {
    return (
        <C.Header>
            <C.HeaderContainer>
                <C.LogoNav>
                    <h1>Hugo</h1>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </nav>
                </C.LogoNav>
                <SocialBox />
            </C.HeaderContainer>
        </C.Header>
    )
}

