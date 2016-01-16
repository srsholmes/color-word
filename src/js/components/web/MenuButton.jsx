import React from 'react';
import velocity from 'velocity-animate';

import { MENU } from '../../constants/constants';

let MenuButton = React.createClass({
  
  componentWillUpdate(nextProps){
    console.log(nextProps);
    console.log(nextProps.menuOpen);
    nextProps.menuOpen === true ? this.openAnimation() : this.closeAnimation();
  },

  openAnimation() {
    var offsetY, offsetX;
    var time = 0;

    Object.keys(this.refs).forEach((ref, i) => {
      velocity(this.refs[ref], 
        { scaleY: ".4",
          scaleX: ".4",
          translateY: offsetY + 'px',
          translateX: offsetX + 'px'
        },
        { 
          duration: 80
        }
      );
    });

    Object.keys(this.refs).reverse().forEach((ref, i) => {
      velocity(this.refs[ref], 
        { opacity: "1",
          scaleX: "1",
          scaleY: "1",
          translateY: "0",
          translateX: '0'
        },
        { duration: 80,
          delay: time
        }
      );
      time += 40;
    });
  },

  closeAnimation() {
    console.log('closeAnimation');
    var offsetY, offsetX;
    var time = 0;
    Object.keys(this.refs).forEach((ref, i) => {
      velocity(this.refs[ref], 
        { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
        { duration: 80 }
      );
    });
  },

  renderMenuButtons() {
    let menuButtons = MENU.options.map((opt,i) => {
      return (
        <li key={i}>
          <a ref={`${opt}`} className="btn-floating red">
            <i className="material-icons">insert_chart</i>
          </a>
        </li>
      );
    });
    return menuButtons;
  },

  render(){
    console.log('MenuButton render');
    let { toggleMenu, menuOpen } = this.props;
    let classNames;
    menuOpen === true ? classNames = 'fixed-action-btn active' : classNames = 'fixed-action-btn';
    return (
      <div className={classNames}>
        <a onClick={toggleMenu} className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          {this.renderMenuButtons()}
        </ul>
      </div>
    );
  }
});

export default MenuButton;
