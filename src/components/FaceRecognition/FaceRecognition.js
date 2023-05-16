import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxData }) => {
    return (
        <div className="mt4">
            <div className='absolute ab-ct'>
                <img id="inputImage" className='image' src={imageUrl} alt=''/>
                {
                    boxData.map(box => {
                        return <div key = {box.id} className='bounding-box' style={{ right:box.right+"px", left: box.left+"px",  top: box.top+"px", bottom: box.bottom +"px" }}></div>
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition;