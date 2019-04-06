import React, {Component} from 'react' 


var fToM = (x) => x*0.3048 ; 
var mToF =  (x) => x*3.28084 ; 

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

var Map = {
    f:"feet",
    m:"meter"
}



class HightMeasurement extends Component {
    constructor(props) {
        super(props); 
        this.handleEvent =  this.handleEvent.bind(this);
    };

    handleEvent(e){
            this.props.handleHeightChange(e.target.value); 
    }

    render() {
        const height = this.props.height; 
       // this.props.handleHeightChange(height);
        const scale = this.props.scale ; 
        return (
                  <fieldset> 
                      <legend> heights in {Map[scale]} </legend>
                      <input value = {height} onChange = {this.handleEvent} />
                  </fieldset> 
              );
    }
}

class LiftingStateUp extends Component {
    constructor(props) {
        super(props); 
        this.handleF =  this.handleF.bind(this); 
        this.handleM =  this.handleM.bind(this) ; 
        this.state = {
            scale : 'f' , 
            measue : '12' 
        };
       
    }; 
    
 

    handleF(measue) {
  //   console.log(measue); 
    // console.log(this.state.measue); 
     this.setState( 
         {
         scale:'f',
         measue : measue 
       }
     );
    };

    handleM(value){
       // console.log(value);
       
        this.setState(
            {
                scale : 'm' , 
                measue : value 
            }
        );
        
    };

    render() {
        const x = this.state.measue ; 
        const measeueF =  this.state.scale === 'f' ? x : tryConvert(x,mToF);
        const measeueM =  this.state.scale === 'm' ? x : tryConvert(x,fToM);
        return (
           <div>  
               <HightMeasurement scale = 'f' height = {measeueF}  handleHeightChange = {this.handleF} />
               <HightMeasurement scale = 'm' height = {measeueM}  handleHeightChange = {this.handleM} />
           </div>
        );
    }

}

export default LiftingStateUp ; 