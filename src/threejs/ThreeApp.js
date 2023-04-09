import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";
import vertex from "../shader/vertex.glsl";
import fragment from "../shader/fragment.glsl";
import imagesLoaded from 'imagesloaded';
import * as dat from "dat.gui";
import brush from "../assets/brush.png";


export default class Sketch {
  constructor(selector) {
    this.currentScroll = 0;
    this.scene = new THREE.Scene();
    this.container = selector;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;


    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 100, 2000);

    this.texture = new THREE.Texture();

    this.camera.position.z = 600;
    this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.container.appendChild(this.renderer.domElement);


    this.images = [];
    this.materials = []


    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.isPlaying = true;

    const preloadImages = new Promise((resolve, reject) => {
      imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
    });

    let allDone = [preloadImages]

    Promise.all(allDone).then(() => {
      this.images = [...document.querySelectorAll("img")];
      this.addImages();
      // this.addObjects();


      this.resize();
      this.setupResize();
      this.setPosition();
      this.render();
      // this.settings();
      // window.addEventListener("scroll", () => {
      //   this.currentScroll = window.scrollY;
      //   console.log(this.currentScroll);
      //   this.setPosition();
      // });
      ;
    })
  }

  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("scroll", this.resize.bind(this));

  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * 180 / Math.PI;



    this.imageStore.forEach(i => {
      let bounds = i.img.getBoundingClientRect();
      i.mesh.scale.set(bounds.width, bounds.height, 1);
      i.top = bounds.top;
      i.left = bounds.left;
      i.width = bounds.width;
      i.height = bounds.height;
    })

    this.setPosition();

  }


  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render();
      this.isPlaying = true;
    }
  }
  addImages() {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        uImage: { value: 0 },
        hover: { value: new THREE.Vector2(0.5, 0.5) },
        hoverState: { value: 0 },
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uT: { value: 0 }
      },
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
    })

    this.imageStore = this.images.map(img => {
      let bounds = img.getBoundingClientRect()

      let geometry = new THREE.PlaneGeometry(1, 1, 100, 100);

      let image = new Image();
      image.src = img.src;
      let texture = new THREE.Texture(image);

      texture.needsUpdate = true;

      let material = this.material.clone();

      this.materials.push(material)
      material.uniforms.uT.value = texture;
      let mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh)

      return {
        img: img,
        mesh: mesh,
        top: bounds.top,
        left: bounds.left,
        width: bounds.width,
        height: bounds.height
      }
    })
  }




  setPosition() {
    this.imageStore.forEach(o => {
      o.mesh.position.y = this.currentScroll - o.top + this.height / 2 - o.height / 2;
      o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
    })
  }
  render() {
    // if (!this.isPlaying) return;
    this.time += 0.05;
    // this.material.uniforms.time.value = this.time;
    // this.setPosition();
    // this.materials.forEach(m => {
    //   m.uniforms.time.value = this.time;
    // })


    this.setPosition()

    window.requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}


