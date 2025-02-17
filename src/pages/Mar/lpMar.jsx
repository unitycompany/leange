import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import CustomButton from '../../components/button3';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent2 from '../../components/acomodaComponent2';
import Pensao from '../../components/pensao';
import Depoimentos from '../../components/depoimentos';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import EventCardCarousel from '../../components/cardSlider';
import Button from '../../components/button';
import WhatsAppButton from '../../components/Whatsapp';
import PetFriendlyCarousel from '../../components/petCarrossel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledEspace = styled.div`
    height: 0vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`;

const StyledSectionHome = styled.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: 0.05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732195397/FOTO-MAR_qssync.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`;

const StyledHomeDiv = styled.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1732195397/FOTO-MAR_qssync.webp');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`;

const StyledHomeTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
        z-index: 10!important;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
        
    }

    & > h4 b{
        color: var(--color--blue);
        font-weight: 300;
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px) {
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px) {
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        position: relative;
        z-index: 2;
        font-weight: 100;

        @media (max-width: 768px) {
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`;

const slides = [
    {
        title: "Pet Friendly",
        description: "Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832504/petfriendly-scaled_vsev2s.webp"
    },
    {
        title: "Praia",
        description: "Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329813/cachorro_na_praia_pmqyi4.webp"
    },
    {
        title: "Piscina",
        description: "Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731327001/pousada_de_cima_vpzpdb.webp"
    },
    {
        title: "Ofurôs",
        description: "São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329813/ofuros_kyjddp.webp"
    },
    {
        title: "Sala de estar",
        description: "A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832504/saladeestar_yakcqy.webp"
    },
    {
        title: "Cozinha",
        description: "Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731335108/risoto1-compressed_m583dd.jpg"
    },
    {
        title: "Bar",
        description: "Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832503/bar_qgdbog.webp"
    },
    {
        title: "Suítes",
        description: "São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329811/suites_pzghlo.webp"
    }
];

const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`;

const ImagesAcomoda = [
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731334570/suiteMar01_p6bfoi-compressed_kixsaa.jpg", "text": "Suíte Superior 1", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0142-compressed_lfijwu.webp", "text": "Suíte Standard 2", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731334576/suiteMar03_o9sxbf-compressed_uw2hox.jpg", "text": "Suíte Superior 3", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0143-compressed_fk4kgv.webp", "text": "Suíte Superior 4", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731334573/suiteMar05_oid9as-compressed_al5vur.jpg", "text": "Suíte Superior 5", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594870/mar_master_8_m1x38m.jpg", "text": "Suíte Superior 6", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731334571/suiteMar07_dgfxzq-compressed_kody5f.jpg", "text": "Suíte Master 7", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731334574/suiteMar08_g1gmt0-compressed_mymcv1.jpg", "text": "Suíte Master 8", "loading": "lazy" }
];


const StyledLocal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`;

const StyledContainerEvents = styled.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`;

const events = [
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp',
        title: 'Noite de Risotos',
        dateRange: '29/11/2024 até 01/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '30/11 - Noite de Risostos' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' }
        ],
        price: '359,20',
        discount: 25
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp',
        title: 'Noite das Pizzas',
        dateRange: '06/12/2024 até 08/12/2024 (3 diárias)',
        features: [
            { icon: <FaUtensils />, text: '07/12 - Noite das pizzas' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' }
        ],
        price: '359,20',
        discount: 25
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp',
        title: 'Frutos do Mar',
        dateRange: '13/12/2024 até 15/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '14/12 - Frutos do Mar' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' }
        ],
        price: '359,20',
        discount: 25
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp',
        title: 'Fique 3 Pague 4',
        dateRange: 'Segunda-feira a Sexta-feira',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' }
        ],
        price: '538,90',
        discount: 25
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp',
        title: 'Pacote de Natal',
        dateRange: '21/12/2024 até 25/12/2024 (4 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' }
        ],
        price: '918,40',
        discount: 25
    }
];

const StyledButtonCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`;

const PetFriendlyImages = [
    {
        images: [
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335871/1_sxf4fc_a9uljb.webp", alt: 'Foto de cachorro com uma bola na boca', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335872/2_cldel9_wnqquw.webp", alt: 'Foto do cachorro sentado tomando sol', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335873/3_i0ctxp_megfsi.webp", alt: 'Cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016972/mar5_wwsqtk.webp", alt: 'Cachorro tirando uma selfie com outros 3 cachorros', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327000/cachorro-olhando-para-camera_wpovwv.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335875/5_flrzdf_wyxn6v.webp", alt: 'Cachorro com a lingua para fora', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar4_ilxhpl.webp", alt: 'Cachorro na borda da piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar6_wcjggv.webp", alt: 'Cachorro em uma prancha de surf na onda', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335877/6_b6jtbs_dfnbyu.webp", alt: 'Cachorro com óculos escuros', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335880/8_zr7p3o_czbag1.webp", alt: 'Cachorro e um cachorro pequeno', loading: "lazy", label: 'Le Ange Mar' },
        ],
    },
    {
        images: [
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335878/7_gutmna_mncfkn.webp", alt: 'Foto de um cachorro com uma taça do lado', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335881/10_olepft_mfx8nm.webp", alt: '3 cachorros e um homem na piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar2_xvqf5o.webp", alt: 'Cachorro marrom', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar1_tsyxm8.webp", alt: 'Cachorro marrom na piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar3_jmdiw8.webp", alt: 'Cachorro branco olhando para a camera', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar7_vyslpi.webp", alt: 'Cachorro dormindo no sofá', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016974/mar8_ywe1hn.webp", alt: 'Cachorro em cima do morro olhando para o lado', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335892/17_awkinq_ommg1k.webp", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
        ],
        reverse: true
    }
];

const LpMar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);

    return (
        <>
            <Helmet>
                <title>Le Ange Serra - Pousada Le Ange</title>
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429562/4_bbtihr.svg" />
            </Helmet>

            {/* <VideoPlayer videoSrc="https://res.cloudinary.com/dupg7clzc/video/upload/f_auto,q_50,w_2000/v1732279143/Mar_bajezt.mp4" /> */}

            <StyledEspace />

            <WhatsAppButton />

            <StyledSectionHome>
                <StyledHomeTexts>
                    <h4 data-aos="fade-up" data-aos-delay="100">Conheça a <b>Le Ange Mar</b>, a pousada mais</h4>
                    <h1 data-aos="fade-down" data-aos-delay="200">PET FRIENDLY<br /> DO <b>BRASIL</b></h1>
                    <p>Aqui, você e o seu pet são mais do que bem-vindos!</p>
                    <div>
                        <CustomButton
                            text="Reservar agora!"
                            textColor="var(--color--black)"
                            backgroundColor="transparent"
                            borderColor="var(--color--black)"
                            iconColor="var(--color--black)"
                            hoverBackgroundColor="var(--color--blue)"
                            hoverBorderColor="var(--color--blue)"
                            hoverColor="var(--color--white)"
                            hoverIconColor="var(--color--white)"
                            onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                        />
                    </div>
                </StyledHomeTexts>

                <StyledHomeDiv data-aos="fade-left" data-aos-delay="200" />
            </StyledSectionHome>

            <StyledLocal data-aos="fade-in" data-aos-delay="100">
                <h1 data-aos="fade-up" data-aos-delay="300">LeAnge Mar | Armação dos Búzios RJ</h1>
            </StyledLocal>

            <StyledSectionEspaco data-aos="fade-up" data-aos-delay="50">
                <CarouselComponent
                    slides={slides}
                    titleColor="var(--color--blue)"
                    buttonBgColor="var(--color--blue)"
                    imagePosition="left"
                />
            </StyledSectionEspaco>

            <AcomodaComponent2 images={ImagesAcomoda} />

            <Pensao colorDefinedBold="var(--color--blue)" data-aos="fade-up" data-aos-delay="400" />

            <PetFriendlyCarousel carousels={PetFriendlyImages} data-aos="fade-in" data-aos-delay="400"/>

            <StyledButtonCenter>
                <Button 
                text="Fazer minha reserva!" 
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
            </StyledButtonCenter>

            <StyledContainerEvents data-aos="fade-up" data-aos-delay="400">
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />

            <Footer />
        </>
    );
};

export default LpMar;
