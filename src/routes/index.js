import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from '../containers/auth';
import Game from '../containers/game';
import Login from '../containers/login';

export default (
	<div>
		<Switch>
			<Auth exact path="/" component={Game} />
			<Route path="/login" component={Login} />			
		</Switch>
	</div>
)
