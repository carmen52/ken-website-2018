import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headshot from './headshot.jpg';
import about from './about.jpg';
import auction from './auction.png';
import calendar from './calendar.png';
import contact from './contact.png';

// ========================================

// Navigation bar

 

class Square extends React.Component {

  constructor(props) {

    super(props);

    this.state = { value: props.image, showText:false}

    this.hoverOn= this.hoverOn.bind(this)

    this.hoverOff= this.hoverOff.bind(this)

  }

 

  render() {

    return (

      <button className="square"
        onClick={this.props.click}
        onMouseOver={this.hoverOn} onMouseOut={this.hoverOff} >
        <div>
            <div hidden={!this.state.showText}>
                {this.state.value} 
            </div>
            <img src={this.props.image} height="30px" width="30px" hidden={this.state.showText} alt={this.props.text}/>
        </div>
      </button>

    );

  }

 

  hoverOn() {
    this.setState({ value: this.props.text, showText:true});
  }

 

  hoverOff() {
    this.setState({ value: this.props.text, showText:false});
  }

}

 

class Board extends React.Component {

  render() {

    const message = '';

    return (

      <div>

        <div className="message">{message}</div>

        <div className="board-row">

          {<Square text='About' image={about} click={this.props.showAbout}/>}

          {<Square text='Calendar' image={calendar}  click={this.props.showCalendar}/>}

          {<Square text='Contact' image={contact} click={this.props.showContact}/>}

          {<Square text='Services' image={auction} click={this.props.showServices}/>}

        </div>

      </div>

    );

  }

}

 

// ========================================

// Page

 

class Page extends React.Component {

  constructor(props) {

    super(props);

    this.state = { about: false,

                   calendar: true,

                   services: true,

                   contact: true}

    this.showAbout= this.showAbout.bind(this)

    this.showCalendar= this.showCalendar.bind(this)

    this.showContact= this.showContact.bind(this)

    this.showServices= this.showServices.bind(this)

  }

 

  showAbout() {

     this.setState ({ about: false,

                   calendar: true,

                   services: true,

                   contact: true});

  }

 

  showCalendar() {

     this.setState ({ about: true,

                   calendar: false,

                   services: true,

                   contact: true});

  }

 

  showServices() {

     this.setState ({ about: true,

                   calendar: true,

                   services: false,

                   contact: true});

  }

 

  showContact() {

     this.setState ({ about: true,

                   calendar: true,

                   services: true,

                   contact: false});

  }

 

  render() {

    const paragraph = 'I grew up near Sharon Center, Ohio in Medina County. I got my first job at the age of 14 washing dishes on weekends at a local Medina restaurant, Mozena\'s. After high school I joined the Marine Corps and served four years, earning promotions to Corporal (E-4) before being honorably discharged.  I then attended The University of Akron, majoring in Business. I have since worked more than 20 years in Columbus law firm accounting departments. While working full-time, I attended Hondros College real estate courses and The Ohio Auction School to obtain real estate and auctioneering licenses. I look forward to assisting folks with real estate and auction services. I enjoy spending free time with my family in Grove City.';

    const header = 'About me'

   

    return (

      <div className="mainPage">

      <Board showCalendar={this.showCalendar} showAbout={this.showAbout}

        showContact={this.showContact} showServices={this.showServices}/>

      <div id="about page" hidden= {this.state.about} >

          <h1 className="header"> {header} </h1>

          <div className="p1" >

            <p>
            <img className="element" src={headshot} float="left"/>
            {paragraph} </p>

          </div>

      </div>

        <div id="calendar page" hidden= {this.state.calendar} >

          <h1 className="header"> Calendar </h1>

      </div>

        <div id="contact page" hidden= {this.state.contact} >

          <h1 className="header"> Contact </h1>

          < ContactForm />

      </div>

        <div id="services page" hidden= {this.state.services} >

          <h1 className="header"> Services </h1>

      </div>

      </div>

    );

  }

}

 

// ========================================

 

// Contact form

 

class ContactForm  extends React.Component {

  constructor(props) {

    super(props);

  }

 

  onChange() {}

 

  onSubmit() {}

 

  render() {

    return (

      <div>

        <form className="contactForm" //action="https://formspree.io/kenbeckwithauctions@gmail.com"

               method="POST">

          <input type="text" className="form Error name" placeholder="Name" name="name" >        

          </input>

          <input type="email" className="form Error email" placeholder="Email" name="_replyto">

          </input>

          <input type="textarea" className="form Error message" placeholder="Message" name="message">

          </input>

          <button type="submit" className="form submit" value="Send"> Submit </button>

        </form>

        </div>

    );

  }

}

 

// ========================================

 

ReactDOM.render(

  <Page />,

  document.getElementById('root')

);