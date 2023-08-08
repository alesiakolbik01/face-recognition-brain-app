import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import './HomePage.css'

const clarifaiDataInit = {
    API_KEY: '1df95d8e43544eeea5a8323f85dc6b24',
    PAT: '731e0f2f1e0d441eb082a581d4d40459',
    USER_ID: 'alesiakolbik',
    APP_ID: 'test-faces-recognition',
    MODEL_ID: 'face-detection',
    MODEL_VERSION_ID: '6dc7e46bc9124c5c8824be4822abe105'
  };
  
  
class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageUrl : null,
            boxData: [],
            userData: {
                name: '',
                entries: 0,
                joined: null
            }
        }
    }

    getOptionsClarifai = (url) => {
        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": clarifaiDataInit.USER_ID,
                "app_id": clarifaiDataInit.APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": url
                        }
                    }
                }
            ]
        });

        return {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + clarifaiDataInit.PAT
            },
            body: raw
        };
    }

    onHandelSubmit = (value) => {
        this.setState({imageUrl: value});
        fetch("https://api.clarifai.com/v2/models/" + clarifaiDataInit.MODEL_ID + "/versions/" + clarifaiDataInit.MODEL_VERSION_ID + "/outputs", this.getOptionsClarifai(value))
        .then(response => response.json())
        .then((result) => {
                this.setBoxPoints(result.outputs[0].data.regions);
                this.updateEntriesCount();
            }
        )
        .catch(error => console.log('error', error));
    }

    setBoxPoints = (data) => {
        const boxDataResult = [];
        data.forEach(item => {
        boxDataResult.push(this.calculateBoxPonters(item.region_info.bounding_box, item.id));
        });

        this.setState({boxData: boxDataResult});
    }

    calculateBoxPonters = (region, id) => {
        const result = {};
        const imageElem = document.getElementById('inputImage');
        const imageWidth = imageElem.offsetWidth;
        const imageHeight = imageElem.offsetHeight;
        result.left = region.left_col * imageWidth; 
        result.right = imageWidth - (region.right_col * imageWidth);
        result.bottom = imageHeight - (region.bottom_row * imageHeight);
        result.top = region.top_row * imageHeight;
        result.id = id;

        return result;
    }

    componentDidMount(){
        if(this.props.userId){
            fetch('http://localhost:3000/profile/'+ this.props.userId)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data.status === "success")
                {
                    this.setState({userData: {name: data.name, entries: data.entries, joined: data.joined}})
                }
                else{
                    this.props.logOut();
                }
            })
            .catch((error) => {
                this.props.logOut();
                console.log(error);
            })
        }
    }

    updateEntriesCount(){
        fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: this.props.userId})
        })
        .then((response) => {
            return response.json();
        })
        .then(data => {
            if(data.status === 'success')
            {
                this.setState({userData: {...this.state.userData, entries: data.entries}})
            }
        })
    }

    render() {
        const { boxData, imageUrl } = this.state;
        const { logOut } = this.props;
        return (
        <div className = "home">
            <ParticlesBg color = "#6e6e6e" type = "cobweb" bg = {true} />
            <Navigation  logOut={ logOut }/>
            <Logo />
            <Rank userData={ this.state.userData }/>
            <ImageLinkForm handleSubmit = {this.onHandelSubmit} />
            <FaceRecognition imageUrl = {imageUrl} boxData = {boxData} />
        </div>
        );
    }
}

export default HomePage;