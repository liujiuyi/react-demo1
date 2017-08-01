import React from 'react';
import { Tab, TabBarItem, Article } from 'react-weui';
import IconButton from '../images/icon_nav_button.png';
import IconMsg from '../images/icon_nav_msg.png';
import IconArticle from '../images/icon_nav_article.png';

import Main from '../containers/main'
import Todos from '../containers/todos'

export default class TabBarAutoDemo extends React.Component {
    render() {
        return (
            <Tab type="tabbar">
              <TabBarItem icon={<img src={IconButton} alt="tab1"/>} label="Tab1">
                <Article>
                  <section>
                    <Main />
                  </section>
                </Article>
              </TabBarItem>
              <TabBarItem icon={<img src={IconMsg} alt="tab2"/>} label="Tab2">
                <Article>
                  <section>
                    <Todos />
                  </section>
                </Article>
              </TabBarItem>
              <TabBarItem icon={<img src={IconArticle} alt="tab3"/>} label="Tab3">
                <Article>
                  <h1>Page 3</h1>
                  <section>
                    <h2 className="title">Heading</h2>
                    <section>
                      <h3>3.1 Title</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute</p>
                    </section>
                  </section>
                </Article>
              </TabBarItem>
            </Tab>
        );
    }
};
