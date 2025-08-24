import { useEffect, useState } from "react";

const greyColor = "bg-gray-500";
const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
};
//type TrafficLightColors = "red" | "yellow" | "green";
type TrafficLightColors = keyof typeof colors;

interface Props {
    color: TrafficLightColors;
}

export const useTrafficLight = (props: Props) => {
    const [light, setLight] = useState<TrafficLightColors>(props.color);
    const [countDown, setCountDown] = useState(5);

    useEffect(() => {
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [countDown]);

    useEffect(() => {
        if (countDown === 0) {
            switch (light) {
                case "red": {
                    setLight((_) => "green");
                    break;
                }
                case "yellow": {
                    setLight((_) => "red");
                    break;
                }
                case "green": {
                    setLight((_) => "yellow");
                    break;
                }
            }
            setCountDown(5);
        }
    }, [light, countDown]);
    return {
        // Properties
        light,
        countDown,
        colors,

        // Computed
        percentage: (countDown / 5) * 100,
        redLight: light === "red" ? colors.red : greyColor,
        yellowLight: light === "yellow" ? colors.yellow : greyColor,
        greenLight: light === "green" ? colors.green : greyColor,
    };
};
