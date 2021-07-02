import React, {Component} from 'react';

import Navigation from './NavigationComponent';
import Home from './HomeComponent';
import Works from './WorksComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Soon from './SoonComponent';

import { Switch, Route, Redirect } from "react-router-dom";
import { PROJECTS } from '../shared/projects';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    {/* <Route exact path='projects' render={() => <Projects projects={this.state.projects} />} /> */}
                    <Route exact path='/works' render={() => <Works projects={this.state.projects} />} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/soon' component={Soon} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;