import React from 'react'
import { useState } from 'react';


const QuestTest = () => {

  const ProgressBar = ({ progress }) => {
    return (
        <div style={{ width: '50%', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
            <div
                style={{
                    width: `${progress}%`,
                    height: '20px',
                    backgroundColor: '#3b5998',
                    borderRadius: '5px',
                }}
            />
        </div>
    );
};


  const [yesCount, setYesCount] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleAnswer = (isYes) => {
        if (!submitted) {
            setYesCount(yesCount + (isYes ? 1 : 0));
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const getProgress = () => {
        if (yesCount === 4) return 80;
        if (yesCount === 3) return 60;
        if (yesCount === 2) return 40;
        if (yesCount === 1) return 20;
        return 0;
    };
  return (
    <div>
       

           <h1 style={{marginLeft:'500px',marginBottom:'25px'}}>Daily Health Questionnaire</h1>
            {!submitted ? (
                <div className='quest-qa'> 
                <div className='qa1'>
                    <p>1. Are you today done your workout? (Yes/No)</p>
                    <button  onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>
               </div>
               <div className='qa2'>
                    <p>2. Did you read 5 pages today? (Yes/No)</p>
                    <button onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>
</div>
               <div className='qa3'>

                    <p>3. Did you walk 10 minutes today? (Yes/No)</p>
                    <button onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>
</div>
               <div className='qa4'>

                    <p>4. Did you complete your quest today? (Yes/No)</p>
                    <button onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>
</div>
               <div className='qa5'>

                    <p>5. Did you drink at least 2 liters of water today? (Yes/No)</p>
                    <button onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>

                    <button onClick={handleSubmit}>Submit</button>

               </div>     
                </div>
            ) : (
                <div className='your-progress'>
                    <h2>Your Progress</h2>
                    <ProgressBar progress={getProgress()}  />
                    <p>{getProgress()} points</p>
                </div>
            )}

    </div>
  )
}

export default QuestTest