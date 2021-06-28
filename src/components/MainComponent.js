import React, {Component} from 'react';
import Hero from './HeroComponent';
import Navigation from './NavigationComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from "react-router-dom";
import { PROJECTS} from '../shared/projects';
import Works from './WorksComponent';
import About from './AboutComponent';


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
                    <Route path='/home' component={HomePage} />
                    {/* <Route exact path='projects' render={() => <Projects projects={this.state.projects} />} /> */}
                    <Route path='/works' component={Works} />
                    <Route path='/about' component={About} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;