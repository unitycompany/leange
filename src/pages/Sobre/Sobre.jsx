import React, {useEffect} from 'react';
import WhatsAppButton from '../../components/Whatsapp';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import CustomButton from '../../components/button3';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SobreContainer = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 5%;


        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
    
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
                font-size: 1.6rem;
                margin-top: 12vh;
            }
        }

        & > h4 {
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > h4 b{
            font-weight: 400;
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 120%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;


        @media (max-width: 768px){
            width: 100%;
            height: auto;

            display: none;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;
    

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;
    

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`

const Espaco = styled.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`

const UnidadeContainer = styled.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
        margin-top: 5vh;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;


        @media (max-width: 768px){
            max-width: 100%;
            height: 30vh;
            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px 0 20px 0;
            object-fit: cover;
    

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px 0 10px 0;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 0px 20px 0px 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 0px 10px 0 10px;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;


        @media (max-width: 768px){
            width: 100%;
            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
    
            font-weight: 100;

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--comfortaa);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
    
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`

const DiferenciaisContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 0% 5%;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;


        @media (max-width: 768px){
            width: 100%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

            @media (max-width: 768px){
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width: 768px){
            width: 100%;
            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 20px 0 20px 0; 
        height: 50%;
        object-fit: cover;

        &:nth-child(2){
            border-radius: 0 20px 0 20px;
        }

        &:nth-child(4){
            border-radius: 20px 0px 20px 0px!important;
        }

        @media (max-width: 768px){
            width: 49%;
            height: 20vh;

        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 20px 0 20px;
       }

    }
`

const ContainerDuplo = styled.section`
    width: 100%;
    height: 150vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;


    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    

        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                height: 35vh;
                margin-top: -20px;
                margin-bottom: 50px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 40px;
                right: 20px;
                border-radius: 0 20px 0 20px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    


        @media (max-width: 768px){
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: 15px;
                height: 35vh;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;
        


                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 20px 0 20px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            line-height: 100%;
            text-align: right;
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
        
                    margin-top: 0px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 90%;
            font-family: var(--font--comfortaa);
            text-align: right;
            font-weight: 100;
            font-size: .9rem;
            line-height: 130%;

                @media (max-width: 768px){

                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`

const PublicoContainer = styled.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

        @media (max-width: 768px){
            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;


        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 20px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;
            margin-bottom: 20px;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 5px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px 0 30px 0;
        }
    }
`

const CTA = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--white);
        width: 35%;
        text-align: center;
        line-height: 100%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`

const Sobre = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);

    return (
        <>
            <Helmet>
                <title>Sobre Nós - Pousada Le Ange</title>
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429555/2_mvzbuj.svg" />
            </Helmet>
            <Espaco></Espaco>

            <WhatsAppButton />

            <SobreContainer>
                <div>
                    <h1 data-aos="fade-up" data-aos-delay="100">Pousada Le Ange</h1>
                    <h4 data-aos="fade-down" data-aos-delay="200">A pousada mais <b>Pet Friendly</b> do Brasil</h4>    
                    <p data-aos="fade-up" data-aos-delay="300">Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor.</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331472/cachorro_kcfx8n.webp" 
                    alt='foto da gaia, cachorra da pousada le ange'
                    loading='lazy'
                    data-aos="fade-right" data-aos-delay="500"
                    />
                </div>
            </SobreContainer>

            <UnidadeContainer>

                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_do_mar_d9fx7r.webp" 
                    alt='foto da le ande da mar' 
                    loading='lazy'
                    data-aos="fade-up" data-aos-delay="100"
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp" 
                    alt='foto da le ande da serra'
                    loading='lazy' 
                    data-aos="fade-down" data-aos-delay="100"
                    />
                </div>


                <div>
                    <h1 data-aos="fade-up" data-aos-delay="100">2 unidades,</h1>
                    <h4 data-aos="fade-down" data-aos-delay="200">2 refúgios únicos</h4>
                    <p data-aos="fade-up" data-aos-delay="300">A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar.</p>
                </div>

            </UnidadeContainer>

            <DiferenciaisContainer>

                <div>
                    <h1 data-aos="fade-up" data-aos-delay="100">Diferenciais</h1>
                    <p data-aos="fade-down" data-aos-delay="200">Somos mais que Pet Friendly, somos <b>Pet Lovers!</b> Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência.</p>
                </div>

                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331473/rede_no_mar_ajtwwv.webp" 
                    loading='lazy'
                    alt='rede na le ange mar' 
                    data-aos="fade-up" data-aos-delay="100"
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp" 
                    loading='lazy'
                    alt='hot tube na le ange serra' 
                    data-aos="fade-down" data-aos-delay="200"
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/divers%C3%A3o_na_serra_fzhl7y.webp"
                    loading='lazy' 
                    alt='casal se divertindo na le ange serra'
                    data-aos="fade-up" data-aos-delay="300"
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331479/natal_jwdzzh.webp" 
                    loading='lazy'
                    alt='foto da le ange com tema de natal' 
                    data-aos="fade-down" data-aos-delay="400"
                    />
                </div>

            </DiferenciaisContainer>

            <ContainerDuplo>
                
                <div>
                    <div>
                        <h1 data-aos="fade-down" data-aos-delay="100">Gastronomia</h1>
                        <p data-aos="fade-up" data-aos-delay="200">Oferecemos um serviço <i>all inclusive</i> que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais.</p>
                    </div>
                    <div>
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp" 
                        loading='lazy'
                        alt='foto da noite de pizzas na pousada le ange' 
                        data-aos="fade-up" data-aos-delay="300"
                        />
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp" 
                        loading='lazy'
                        alt='foto da noite de risotos na pousada le ange' 
                        data-aos="fade-down" data-aos-delay="400"
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331477/cachorro_olhando_pra_camera_ndannw.webp"
                        loading='lazy'
                        alt='foto do cachorro sorrindo para camera' 
                        data-aos="fade-up" data-aos-delay="100"
                         />
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp" 
                        loading='lazy'
                        alt='uma mulher e dois cachorros na pousada le ange' 
                        data-aos="fade-down" data-aos-delay="200"
                        />
                    </div>
                    <div>
                        <h1 data-aos="fade-up" data-aos-delay="300">Espaços compartilhados</h1>
                        <p data-aos="fade-down" data-aos-delay="400">Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório.</p>
                    </div>
                </div>

            </ContainerDuplo>

            <PublicoContainer>

                <div>
                    <div>
                        <h1 data-aos="fade-up" data-aos-delay="150">Suítes</h1>
                        <p data-aos="fade-down" data-aos-delay="300">Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável.</p>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" data-aos-delay="400">Convivência</h1>
                        <p data-aos="fade-down" data-aos-delay="500">Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos.</p>
                    </div>
                </div>
                
                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_50,w_1500/v1732037857/IMG_0254_wdrn4v.webp" 
                    alt='foto do quadro de cachorro na pousada le ange mar'
                    data-aos="flip-left" data-aos-delay="600"
                    />
                </div>

            </PublicoContainer>

            <CTA>
                <h1 data-aos="fade-up" data-aos-delay="200">Venha viver essa experiência com a gente!</h1>
                <CustomButton 
                text="Reservar agora!"
                textColor="var(--color--white)"
                backgroundColor="transparent"
                borderColor="var(--color--white)"
                iconColor="var(--color--white)"
                hoverBackgroundColor="var(--color--white)"
                hoverBorderColor="var(--color--white)"
                hoverColor="var(--color--white)"
                hoverIconColor="var(--color--white)"
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                data-aos="fade-in" data-aos-delay="500"
                />
            </CTA>

        </>
    );
};

export default Sobre;
