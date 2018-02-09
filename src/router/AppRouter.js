import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import PostIndex from '../containers/PostIndex';
import PostNew from '../containers/PostNew';
import PostDetail from '../containers/PostDetail';

const divStyle = {
    paddingTop: 20
};

const AppRouter = ({ history }) => (
    <ConnectedRouter history={history}>
        <div style={divStyle}>
            <Switch>
                <Route path="/" component={PostIndex} exact={true} />
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostDetail} />
            </Switch>
        </div>
    </ConnectedRouter>
);

export default AppRouter;