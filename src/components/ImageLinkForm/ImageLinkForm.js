import './ImageLinkForm.css';
import React from 'react';

const ImageLinkForm = ({ handleSubmit }) => {

    const [input, setInputState] = React.useState('');
    const [isNotValidImageUrl, setNotValid] = React.useState(false);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const pattern = /\bhttps?:\/\/\S+?\b/;
        const match = input.match(pattern);
        setNotValid(!match);
        if(match) {
            handleSubmit(input);
        }  
    }

    const handleInput = (e) => {
        setInputState(e.target.value); 
        if(!e.target.value) 
        {
            setNotValid(false);
        }
    }

    return (
        <div>
            <p className='f3 tc'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div>
                <form className='pa4 br3 shadow-5 center form' onSubmit={onHandleSubmit}>
                    <input className='f4 pa2 w-70 center br-tr outline-transparent-l' type="search" onInput={handleInput} defaultValue={input} />
                    <button onClick={onHandleSubmit} className='w-30 grow f4 link ph3 pv2 dib white tx-sh bg-light-purple br2 b--white-50 outline-transparent-l'>Detect</button>
                </form>
                {isNotValidImageUrl ? <div className='error-message'>Please, input valid path to the picture</div> : ''}
            </div>
        </div>
     
    )
}

export default ImageLinkForm;