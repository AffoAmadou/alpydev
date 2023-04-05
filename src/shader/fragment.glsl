varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform sampler2D uT;

uniform float time;
uniform float hoverState;

void main() {

    vec2 newUV = vUv;
    vec4 oceanView = texture2D(uT, (vUv*sin(time*0.1)*0.1));
    gl_FragColor = oceanView;
}