import {Profiler} from "react";
import Game from "./pages/Game";
import Users from "./pages/Users";
import {onRenderProfiler} from "./utils";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import {Container} from "reactstrap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export function App() {
	return (
		<Router>
			<Header />
			<Container fluid className="py-4">
				<Switch>
					{/*<Route path="/">*/}
					{/*</Route>*/}
					<Route path="/game">
						<Profiler id="Game" onRender={onRenderProfiler}>
							<Game/>
						</Profiler>
					</Route>
					<Route path="/sign-up">
						<SignUp />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</Container>
		</Router>
	)
}
