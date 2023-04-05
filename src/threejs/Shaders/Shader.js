export const vertex = `
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;


void main() {
    vec3 newposition = position;
    float PI = 3.1415925;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

export const fragment = `
varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float hoverState;
uniform sampler2D uT;


void main() {

    vec2 newUV = vUv;

    vec4 texture = texture2D(uT, vUv);
    gl_FragColor = texture;
}
`;
