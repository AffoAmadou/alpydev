uniform float time;
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;


void main() {
    vec3 newposition = position;
    float PI = 3.1415925;

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}