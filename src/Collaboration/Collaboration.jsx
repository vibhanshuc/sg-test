import React, { PureComponent } from 'react';
import './collaboration.css';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';

class Collaboration extends PureComponent {
  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="collaboration">
        <div className="collaboration-column">
          <div className="collaboration-content">
            <Heading title={'Collaborate'} subTitle={'with us'} isStrike />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              consectetur est fugit illo in ipsa iure odio possimus provident
              quia quos recusandae repellat repellendus repudiandae, saepe sint
              temporibus, ut vero.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              dolorem earum, esse fugit iure magni natus necessitatibus nisi
              odio odit qui ratione recusandae rerum sunt totam vel velit
              veritatis voluptatum!
            </p>
          </div>
        </div>
        <div className="collaboration-column">
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <label>Surname</label>
                <input type="text" name="surname" placeholder="Surname" />
              </div>
            </div>
            <div>
              <div>
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="tel" name="phone" placeholder="Email" />
              </div>
            </div>
            <div>
              <div>
                <label>Experience</label>
                <select name="experience" defaultValue="select">
                  <option disabled value="select">
                    Select
                  </option>
                </select>
              </div>
              <div>
                <label>Where did you hear about us?</label>
                <select name="hear" defaultValue="select">
                  <option disabled value="select">
                    Select
                  </option>
                </select>
              </div>
            </div>
            <div>
              <Button text={'Send'} type={'submit'} isPrimary />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Collaboration;
