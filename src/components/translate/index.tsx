import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/languageContext';

const TranslateComponent: React.FC = () => {
  const { t } = useTranslation(); // Función t para traducir
  const { changeLanguage } = useLanguage(); // Función para cambiar el idioma

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default TranslateComponent;