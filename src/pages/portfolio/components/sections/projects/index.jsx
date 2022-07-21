import * as C from '../styles'
import * as S from './styles'
import { ProjetosData } from '../../../data/projetos'
import { ProjetosAccordions } from './accordion'
import { useState } from 'react'
import GithubLogo from "../../../assets/icon-github.png"

export const ProjectsSection = () => {
    const maxProjects = 3
    const [shownProjects, setShownProjects] = useState([0, maxProjects])
    const [shownProjectsMobile, setShownProjectsMobile] = useState(ProjetosData.length-1)
    const handleShownProjects = (direction) => {
        if (direction == "right") {
            setShownProjects((prev) => {
                if (prev[1]>=ProjetosData.length) return [0, maxProjects]
                return [prev[0]+1, prev[1]+1]
            })
        } else {
            setShownProjects((prev) => {
                if (prev[0]<=0) return [(ProjetosData.length-maxProjects), ProjetosData.length]
                return [prev[0]-1, prev[1]-1]
            })
        }
    }
    const handleShownProjectsMobile = (direction) => {
        if (direction == "right") {
            if (shownProjectsMobile <= 0) {
                setShownProjectsMobile(ProjetosData.length-1)
            } else {
                setShownProjectsMobile(shownProjectsMobile-1)
            }
        } else {
            if (shownProjectsMobile >= ProjetosData.length-1) {
                setShownProjectsMobile(0)
            } else {
                setShownProjectsMobile(shownProjectsMobile+1)
            }
        }
    }
    return(
        <C.SectionContainer>
            <C.SectionContent style={{paddingBottom: "50px"}} id="projetos">
                <C.SectionTitle>Projetos</C.SectionTitle>
                <S.ProjetosControllableBox>
                    <S.ProjetosControl left onClick={() => {handleShownProjects("left"); handleShownProjectsMobile("left")}}>&#5176;</S.ProjetosControl>
                        <S.ProjetosBox>
                        {(window.innerWidth>800) &&
                            [...ProjetosData].reverse().slice(shownProjects[0],shownProjects[1]).map((item, index) => (
                                <li key={index}>
                                    <S.ProjectImage src={item.img} />
                                    <p>{item.name}</p>
                                    <ProjetosAccordions label="Descrição" description={item.desc} />
                                    <ProjetosAccordions label="Tecnologias" description={item.tech} />
                                    <span>
                                        <a href={item.git} target="_blank">
                                            Github
                                            <S.GithubLogo src={GithubLogo}/>
                                        </a>
                                    </span>
                                </li>
                            ))
                        }
                        {(window.innerWidth<=800) &&
                            <li>
                                <S.ProjectImage src={ProjetosData[shownProjectsMobile].img} />
                                <p>{ProjetosData[shownProjectsMobile].name}</p>
                                <ProjetosAccordions label="Descrição" description={ProjetosData[shownProjectsMobile].desc} />
                                <ProjetosAccordions label="Tecnologias" description={ProjetosData[shownProjectsMobile].tech} />
                                <span>
                                    <a href={ProjetosData[shownProjectsMobile].git} target="_blank">
                                        Github
                                        <S.GithubLogo src={GithubLogo}/>
                                    </a>
                                </span>
                            </li>
                        }
                        </S.ProjetosBox>
                    <S.ProjetosControl onClick={() => {handleShownProjects("right"); handleShownProjectsMobile("right")}}>&#5171;</S.ProjetosControl>
                </S.ProjetosControllableBox>
            </C.SectionContent>
        </C.SectionContainer>
    )
}