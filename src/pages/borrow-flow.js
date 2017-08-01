import React from 'react';
import { Link } from 'react-router-dom'

import {
    Button,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    PanelFooter,
    Cells,
    Cell,
    CellBody,
    CellFooter,
} from 'react-weui';
import appMsgIcon from '../images/icon_nav_msg.png';

const CellMore = () => (
    <Cell access link>
      <CellBody>More</CellBody>
      <CellFooter />
    </Cell>
)
export default class BorrowFlow extends React.Component {
    handleSearch(e){
    }

    render() {
        return (
            <div>
              <Cells>
                <Link to="/search">
                  <Cell access link>
                    <CellBody>
                      Search
                    </CellBody>
                  </Cell>
                </Link>
              </Cells>
              <div className="button-sp-area">
                <Button size="small">1000本书</Button>
                <Button type="warn" size="small">用户中心</Button>
              </div>
              <Panel>
                <PanelHeader>
                  Media with image
                </PanelHeader>
                <PanelBody>
                  <Link to="/serial">
                    <MediaBox type="appmsg">
                      <MediaBoxHeader>
                        <img src={appMsgIcon} alt="result" />
                      </MediaBoxHeader>
                      <MediaBoxBody>
                        <MediaBoxTitle>Media heading</MediaBoxTitle>
                        <MediaBoxDescription>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </MediaBoxDescription>
                      </MediaBoxBody>
                    </MediaBox>
                  </Link>
                  <Link to="/serial">
                    <MediaBox type="appmsg">
                      <MediaBoxHeader>
                        <img src={appMsgIcon} alt="result" />
                      </MediaBoxHeader>
                      <MediaBoxBody>
                        <MediaBoxTitle>Media heading</MediaBoxTitle>
                        <MediaBoxDescription>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </MediaBoxDescription>
                      </MediaBoxBody>
                    </MediaBox>
                  </Link>
                </PanelBody>
                <PanelFooter href="javascript:void(0);">
                  <CellMore />
                </PanelFooter>
              </Panel>
            </div>
        );
    }
};
