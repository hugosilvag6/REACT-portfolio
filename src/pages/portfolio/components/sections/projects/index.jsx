import * as C from '../styles'
import * as S from './styles'
import { ProjetosData } from '../../../data/projetos'
import { ProjetosAccordions } from './accordion'

export const ProjectsSection = () => {
    return(
        <C.SectionContainer>
            <C.SectionContent>
                <C.SectionTitle>Projetos</C.SectionTitle>
                <S.ProjetosBox>
                    {ProjetosData.map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt="icone tecnologia" />
                            <p>{item.name}</p>
                            <ProjetosAccordions label="Descrição" description={item.desc} />
                            <ProjetosAccordions label="Tecnologias" description={item.tech} />
                            <ProjetosAccordions label="Ver mais" description={item.desc} />
                        </li>
                    ))}
                </S.ProjetosBox>
            </C.SectionContent>
        </C.SectionContainer>
    )
}