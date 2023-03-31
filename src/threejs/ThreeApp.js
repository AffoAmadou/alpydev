import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";
import vertex from "../shader/vertex.glsl";
import fragment from "../shader/fragment.glsl";
import imagesLoaded from 'imagesloaded';
import ohi from '../assets/ohi.png';


export default class Sketch {
  constructor(selector) {
    this.currentScroll = 0;
    this.scene = new THREE.Scene();
    this.container = selector;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
      100,
      2000
    );

    this.texture = new THREE.Texture();


    this.camera.position.z = 600;
    this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    // this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setSize(this.width, this.height);
    // this.renderer.setClearColor(0xeeeeee, 1);
    // this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);



    console.log(this.images);


    this.images = [];


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
      this.setPosition();

      this.resize();
      this.setupResize();

      this.render();

      window.addEventListener("scroll", () => {
        this.currentScroll = window.scrollY;
        console.log(this.currentScroll);
        this.setPosition();
      });
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
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    console.log("resize");
    this.setPosition();
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: "f", value: 0 },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: {
          value: new THREE.Vector2(1, 1),
        },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
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
        uT: { value: 0 }
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    })

    this.materials = []

    this.imageStore = this.images.map(img => {
      let bounds = img.getBoundingClientRect()

      let geometry = new THREE.PlaneGeometry(bounds.width, bounds.height, 10, 10);

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

    console.log(this.imageStore);

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
    this.setPosition();
    this.materials.forEach(m => {
      m.uniforms.time.value = this.time;
    })
    window.requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
