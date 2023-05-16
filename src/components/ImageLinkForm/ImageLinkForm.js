import './ImageLinkForm.css';
import React from 'react';

const ImageLinkForm = (props) => {

    const [input, setInputState] = React.useState('');
    const [isNotValidImageUrl, setNotValid] = React.useState(false);

    const handleSubmit = () => {
        const pattern = /\bhttps?:\/\/\S+\.(?:png|jpe?g|gif|bmp)\b/;
        const match = input.match(pattern);
        setNotValid(!match);
        if(match) {
            props.handleSubmit(input);
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
                <div className='pa4 br3 shadow-5 center form'>
                    <input className='f4 pa2 w-70 center br-tr outline-transparent-l' type="text" onInput={handleInput} defaultValue={input} />
                    <button onClick={handleSubmit} className='w-30 grow f4 link ph3 pv2 dib white tx-sh bg-light-purple br2 b--white-50 outline-transparent-l'>Detect</button>
                </div>
                {isNotValidImageUrl ? <div className='error-message'>Please, input valid path to the picture</div> : ''}
            </div>
        </div>
     
    )
}

export default ImageLinkForm;