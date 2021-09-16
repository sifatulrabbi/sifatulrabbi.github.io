import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/App.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));

function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 500);

    if (loading) return <LoadingScreen />;

    return (
        <Router>
            <Switch>
                <Suspense fallback={<LoadingScreen />}>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/projects">
                        <ProjectPage />
                    </Route>
                    <Route exact path="/loading">
                        <LoadingScreen />
                    </Route>
                </Suspense>
            </Switch>
        </Router>
    );
}

export default App;
