import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
//import { HooksApp } from "./HooksApp";
//import { TrafficLight } from "./01-useState/TrafficLight";
//import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
//import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { ClientInformation } from "./08-use-suspense/ClientInformation";

import "./index.css";
import { getUserAction } from "./08-use-suspense/api/get-user.action";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Toaster />
        {/* <HooksApp /> */}
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/* <TrafficLightWithEffectWithHook /> */}
        {/* <PokemonPage /> */}
        {/* <FocusScreen /> */}
        {/* <TasksApp /> */}
        {/* <ScrambleWords /> */}
        {/* <MemoCounter /> */}
        {/* <InstagromApp /> */}
        <Suspense
            fallback={
                <div className="bg-gradient flex flex-col">
                    <h1 className="text-2xl">Cargando...</h1>
                </div>
            }
        >
            <ClientInformation getUser={getUserAction(100)} />
        </Suspense>
    </StrictMode>
);
