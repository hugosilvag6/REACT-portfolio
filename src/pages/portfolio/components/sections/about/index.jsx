import { useState } from "react"
import { TecnologiasData } from "../../../data/tecnologias"
import { CursosData } from "../../../data/cursos"
import * as C from "../styles"
import * as S from "./styles"

export const AboutSection = () => {
    const [verMais, setVerMais] = useState(false);
    const handleVerMais = () => {
        setVerMais(!verMais)
    }
    return (
        <C.SectionContainer>
            <C.SectionContent id="about">
                <C.SectionTitle>Sobre</C.SectionTitle>
                <S.AboutContainer>
                    <S.AboutLeftBox>
                        <S.AboutUpperBox>
                            <p>Meu nome é Hugo Silva Garcia. Tenho 26 anos, moro em Belo Horizonte, Minas Gerais, Brasil e sou desenvolvedor.</p>
                            <p>O desenvolvimento front-end foi meu foco principal por muito tempo, mas recentemente o desenvolvimento mobile também tem despertado uma enorme paixão em mim.</p>
                            <p>Graduado em Psicologia pela Pontifícia Universidade Católica de Minas Gerais. </p>
                            <p>Pós-graduando em Desenvolvimento Mobile pela Pontifícia Universidade Católica de Minas Gerais.</p>
                            <p>Apaixonado por tecnologia, admirador da lógica e fascinado pelo mundo da programação.</p>
                        </S.AboutUpperBox>
                        <S.AboutLowerBox>
                            <h2>Tecnologias</h2>
                            <S.TecBox>
                                {TecnologiasData.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.img} alt="icone tecnologia" />
                                        <p>{item.name}</p>
                                    </li>
                                ))}
                            </S.TecBox>
                        </S.AboutLowerBox>
                    </S.AboutLeftBox>
                    <S.AboutRightBox>
                        <h2>Cursos</h2>
                        <S.TableBox>
                            <S.CursosTable>
                                <thead>
                                    <tr>
                                    <th>Instituição</th>
                                    <th>Curso</th>
                                    <th>Data</th>
                                    {/* <th>Certificado</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                {verMais &&
                                    [...CursosData].reverse().map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.inst}</td>
                                            <td>{item.name}</td>
                                            <td>{item.data}</td>
                                            {/* <td><a href={item.link} target="_blank">Link</a></td> */}
                                        </tr>
                                    ))
                                }
                                {!verMais &&
                                    [...CursosData].reverse().slice(0,6).map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.inst}</td>
                                            <td>{item.name}</td>
                                            <td>{item.data}</td>
                                            {/* <td><a href={item.link} target="_blank">Link</a></td> */}
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </S.CursosTable>
                        </S.TableBox>
                        <S.CursosVerMais onClick={handleVerMais}>{!verMais ? 'Ver mais' : 'Ver menos'}</S.CursosVerMais>
                    </S.AboutRightBox>
                </S.AboutContainer>
            </C.SectionContent>
        </C.SectionContainer>
    )
}