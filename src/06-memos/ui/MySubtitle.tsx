import React from "react";

interface Props {
    subtitle: string;
    callMyApi: () => void;
}
export const MySubtitle = React.memo(({ subtitle, callMyApi }: Props) => {
    console.log("My subtitle re-render");
    return (
        <>
            <h6>{subtitle}</h6>
            <button onClick={callMyApi} className="bg-indigo-500 px-2 py-1 rounded-md cursor-pointer">
                Llamar a función
            </button>
        </>
    );
});
