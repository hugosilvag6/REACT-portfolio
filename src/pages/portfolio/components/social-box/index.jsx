import * as C from "./styles"
import GithubLogo from "../../assets/icon-github.png"
import InstagramLogo from "../../assets/icon-instagram.png"
import LinkedinLogo from "../../assets/icon-linkedin.png"

export const SocialBox = () => {
    return (
        <C.SocialBoxContainer>
            <a href="https://github.com/hugosilvag6" target="_blank"><img src={GithubLogo} alt="" /></a>
            <a href="https://www.instagram.com/hugosilvag6/" target="_blank"><img src={InstagramLogo} alt="" /></a>
            <a href="https://www.linkedin.com/in/hugosilvag6/" target="_blank"><img src={LinkedinLogo} alt="" /></a>
        </C.SocialBoxContainer>
    )
}