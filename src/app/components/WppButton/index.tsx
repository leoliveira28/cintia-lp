"use client"
import { WhatsappLogo } from '@phosphor-icons/react';
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Lógica para abrir o link do WhatsApp
    // Substitua 'seuNumero' pelo número de telefone desejado
    window.open('https://api.whatsapp.com/send/?phone=5517997913789&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#25D366', // Cor de fundo do botão
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
        zIndex: '1000', // Certifique-se de que está acima de outros elementos
      }}
      onClick={handleWhatsAppClick}
    >
      <WhatsappLogo size={32} className='text-slate-50' />
    </div>
  );
};

export default WhatsAppButton;
