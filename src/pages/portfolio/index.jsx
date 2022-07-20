import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { BannerSection } from "./components/bannerSection"
import { AboutSection } from "./components/sections/about"
import GlobalStyle from "./globalStyle"
import { ProjectsSection } from "./components/sections/projects"

export const Portfolio = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BannerSection />
            <AboutSection/>
            <ProjectsSection />
            <Footer />
        </>
    )
}