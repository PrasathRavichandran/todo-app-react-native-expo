import { checkMarkPath, outlineBoxPath } from "@/utils/constants/svgPath";
import { Theme } from "@/utils/theme";
import { useTheme } from "@shopify/restyle";
import { useEffect, useRef, useState } from "react";
import Animated, { Easing, interpolateColor, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;

const AnimatedPath = Animated.createAnimatedComponent(Path);

type CheckboxProps = {
    checked: boolean;
}

function Checkbox({ checked }: CheckboxProps) {
    const [length, setLength] = useState(0);
    const pathRef = useRef<Path | null>(null)

    const theme = useTheme<Theme>();

    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(checked ? 1 : 0, {
            duration: checked ? 300 : 100,
            easing: Easing.linear
        })
    }, [checked]);

    const animatedPropsStyle = useAnimatedProps(() => ({
        fill: interpolateColor(progress.value, [0, 1], ["#00000000", theme.colors.checkboxFill], 'RGB')
    }), [checked]);

    const animatedPropsStroke = useAnimatedProps(() => ({
        strokeDashoffset: Math.max(0, length - length * progress.value - 0.1)
    }), [checked]);

    return (
        <Svg
            viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(" ")}
            onLayout={() => setLength(pathRef.current?.getTotalLength?.() ?? 0)}
        >
            <Defs>
                <ClipPath id="clipPath">
                    <Path
                        fill="white"
                        stroke="gray"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d={outlineBoxPath}
                    />
                </ClipPath>
            </Defs>

            {/* Outer tick */}
            <AnimatedPath
                fill={'none'}
                strokeWidth={7}
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke={theme.colors.checkboxFill}
                strokeOpacity={checked || false ? 1 : 0}
                strokeDasharray={length}
                d={checkMarkPath}
                ref={pathRef}
                animatedProps={animatedPropsStroke}
            />

            <AnimatedPath
                d={outlineBoxPath}
                strokeWidth={7}
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke={theme.colors.checkboxFill}
                animatedProps={animatedPropsStyle}
            />

            <G clipPath="url(#clipPath)">
                {/* inner tick */}
                <AnimatedPath
                    fill={'none'}
                    strokeWidth={7}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke={theme.colors.checkFill}
                    strokeOpacity={checked || false ? 1 : 0}
                    strokeDasharray={length}
                    d={checkMarkPath}
                    ref={pathRef}
                    animatedProps={animatedPropsStroke}
                />
            </G>


        </Svg>
    )
}

export default Checkbox;