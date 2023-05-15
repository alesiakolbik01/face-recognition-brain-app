import './ImageLinkForm.css'

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className='f3 tc'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div>
                <div className='pa4 br3 shadow-5 center form'>
                    <input className='f4 pa2 w-70 center br-tr' type="text" />
                    <button className='w-30 grow f4 link ph3 pv2 dib white tx-sh bg-light-purple br2 b--white-50'>Detect</button>
                </div>
            </div>
        </div>
     
    )
}

export default ImageLinkForm;