import React, { Fragment, useContext } from 'react';
import { SurveyContext } from '../../context/SurveyContext';
import './PublishQstns.css';


const PublishQstns = ({ history }) => {

    const [surveyQstns] = useContext(SurveyContext);

    const onPublishHandler = (value) => {
        history.push({
            pathname: '/result',
            state: { displayMessage: value }
        });
    }

    const singleSelectOptions = (qstn, index) => {
        return (
            <div className='single-select-container' key={index}>
                <p>{index + 1}. {qstn.question}</p>
                <div className='single-select-options'>
                    <div>
                        <input type='radio' id='option1'
                            name='single-select'
                            value={qstn.options[0]} />
                        <label htmlFor='option1'>{qstn.options[0]}</label>
                    </div>
                    <div className='single-select-option2'>
                        <input type='radio' id='option2'
                            name='single-select'
                            value={qstn.options[1]} />
                        <label htmlFor='option2'>{qstn.options[1]}</label>
                    </div>
                </div>
            </div>
        )
    }

    const multiSelectOptions = (qstn, index) => {
        return (
            <div className='multi-select-container' key={index}>
                <p>{index + 1}. {qstn.question}</p>
                <div className='multi-select-options'>
                    <div>
                        <input type='checkbox' id='option1'
                            name='option1' value={qstn.options[0]} />
                        <label htmlFor='option1'>{qstn.options[0]}</label>
                    </div>
                    <div>
                        <input type='checkbox' id='option2'
                            name='option2' value={qstn.options[1]} />
                        <label htmlFor='option2'>{qstn.options[1]}</label>
                    </div>
                    <div>
                        <input type='checkbox' id='option3'
                            name='option3' value={qstn.options[2]} />
                        <label htmlFor='option3'>{qstn.options[2]}</label>
                    </div>
                    <div>
                        <input type='checkbox' id='option4'
                            name='option4' value={qstn.options[2]} />
                        <label htmlFor='option4'>{qstn.options[2]}</label>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Fragment>
            <div className='conformation-container'>
                {surveyQstns.map((qstn, index) => {
                    return (qstn.type === 'single-select' ? singleSelectOptions(qstn, index) : multiSelectOptions(qstn, index));
                })}
            </div>

            <div className='publishBtn-container'>
                <button
                    onClick={() => onPublishHandler('Your survey questions are published successfully.')}>Publish Now</button>
            </div>
        </Fragment>

    )
}

export default PublishQstns;
