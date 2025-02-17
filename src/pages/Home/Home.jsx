import React from 'react';
import { useEffect } from 'react';
import { FaRulerCombined, FaSnowflake, FaBed, FaBath, FaTv, FaFire } from 'react-icons/fa';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BackgroundVideo from '../../components/video';
import SliderComponent from '../../components/sliderComponent';
import TitlePousadas from '../../components/titlePousadas';
import CoverflowSliderComponent from '../../components/effectSlider';
import ImageCarouselSliderComponent from '../../components/infinitiSlider';
import EventCardCarousel from '../../components/cardSlider';
import Footer from '../../components/footer';
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import SliderAcomodaHome from '../../components/sliderAcomodaHome';
import Button from '../../components/button';
import WhatsAppButton from '../../components/Whatsapp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const imagesSerra = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp", alt: 'Mulher na rede', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/pousada-de-cima_hum4rw.webp", alt: 'Foto da pousada le ange vista de cima', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp", alt: '2 cachorros na piscina', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp", alt: 'Foto da pousada vista de baixo', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp", alt: 'Foto da sala de estar da pousada le ange serra', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp", alt: '2 cachorros na cama no meio do quintal', loading: "lazy" }
];

const imagesMar = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/foto_da_pousada_e3djry.webp', alt: 'Foto da pousada le ange mar',loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp', alt: '2 pessoas na rede na pousada le ange mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/churrasqueira_w7akaf.webp', alt: 'Foto de churrasco', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp', alt: 'Cachorro olhando para a câmera', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp', alt: 'Pousada le ange mar vista de cima', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1732218845/Imagem-do-WhatsApp-de-2024-11-21-%C3%A0_s_-16.51.10_5fc34922_bexmr2.webp', alt: 'Sala de estar na le ange mar com o quadro na parede', loading: "lazy" }
];

const imagesCarrossel01 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/mulher-na-rede_bj91d1.webp', alt: 'Pessoa na rede', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/cachorro-na-piscina_mnkqrv.webp', alt: '2 cachorros na piscina', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/sala-de-estar_xuxiou.webp', alt: 'Sala de estar na le ange serra', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/sossego_1_jsshhu.webp', alt: 'Hot Tube na le ange serra', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/casal_comendo_no_mar_nkkwkl.webp', alt: '2 pessoas bebendo na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/sossego_d2asun.webp', alt: '2 pessoas na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327001/sala-de-estar_blaa0x.webp', alt: 'Sala de estar da le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327606/por_do_sol_wmwzur.webp', alt: 'Por do sol na le ange', label: 'Le Ange Serra', loading: "lazy" },
];

const imagesCarrossel02 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328215/suite_ajrwh0.webp', alt: 'Foto do quarto na le ange', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328215/churrasqueira_feg3jy.webp', alt: 'Foto de churrasqueira na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp', alt: 'Cachorro com a cabeça recostada na mão do tutor', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/mulher_e_cachorro_na_piscina_wwgxkq.webp', alt: 'Uma pessoa e um cachorro na piscina', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/2_ta%C3%A7as_ocgwdi.webp', alt: '2 taças com um fundo de por do sol', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp', alt: '2 cachorros em uma cama no meio do jardim', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/quadro_de_cachorro_s1mnbq.webp', alt: 'Foto do quadro de cachorro na le ange mar', label: 'Le Ange Serra', loading: "lazy" },
];

