import * as C from "./styles";
import { SocialBox } from "../social-box";

export const Header = () => {
    return (
        <C.Header>
            <C.HeaderContainer>
                <C.LogoNav>
                    {/* <h1>Portfolio</h1> */}
                    <nav>
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#projetos">Projects</a>
                        {/* <a href="#">Contact</a> */}
                    </nav>
                </C.LogoNav>
                {(window.innerWidth>800) &&
                    <SocialBox />
                }
            </C.HeaderContainer>
        </C.Header>
    )
}

