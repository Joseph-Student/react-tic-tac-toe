import { Component, Profiler, StrictMode } from "react";
import Game from "./pages/Game";
import { onRenderProfiler } from "./utils";

export class App extends Component {
    render() {
        return (
            <StrictMode>
                <Profiler id="Game" onRender={onRenderProfiler}>
                    <Game />
                </Profiler>
            </StrictMode>
        );
    }
}
