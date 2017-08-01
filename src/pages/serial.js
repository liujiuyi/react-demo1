import React from 'react';
import { Link } from 'react-router-dom'

import {
    Button,
} from 'react-weui';

export default class FirstPage extends React.Component {
    render() {
        return (
            <div>
              Serial...
              <div className="button-sp-area">
                <Link to="/borrow">
                  <Button size="small">借</Button>
                </Link>
              </div>
            </div>
        );
    }
};