const StyledContainerPousadas = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;

    &:nth-child(2){
        @media (max-width: 768px){
            flex-direction: column;
            position: relative!important;
            z-index: -100!important;
        
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        position: relative;
        z-index: -100!important;
    
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`

const StyledPousadas = styled.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`

const StyledPousadasTitle = styled.aside `
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;

        & > b{
            font-weight: 300;
        }

        @media (max-width: 768px){
            font-size: 22px;
            width: 100%;
            margin-top: 0vh;
            height: auto;

        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`

const acomodaHome = [
    {
      id: "Serra#suite1",
      title: "Suíte Superior 1",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328712/suiteSerra1_wm28o4.webp",
      features: [
        { icon: <FaRulerCombined />, text: "52m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <FaTv />, text: "Smart TV com canais a cabo" },
        { icon: <FaFire />, text: "Lareira" }
      ]
    },
    {
        id: "Serra#suite2",
        title: "Suíte Standard 2",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1732214237/foto2_pn8axc.webp",
        features: [
          { icon: <FaRulerCombined />, text: "52m²" },
          { icon: <FaSnowflake />, text: "Ar condicionado" },
          { icon: <FaBed />, text: "Cama king size" },
          { icon: <FaBath />, text: "Banheira" },
          { icon: <FaTv />, text: "Smart TV com canais a cabo" },
          { icon: <FaFire />, text: "Lareira" }
        ]
      },
    {
      id: "Serra#suite6",
      title: "Suíte Master 6",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328713/suiteSerra2_aksiu9.webp",
      features: [
        { icon: <FaRulerCombined />, text: "93m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <SiApachecouchdb />, text: 'Couch lounge' },
        { icon: <TbBrandWindows />, text: 'Bay window' }
      ]
    },
    {
        id: "Mar#suite6",
        title: "Suíte Standard 6",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar2_qlgel2.webp",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
    {
        id: "Mar#suite2",
        title: "Suíte Standard 2",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar1_zu3lmc.webp",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
    {
        id: "Serra#suite10",
        title: "Suíte Master 10",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/1_e6cnxy.webp",
        features: [
            { icon: <FaRulerCombined />, text: "80m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <MdChair />, text: 'Recamier e poltrona de leitura' },
            { icon: <SiApachecouchdb />, text: 'Couch lounge' },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
  ];

const StyledAcomoda = styled.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    position: relative;
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        clip-path: polygon(1% 1%, 99% 1%, 99% 85%, 1% 85%);
    }

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`

const slideDataCoverflow = [
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp',
        title: '100% Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar'
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/cachorro_na_praia_pmqyi4.webp',
        title: 'Praia',
        description: 'Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp',
        title: 'Sossego',
        description: 'A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp',
        title: 'Piscinas',
        description: 'Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp',
        title: 'Cozinha',
        description: 'Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/ofuros_kyjddp.webp',
        title: 'Ofurôs',
        description: 'São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp',
        title: 'Diversão',
        description: 'Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/bar_xl6dvc.webp',
        title: 'Bar',
        description: 'Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp',
        title: 'Adega',
        description: 'Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp',
        title: 'Suítes',
        description: 'Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
];

const StyledEstrutura = styled.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }

    &::before {
        background-image: url('../../../public/background/background_white.webp');
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`

const StyledEstruturaTitle2 = styled.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`

const StyledEstruturaTitle = styled.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`

const StyledEstruturaSubTitle = styled.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    opacity: 0.7;
    font-family: 200;
    font-size: .9rem;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`

const events = [
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp',
        title: 'Noite de Risotos',
        dateRange: '29/11/2024 até 01/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '30/11 - Noite de Risostos' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp',
        title: 'Noite das pizzas',
        dateRange: '06/12/2024 até 08/12/2024 (3 diárias)',
        features: [
            { icon: <FaUtensils />, text: '07/12 - Noite das pizzas' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp',
        title: 'Frutos do Mar',
        dateRange: '13/12/2024 até 15/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '14/12 - Frutos do Mar' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp',
        title: 'Fique 3 pague 4',
        dateRange: 'Segunda-feira a Sexta-feira',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '538,90',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp',
        title: 'Pacote de Natal',
        dateRange: '21/12/2024 até 25/12/2024 (4 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '918,40',
        discount: 25,
    },
];

const StyledCarrosselSection = styled.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`

const StyledContainerEvents = styled.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5%;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`

const StyledColorBGreen = styled.b`
    color: var(--color--green);
`

const StyledColorBBlue = styled.b`
    color: var(--color--blue);
`

const StyledButtonCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top: -10vh;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        margin-bottom: 5vh;
        margin-top: -5vh;
        height: 10vh;
    }
`

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação (em ms)
          once: true,     // Executar animação apenas uma vez
        });
      }, []);
      
    return (
        <>
            <Helmet>
                <title>Início - Pousada Le Ange</title>
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429553/1_zzajkn.svg" />
            </Helmet>

            {/* <PromotionModal /> */}

            <BackgroundVideo />

            <WhatsAppButton />

            <StyledPousadas 
                containerAnimation={{ opacity: 0, scale: 0.8 }}
                titleAnimation={{ opacity: 0, y: -50 }}
                textAnimation={{ opacity: 0, x: 50 }}
                buttonAnimation={{ opacity: 0, scale: 0.5 }}
                animationDuration={0.7}
            >
                <StyledPousadasTitle>
                    <h1 data-aos="fade-up">Pousada<StyledColorBBlue> 100% Pet Friendly</StyledColorBBlue> que aceita humanos de estimação</h1>
                    <p data-aos="fade-up" data-aos-delay="200">2 unidades, 2 cenários incomparáveis</p>
                </StyledPousadasTitle>

                <StyledContainerPousadas data-aos="fade-up">
                    <SliderComponent 
                        content={imagesSerra} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        height="60vh" 
                        contentType="image" 
                        showPagination={false} 
                    />
                    <TitlePousadas 
                        title="Le Ange Serra - Miguel Pereira RJ" 
                        text="Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!" 
                        borderColor="var(--color--green)"
                        borderRadius="30px" 
                        buttonColor="var(--color--green)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/serra"
                    />
                </StyledContainerPousadas>

                <StyledContainerPousadas data-aos="fade-up" data-aos-delay="200">
                    <TitlePousadas 
                        title="Le Ange Mar - Búzios RJ" 
                        text="Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar." 
                        borderColor="var(--color--blue)"
                        borderRadius="30px" 
                        buttonColor="var(--color--blue)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/mar"
                    />
                    <SliderComponent 
                        content={imagesMar} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="60%" 
                        height="60vh" 
                        contentType="image"
                        showPagination={false}
                    />
                </StyledContainerPousadas>
            </StyledPousadas>

            <StyledAcomoda>
                <div>
                    <StyledEstruturaTitle2 data-aos="fade-up">Nossas suítes <StyledColorBGreen>mais procuradas</StyledColorBGreen> </StyledEstruturaTitle2>
                    <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Já consegue se imaginar dormindo aqui ao lado do seu pet?</StyledEstruturaSubTitle>
                </div>

                <SliderAcomodaHome 
                    content={acomodaHome} 
                />

            </StyledAcomoda>
            
            <StyledEstrutura>
                <div>
                    <StyledEstruturaTitle data-aos="fade-up">Mais que Pet Friendly, <StyledColorBBlue>Pet Lovers</StyledColorBBlue></StyledEstruturaTitle>
                    <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Venha viver essa experiência</StyledEstruturaSubTitle>
                </div>
                <CoverflowSliderComponent
                    content={slideDataCoverflow} 
                    spaceBetween={20} 
                    width="100%" 
                    height="70vh" 
                    showPagination={false} 
                    showNavigation={true}
                />
            </StyledEstrutura>

            <div>
                <StyledEstruturaTitle data-aos="fade-up"> <StyledColorBGreen>Viva</StyledColorBGreen> essa experiência </StyledEstruturaTitle>
                <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Alguns dos nossos momentos</StyledEstruturaSubTitle>
            </div>
            
            <StyledCarrosselSection data-aos="fade-in">
                <ImageCarouselSliderComponent images={imagesCarrossel01} />
                <ImageCarouselSliderComponent images={imagesCarrossel02} reverse={true} />
            </StyledCarrosselSection>

            <StyledButtonCenter>
                <Button
                text="Fazer minha reserva!"
                />
            </StyledButtonCenter>

            <div>
                <StyledEstruturaTitle data-aos="fade-up">Conheça nossos pacotes e <StyledColorBBlue>noites especiais</StyledColorBBlue> </StyledEstruturaTitle>
                <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Estamos te esperando!</StyledEstruturaSubTitle>
            </div>

            <StyledContainerEvents data-aos="fade-in" data-aos-delay="250">
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Footer />

        </>
    );
};

export default Home;
