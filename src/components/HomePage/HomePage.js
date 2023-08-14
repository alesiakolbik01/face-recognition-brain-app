import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import './HomePage.css'

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

    onHandelSubmit = (value) => {
        fetch("http://localhost:3000/imageurl", 
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({imageUrl: value})
            }
        )
        .then(response => response.json())
        .then((result) => {
                this.setState({imageUrl: value});
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