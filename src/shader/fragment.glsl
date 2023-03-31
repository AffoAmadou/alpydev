varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;



uniform float time;
uniform float hoverState;

void main() {

    vec2 newUV = vUv;
    vec4 image = texture2D(uImage, vUv);
    gl_FragColor = image;
}