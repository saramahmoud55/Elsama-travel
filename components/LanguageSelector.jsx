import React, { useState } from "react";
import i18n from './i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core/styles';


const LanguageSelector = () => {

    // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    // const chooseLanguage = (e) => {
    //     e.preventDefault();
    //     i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    //     setSelectedLanguage(e.target.value);
    //     localStorage.setItem("lang", e.target.value);
    // }
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    document.body.dir = i18n.dir();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        document.body.dir = i18n.dir();
        theme.direction = i18n.dir();
    }

    return (
        <>
            {/* <select defaultValue={selectedLanguage} onChange={chooseLanguage} >  
            <option value="ar" >العربية</option>
            <option value="en">English</option>
            
        </select> */}
            <button style={{marginLeft:10}}  onClick={() => changeLanguage('ar')}>العربية</button>
            <button style={{marginLeft:10}} onClick={() => changeLanguage('en')}>English</button>
        </>
    );
};

export default LanguageSelector;