import React, { PureComponent } from 'react';
import './collaboration.css';
import Heading from '../lib/Heading/Heading';
import ContactForm from './ContactForm';

class Collaboration extends PureComponent {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="collaboration">
        <div className="collaboration-column">
          <div className="collaboration-content">
            <Heading title="Collaborate" subTitle="with us" isStrike />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur est fugit
              illo in ipsa iure odio possimus provident quia quos recusandae repellat repellendus
              repudiandae, saepe sint temporibus, ut vero.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem earum, esse
              fugit iure magni natus necessitatibus nisi odio odit qui ratione recusandae rerum sunt
              totam vel velit veritatis voluptatum!
            </p>
          </div>
        </div>
        <div className="collaboration-column">
          <ContactForm onSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default Collaboration;
