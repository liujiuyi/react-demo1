import React from 'react';

import { Link } from 'react-router-dom'
import { Button, ButtonArea } from 'react-weui';

export default class FirstPage extends React.Component {
    render() {
        return (
            <div>
              <ButtonArea direction="horizontal">
                <Link to="/borrow_flow">
                  <Button type="default" size="small">借</Button>
                </Link>
                <Link to="/return">
                  <Button type="default" size="small">还</Button>
                </Link>
              </ButtonArea>
            </div>
        );
    }
};
