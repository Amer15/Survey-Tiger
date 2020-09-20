import React, { useState, createContext } from 'react';

//Init Context
export const SurveyContext = createContext();


export const SurveyProvider = (props) => {
    const defaultQstns = [
        {
            type: 'multi-select',
            question: 'which of the following social media apps you have on your phone ?',
            options: ['Facebook', 'Instagram', 'Whatsapp', 'Twitter']
        },
        {
            type: 'single-select',
            question: 'Do you have LinkedIn installed ?',
            options: ['Yes', 'No']
        },
        {
            type: 'single-select',
            question: 'Do you have Youtube installed ?',
            options: ['Yes', 'No']
        }
    ]

    //ALL Survey Qstns are added here including default questions
    const [surveyQstns, setSurveyQstns] = useState([...defaultQstns]);

    return(
        <SurveyContext.Provider value={[surveyQstns, setSurveyQstns]}>
            {props.children}
        </SurveyContext.Provider>
    );
}
