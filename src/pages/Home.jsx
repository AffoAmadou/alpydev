import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import { useEffect } from 'react'
import * as THREE from "three";
import ohimg from '../assets/ohi.png'

export default function Home() {
   
    return (
       
           
           


        <>
            <div className="home">
                <Navigation />
                <div className="home__container">
                    <div className="home__container__text">
                        <h1 className="home__container__text__title">Studio Freight</h1>
                         <p className="home__container__text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div className='hey'>
                      
        
                      
                            <img src={ohimg} alt="" />
                       
                    </div>
                    <div className='hey'>
                      
                            <img src={ohimg} alt="" />
                       
                    </div>
                </div>
            </div>
        </>
    )

}




// const images = [...document.querySelectorAll('img')];

// const container = document.getElementById('container');
// let width = container.offsetWidth;
// let height = container.offsetHeight;


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setClearColor("#e5e5e5");
// renderer.setSize(window.innerWidth, window.innerHeight);
// container.appendChild(renderer.domElement);



// console.log(width, height);


// function addImages() {
//     const material = new THREE.ShaderMaterial({
//         uniforms: {
//             time: { value: 0 },
//             uImage: { value: 0 },
//             hover: { value: new THREE.Vector2(0.5, 0.5) },
//             hoverState: { value: 0 },
//         },
//         side: THREE.DoubleSide,
//         fragmentShader: fragment,
//         vertexShader: vertex,
//         // wireframe: true
//     })

//     let materials = []

//     imageStore = images.map(img => {
//         let bounds = img.getBoundingClientRect()

//         let geometry = new THREE.PlaneGeometry(bounds.width, bounds.height, 10, 10);
//         let texture = new THREE.Texture(img);
//         texture.needsUpdate = true;


//         let mat = material.clone();



//         materials.push(material)

//         mat.uniforms.uImage.value = texture;

//         let mesh = new THREE.Mesh(geometry, material);

//         scene.add(mesh)


//         return {
//             img: img,
//             mesh: mesh,
//             top: bounds.top,
//             left: bounds.left,
//             width: bounds.width,
//             height: bounds.height
//         }
//     })

//     console.log(imageStore);

// }
// addImages();

// function setPosition(){
//     imageStore.forEach(o=>{
//         o.mesh.position.y = currentScroll -o.top + window.innerHeight/2 - o.height/2;
//         o.mesh.position.x = o.left - window.innerWidth/2 + o.width/2;
//     })
// }

// setPosition();




// function resize(){
//     width = window.innerWidth;
//     height = window.innerHeight;
//     renderer.setSize( width,height );
//     camera.aspect = width/height;
//     camera.updateProjectionMatrix();
//     console.log(width, height);
// }

// function setupResize(){
//     window.addEventListener('resize',resize.bind(this));
// }
// setupResize();


// camera.position.z = 600;
// const animate = function () {
//     requestAnimationFrame(animate);
    
//     renderer.render(scene, camera);
// };
// animate();