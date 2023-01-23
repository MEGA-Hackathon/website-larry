import React from "react";
import styled, { keyframes } from "styled-components";

const Wavy = keyframes`
	from {
		transform: translate3d(-90px,0,0);
	}
	to { 
		transform: translate3d(85px,0,0);
	}
`;

const SimpleWave = styled.g`
    use {
        fill: ${({ theme }) => theme.colors.surface.background};
    }
    > use {
        animation: ${Wavy} 55s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 16s;
    }
    > use:nth-child(5) {
        animation-delay: -4s;
        animation-duration: 20s;
    }
`;

const Svg = styled.svg`
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
`;

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
`;

const Waves = () => {
    return (
        <Wrapper>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <SimpleWave>
                    <use xlinkHref="#gentle-wave" x="48" y="7" opacity={0.2} />
                    <use xlinkHref="#gentle-wave" x="48" y="5" opacity={0.4} />
                    <use xlinkHref="#gentle-wave" x="48" y="3" opacity={0.6} />
                    <use xlinkHref="#gentle-wave" x="48" y="1" opacity={0.8} />
                </SimpleWave>
            </Svg>
        </Wrapper>
    );
};

export default Waves;
