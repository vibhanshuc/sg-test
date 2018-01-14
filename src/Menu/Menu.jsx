import React, { Component } from 'react';
import Heading from '../lib/Heading/Heading';
import './menu.css';
import Button from '../lib/Button/Button';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-head">
          <Heading subTitle={'Our Menu'} isStrike isPrimary />
          <Button text={'Know More'} />
        </div>
        <div className="menu-content">
          <div className="menu-column one">
            <Heading subTitle={'Starters'} />
            <div className="menu-item">
              <div className="menu-item-title">Quinoa Crouquettas</div>
              <div className="menu-item-desciption">
                Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
                (v)
              </div>
              <div className="menu-item-price">&pound;4.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Chifa Chicharrones</div>
              <div className="menu-item-desciption">
                Slow cooked, crispy pork belly with swet soy sauce
              </div>
              <div className="menu-item-price">&pound;6.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Calamares</div>
              <div className="menu-item-desciption">
                Crispy baby squid with pickled jalapeño miso salsa
              </div>
              <div className="menu-item-price">&pound;6.95</div>
            </div>
          </div>
          <div className="menu-column two">
            <Heading subTitle={'Main Courses'} />
            <div className="menu-item">
              <div className="menu-item-title">El Classico</div>
              <div className="menu-item-desciption">
                Sea bass ceviche with aji limo tiger’s milk, sweet potato purée,
                choclo corn, red onion, coriander & plantain (gf)
              </div>
              <div className="menu-item-price">&pound;8.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Tiradito Callao</div>
              <div className="menu-item-desciption">
                Cobia tiradito with coriander tiger’s milk, black tobika, crème
                fraiche & sweet potato crunchies
              </div>
              <div className="menu-item-price">&pound;8.95</div>
            </div>
          </div>
          <div className="menu-column three">
            <Heading subTitle={'Sides'} />
            <div className="menu-item">
              <div className="menu-item-title">Super Pollo</div>
              <div className="menu-item-desciption">
                Marinated corn fed chicken pieces with rocotto salsa
              </div>
              <div className="menu-item-price">&pound;4.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Patatas Fritas</div>
              <div className="menu-item-desciption">
                Sweet potato fires with aji rocotto mayonnaise (v)
              </div>
              <div className="menu-item-price">&pound;3.95</div>
            </div>
          </div>
          <div className="menu-column four">
            <Heading subTitle={'Desserts'} />
            <div className="menu-item">
              <div className="menu-item-title">Icecream</div>
              <div className="menu-item-desciption">
                Lorem ipsum dolor sit amet salerma petrum sea
              </div>
              <div className="menu-item-price">&pound;3.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Tiramisu</div>
              <div className="menu-item-desciption">
                Lorem ipsum dolor sit amet salerma petrum sea
              </div>
              <div className="menu-item-price">&pound;3.95</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-title">Chocolate Brownie</div>
              <div className="menu-item-desciption">
                Lorem ipsum dolor sit amet salerma petrum sea
              </div>
              <div className="menu-item-price">&pound;3.95</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
