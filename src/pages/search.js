import React from 'react';
import { Link } from 'react-router-dom'

import {
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
} from 'react-weui';
import appMsgIcon from '../images/icon_nav_msg.png';

import SampleData from './nameDB';

export default class FirstPage extends React.Component {
    state={
        searchText: '',
        results: []
    };

    handleChange(text, e){
        let keywords = [text];
        let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'),'i')));

        if(results.length > 3) results = results.slice(0,3);
        this.setState({
            results,
            searchText:text,
        });
    }

    render() {
        return (
            <div>
              <SearchBar
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.state.searchText}
                  placeholder="Female Name Search"
                  lang={{
                      cancel: 'Cancel'
                  }}
              />
              <Panel style={{display: this.state.searchText ? null: 'none', marginTop: 0}}>
                <PanelHeader>
                  Female Name Search
                </PanelHeader>
                <PanelBody>
                  {
                      this.state.results.length > 0 ?
                      this.state.results.map((item,i)=>{
                          return (
                              <Link key={i} to="/serial">
                                <MediaBox type="appmsg" href="javascript:void(0);">
                                  <MediaBoxHeader>
                                    <img src={appMsgIcon} alt="result" />
                                  </MediaBoxHeader>
                                  <MediaBoxBody>
                                    <MediaBoxTitle>{item}</MediaBoxTitle>
                                    <MediaBoxDescription>
                                      You may like this name.
                                    </MediaBoxDescription>
                                  </MediaBoxBody>
                                </MediaBox>
                              </Link>
                          )
                      })
                      : <MediaBox>Can't find any！</MediaBox>
                  }
                </PanelBody>
              </Panel>
            </div>
        );
    }
};
