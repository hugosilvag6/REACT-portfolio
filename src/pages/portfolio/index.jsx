import { Header } from "./components/header"
import { BannerSection } from "./components/bannerSection"
import { AboutSection } from "./components/sections/about"
import GlobalStyle from "./globalStyle"

export const Portfolio = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BannerSection />
            <AboutSection/>
        </>
    )
}