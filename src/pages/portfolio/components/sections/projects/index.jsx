import * as C from '../styles'
import * as S from './styles'
import { ProjetosData } from '../../../data/projetos'
import { ProjetosAccordions } from './accordion'
import { useState } from 'react'
import { useEffect } from 'react'

export const ProjectsSection = () => {
    const maxProjects = 3
    const [shownProjects, setShownProjects] = useState([0, maxProjects])
    const handleShownProjects = () => {
        setShownProjects((prev) => {
            if (prev[1]>=ProjetosData.length) return [0, maxProjects]
            return [prev[0]+1, prev[1]+1]
        })
    }
    return(
        <C.SectionContainer>
            <C.SectionContent style={{paddingBottom: "100px"}} id="projetos">
                <C.SectionTitle>Projetos</C.SectionTitle>
                <S.ProjetosControllableBox>
                <S.ProjetosControl left onClick={handleShownProjects}>&#5176;</S.ProjetosControl>
                <S.ProjetosBox>
                    {ProjetosData.slice(shownProjects[0],shownProjects[1]).map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt="icone tecnologia" />
                            <p>{item.name}</p>
                            <ProjetosAccordions label="Descrição" description={item.desc} />
                            <ProjetosAccordions label="Tecnologias" description={item.tech} />
                            <ProjetosAccordions label="Ver mais" description={item.desc} />
                        </li>
                    ))}
                </S.ProjetosBox>
                <S.ProjetosControl onClick={handleShownProjects}>&#5171;</S.ProjetosControl>
                </S.ProjetosControllableBox>
            </C.SectionContent>
        </C.SectionContainer>
    )
}