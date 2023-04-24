export const vertex = `
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;
uniform float time;


void main() {
    vec3 newposition = position;
    float PI = 3.1415925;
    vUv = uv;
    newposition.y += sin(position.y * PI * 2.0 + time * .2) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
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

    vec3 color1 = vec3(0.19, 0.48, 0.47);
    vec3 color2 = vec3(1, 0.7098, 0.298);
    vec3 mixColor = mix(color1, color2, vUv.x);

    gl_FragColor = vec4(color1, 1.0);
}
`;
