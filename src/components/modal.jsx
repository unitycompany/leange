// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion'; 
// import { TbChristmasBall } from "react-icons/tb";

// const ModalContainer = styled(motion.div)` 
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalCard = styled(motion.div)`
//   background: white;
//   border-radius: 60px 20px 35px 10px;
//   padding: 20px;
//   text-align: center;
//   box-shadow: 0 0px 20px rgba(0, 0, 0, 0.9);
//   width: 50%;
//   height: 70%;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   flex-direction: column;
//   gap: 5px;
//   font-family: var(--font--comfortaa);
//   background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008398/Untitled-31_gkzipm.png');
//   background-size: cover;
//   background-position: center;
//   filter: contrast(120%);

//   @media (max-width: 768px) {
//     width: 85%;
//     gap: 40px;
//     background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008479/celular-1_02_ahubmo.png');
//   }

//   & > p {
//     width: 60%;
//     font-weight: 100;
//     font-size: .9rem;
//     line-height: 110%;
//     color: var(--color--white);

//     @media(max-width: 768px){
//       line-height: 120%;
//       width: 100%;
//       margin-bottom: -25px;
//     }
//   }
// `;

// const CloseButton = styled(motion.button)` 
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   font-size: 35px;
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   cursor: pointer;
//   color: var(--color--white);
//   font-family: var(--font--comfortaa);
//   font-weight: 100;
//   background-color: rgba(0, 0, 0, 0.8);
//   box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
//   border-radius: 50%;
//   border: 1px solid rgba(255, 255, 255, 1);
//   width: 40px;
//   height: 40px;
//   transition: all .2s ease;

//   @media(max-width: 768px){
//     width: 35px;
//     height: 35px;
//     font-size: 35px;
//   }

//   &:hover{
//     background-color: var(--color--white);
//     color: var(--color--black);
//     box-shadow: 0 0 5px rgba(255, 255, 255, 1);
//     border: 1px solid var(--color--white);
//   }
// `;

// const WhatsAppButton = styled(motion.a)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   padding: 8px 20px;
//   background-color: var(--color--white);
//   border: 1px dashed #ff0a0a;
//   font-weight: 600;
//   color: var(--color--black);
//   font-size: .9rem;
//   border-radius: 10px 0 10px 0;
//   text-decoration: none;
//   font-weight: 100;
//   margin-top: 15px;
//   transition: all .2s ease;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

//   @media(max-width: 768px){
//     font-size: .7rem;
//   }

//   &:hover {
//     padding: 8px 25px;
//     background-color: var(--color--black);
//     color: var(--color--white);
//   }
// `;

// const SuiteCountCircle = styled(motion.div)` 
//   position: absolute;
//   top: -25px;
//   left: -25px;
//   background-color: rgba(173, 1, 1, 0.9);
//   border: 1px solid var(--color--white);
//   color: white;
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 400;
//   font-size: .8rem;
//   line-height: 100%;
//   font-family: var(--font--comfortaa);
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

//   @media(max-width: 768px){
//     width: 70px;
//     height: 70px;
//     font-size: .6rem;
//     left: -10px;
//     top: -10px;
//   }
// `;

// const PromotionModal = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [suiteCount, setSuiteCount] = useState(7);
//   const [suiteText, setSuiteText] = useState("suítes disponíveis"); 

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     isOpen && (
//       <ModalContainer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <ModalCard
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <CloseButton
//             onClick={handleClose}
//             whileHover={{ scale: 1 }}
//             transition={{ duration: 0.2 }}
//           >
//             ×
//           </CloseButton>
//           <SuiteCountCircle
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {suiteCount} {suiteText}
//           </SuiteCountCircle>
//           <p>Aproveite nossa promoção especial de Natal. Clique abaixo para mais informações.</p>
//           <WhatsAppButton
//               href="https://wa.link/dojlwi"
//               target="_blank"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               >
//               Fazer minha reserva agora!
//               <TbChristmasBall />
//           </WhatsAppButton>
//         </ModalCard>
//       </ModalContainer>
//     )
//   );
// };

// export default PromotionModal;
