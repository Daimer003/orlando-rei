import React from 'react';
import { useLanguage } from '../../context/languageContext';

const TranslateComponent = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <p>Idioma actual: {language}</p>

    </div>
  );
};

export default TranslateComponent;