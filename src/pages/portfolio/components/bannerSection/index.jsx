import * as C from "./styles";
import Banner from "../../assets/banner2.jpg"
import { SocialBox } from "../social-box";

export const BannerSection = () => {
    return (
        <>
            <C.BannerSection>
                <C.BannerText>
                    <h1>Olá, eu sou <span>Hugo</span></h1>
                    <h2>
                        <span>Brazil</span>
                        <span>Belo Horizonte - MG</span>
                    </h2>
                    <SocialBox />
                </C.BannerText>
            </C.BannerSection>
        </>
    )
}

