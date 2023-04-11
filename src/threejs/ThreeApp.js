import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";
import * as Sphereshader from "./Shaders/Sphere";
import vertex from "./Shaders/vertex.glsl";
import fragment from "./Shaders/fragment.glsl";
import imagesLoaded from 'imagesloaded';
import * as dat from "dat.gui";
import brush from "../assets/brush.png";
import dots from "../assets/texture/NormalMap.png";
import GSAP from "gsap";

export default class Sketch {
  constructor(selector) {
    this.currentScroll = 0;

    //!scene
    this.scene = new THREE.Scene();
    this.scene1 = new THREE.Scene();
    this.container = selector;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    //!camera
    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 100, 2000);
    this.camera.position.z = 600;
    this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);

    this.texture = new THREE.Texture();

    //!renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    //!lights
    // this.pointLight = new THREE.PointLight(0xFFB54C, 10);
    // this.pointLight.position.set(230, 350, 300);
    // this.scene1.add(this.pointLight);

    // this.pointLight2 = new THREE.PointLight(0x172131, 13);
    // this.pointLight2.position.set(-300, 330, -150);
    // this.scene1.add(this.pointLight2);

    // this.pointLight3 = new THREE.PointLight(0xffffff, 150);
    // this.pointLight3.position.set(400, -400, -300);
    // this.scene1.add(this.pointLight3);

    //!variables
    this.images = [];
    this.materials = []
    this.gui = new dat.GUI();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;
    this.isPlaying = true;

    this.mouseX = 0;
    this.mouseY = 0;
    this.targetX = 0;
    this.targetY = 0;

    //!preloader
    const preloadImages = new Promise((resolve, reject) => {
      imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
    });
    let allDone = [preloadImages]
    Promise.all(allDone).then(() => {
      this.images = [...document.querySelectorAll("img")];
      // this.addImages();
      this.addObjects();


      // this.settings();
      this.resize();
      this.setupResize();
      this.setUpOnMouseMove();
      // this.setPosition();
      this.render();
    })
  }

  settings() {
    let that = this;


    //create tabs
    let f1 = this.gui.addFolder('light1');
    let f2 = this.gui.addFolder('light2');
    let f3 = this.gui.addFolder('light3');

    const light1 = {
      color: 0xFFB54C
    };
    const light2 = {
      color: 0x172131
    };
    const light3 = {
      color: 0x1ff131
    };


    //add settings to tabs
    f1.add(this.pointLight.position, 'y', -400, 400).name('y');
    f1.add(this.pointLight.position, 'x', -400, 400).name('x');
    f1.add(this.pointLight.position, 'z', -300, 300).name('z');
    f1.add(this.pointLight, 'intensity', 0, 300).name('intensity');
    f1.addColor(light1, 'color').onChange(() => {
      that.pointLight.color.set(light1.color);
    });

    f2.add(this.pointLight2.position, 'y', -400, 400).name('y');
    f2.add(this.pointLight2.position, 'x', -400, 400).name('x');
    f2.add(this.pointLight2.position, 'z', -300, 300).name('z');
    f2.add(this.pointLight2, 'intensity', 0, 300).name('intensity');

    f2.addColor(light2, 'color').onChange(() => {
      that.pointLight2.color.set(light2.color);
    });


    f3.add(this.pointLight3.position, 'y', -400, 400).name('y');
    f3.add(this.pointLight3.position, 'x', -400, 400).name('x');
    f3.add(this.pointLight3.position, 'z', -300, 300).name('z');
    f3.add(this.pointLight3, 'intensity', 0, 300).name('intensity');

    f3.addColor(light3, 'color').onChange(() => {
      that.pointLight3.color.set(light3.color);
    });



    const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 1);
    const pointLightHelper2 = new THREE.PointLightHelper(this.pointLight2, 3);
    this.scene1.add(pointLightHelper2);

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



    // this.imageStore.forEach(i => {
    //   let bounds = i.img.getBoundingClientRect();
    //   i.mesh.scale.set(bounds.width, bounds.height, 1);
    //   i.top = bounds.top;
    //   i.left = bounds.left;
    //   i.width = bounds.width;
    //   i.height = bounds.height;
    // })

    this.spherebounds.forEach(i => {
      let bounds = i.obj.getBoundingClientRect();
      i.mesh.scale.x = bounds.width / 5;
      i.mesh.scale.y = bounds.width / 5;
      i.mesh.scale.z = bounds.width / 5;
      i.top = bounds.top;
      i.left = bounds.left;
      i.width = bounds.width;
      i.height = bounds.height;
    })

    this.setPosition();

  }


  // stop() {
  //   this.isPlaying = false;
  // }

  // play() {
  //   if (!this.isPlaying) {
  //     this.render();
  //     this.isPlaying = true;
  //   }
  // }
  // addImages() {
  //   this.material = new THREE.ShaderMaterial({
  //     uniforms: {
  //       time: { value: 0 },
  //       uImage: { value: 0 },
  //       hover: { value: new THREE.Vector2(0.5, 0.5) },
  //       hoverState: { value: 0 },
  //       uResolution: { value: new THREE.Vector2(this.width, this.height) },
  //       uT: { value: 0 }
  //     },
  //     vertexShader: shader.vertex,
  //     fragmentShader: shader.fragment,
  //   })

  //   this.imageStore = this.images.map(img => {
  //     let bounds = img.getBoundingClientRect()

  //     let geometry = new THREE.PlaneGeometry(1, 1, 100, 100);

  //     let image = new Image();
  //     image.src = img.src;
  //     let texture = new THREE.Texture(image);

  //     texture.needsUpdate = true;

  //     let material = this.material.clone();

  //     this.materials.push(material)
  //     material.uniforms.uT.value = texture;
  //     let mesh = new THREE.Mesh(geometry, material);
  //     this.scene.add(mesh)

  //     return {
  //       img: img,
  //       mesh: mesh,
  //       top: bounds.top,
  //       left: bounds.left,
  //       width: bounds.width,
  //       height: bounds.height
  //     }
  //   })
  // }

  onMouseMove(e) {
    this.mouseX = e.clientX - (this.width);
    this.mouseY = e.clientY - (this.height / 2);
  }

  setUpOnMouseMove() {
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  addObjects() {

    // this.textureLoader = new THREE.TextureLoader();

    // const normaltexture = this.textureLoader.load(dots);



    //ADD SPHERE
    this.selector = [...document.querySelectorAll(".home__header__content")];
    this.spherebounds = this.selector.map(o => {
      let bounds = o.getBoundingClientRect();

      const geometry = new THREE.SphereGeometry(1, 100, 100);

      // const material = new THREE.MeshStandardMaterial();
      // material.color = new THREE.Color(0x000000);
      // material.metalness = 0.7;
      // material.roughness = 0.2;
      // material.normalMap = normaltexture;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
        },
        vertexShader: Sphereshader.vertex,
        fragmentShader: Sphereshader.fragment,
        wireframe: true,
      })

      const sphere = new THREE.Mesh(geometry, material);
      this.scene1.add(sphere);

      const tl = GSAP.timeline({ ease: "cubic-bezier(0.77, 0, 0.175, 1)" });


      // Animate rotation
      tl.add(
        GSAP.to(sphere.rotation, {
          duration: 2,
          y: "-=3",
        }),
        0 // Start at the same time
      );
      
      // Animate scale from double to normal size
      tl.add(
        GSAP.fromTo(
          sphere.scale,
          { x: bounds.width/4, y: bounds.width/4, z: bounds.width/3},
          { x: bounds.width/5, duration:2, y: bounds.width/5, duration:2, z: bounds.width/5, duration:2},

        ),
        0 // Start at the same time
      );
      


      return {
        obj: o,
        mesh: sphere,
        top: bounds.top,
        left: bounds.left,
        width: bounds.width,
        height: bounds.height,
        material: material
      }
    })


  }


  setPosition() {
    // this.imageStore.forEach(o => {
    //   o.mesh.position.y = this.currentScroll - o.top + this.height / 2 - o.height / 2;
    //   o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
    // })

    this.spherebounds.forEach(o => {
      o.mesh.position.y = this.currentScroll - o.top + this.height / 2 - o.height / 2;
      o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
    }
    )
  }
  render() {

    this.time += 0.05;

    this.setPosition()

    this.targetX = this.mouseX * 0.001;
    this.targetY = this.mouseY * 0.001;
    //rotate the sphere
    this.spherebounds.forEach(o => {
      // o.mesh.rotation.y = this.time * 0.05;
      o.mesh.rotation.x += 0.05 * (this.targetY - o.mesh.rotation.x);
      o.mesh.rotation.y += 0.05 * (this.targetX - o.mesh.rotation.y);
      o.mesh.position.z += -6.5 * (this.targetY - o.mesh.rotation.x);
      o.material.uniforms.time.value = this.time;
    })

    window.requestAnimationFrame(this.render.bind(this));
    // this.renderer.render(this.scene, this.camera);
    this.renderer.render(this.scene1, this.camera);

  }
}


