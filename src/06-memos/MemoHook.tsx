import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
    const [title, setTitle] = useState("Hola");
    const [subtitle, setSubtitle] = useState("Mundo");
    const handleCallApiFunction = useCallback(() => {
        console.log("Calling external API");
    }, [subtitle]);
    return (
        // <div className="bg-gradient font-thin text-white">
        //     <h1 className="text-2xl font-thin text-white">MemoApp</h1>
        // </div>
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl ">MemoApp</h1>
            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyApi={handleCallApiFunction} />
            <h1>Mi subtítulo</h1>
            <button
                onClick={() => setTitle((t) => (t === "Hola" ? "Hello" : "Hola"))}
                className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer"
            >
                Cambiar título
            </button>
            <button
                onClick={() => setSubtitle((t) => (t === "Mundo" ? "World" : "Mundo"))}
                className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer"
            >
                Cambiar subtítulo
            </button>
        </div>
    );
};
