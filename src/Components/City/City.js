import React, { Component } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

class ThreeScene extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight;
    this.distance = 2;
    this.controls = null;;
    //ADD SMOKE
    this.smoke = new THREE.Object3D();

    //ADD SCENE
    this.scene = new THREE.Scene()
    
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    this.camera.position.set(15,7,12)

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#1c1c1c')
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement)

    // GRID
    const gridHelper = new THREE.GridHelper( 60, 120, 0xFF0000, 0x000000);
    
    //ADD CUBE
    this.addShape()
    
    // CONTROLLS
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', this.renderScene)

    // LIGHTS
    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 4);
    var lightFront = new THREE.SpotLight(0xFFFFFF, 20, 19);
    var lightBack = new THREE.PointLight(0xFFFFFF, 0.5);

    lightFront.position.set(7, 3, 10);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0,6,0);
    // var spotLightHelper = new THREE.SpotLightHelper( lightFront );
    // this.scene.add( spotLightHelper );


  //SMOKE
  var gmaterial = new THREE.MeshToonMaterial({color:0xFFFF00, side:THREE.DoubleSide});
  var gparticular = new THREE.CircleGeometry(0.01, 3);
  var aparticular = 5;
  
  for (var h = 1; h<300; h++) {
    var particular = new THREE.Mesh(gparticular, gmaterial);
    particular.position.set(this.mathRandom(aparticular), this.mathRandom(aparticular),this.mathRandom(aparticular));
    particular.rotation.set(this.mathRandom(),this.mathRandom(),this.mathRandom());
    this.smoke.add(particular);
  }
    this.smoke.position.y = 5;

    this.scene.add(ambientLight);
    this.scene.add(lightFront);
    this.scene.add(lightBack);
    this.scene.add(this.smoke);
    this.scene.add( gridHelper );

    var setcolor = 0xF02050;
    // var setcolor = 0xF2F111;
    // var setcolor = 0xFF6347;

    this.scene.fog = new THREE.Fog(setcolor, 3, 9);
    
    this.start()
  }

  mathRandom = (num = 8) => {
    var numValue = - Math.random() * num + Math.random() * num;
    return numValue;
  };

  addShape = () => {
    for(let i = 0; i < 10 ; i++) {
        for(let j = 0; j < 10; j++) {
          const geometry = new THREE.BoxGeometry(1, this.randomSize(3,6), 1);
          const  material = new THREE.MeshLambertMaterial({
            color: 0x000000,
            wireframe:false,
            opacity:0.9,
            roughness: 0.3,
            shading: THREE.SmoothShading,
            side:THREE.DoubleSide
          });
      
          this.scene.add(geometry);
          
          let mesh = new THREE.Mesh(geometry, material);

          mesh.position.x = this.distance * i;
          mesh.position.z = this.distance * j;

          var wmaterial = new THREE.MeshLambertMaterial({
            color:0xFFFFFF,
            wireframe:true,
            transparent:true,
            opacity: 0.03,
            side:THREE.DoubleSide,
            // shading:THREE.FlatShading
          });

          var wfloor = new THREE.Mesh(geometry, wmaterial);
          mesh.add(wfloor)

          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.rotationValue = 0.1+Math.abs(this.mathRandom(8));

          this.scene.add(mesh);
        }
    }
    
  }

  randomSize = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  componentWillUnmount(){
      this.stop()
      this.mount.removeChild(this.renderer.domElement)
    }
  start = () => {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate)
      }
    }
  stop = () => {
      cancelAnimationFrame(this.frameId)
    }
  animate = () => {
    // this.cube.rotation.x += 0.01
    // this.cube.rotation.y += 0.01
    this.smoke.rotation.y += 0.01;
    this.smoke.rotation.x += 0.01;
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
    this.controls.update();
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
    console.log('z ', this.camera.position.z)
    console.log('y ',this.camera.position.y)
    console.log('x ',this.camera.position.x)
 
  }
  render(){
      return(
        <div
          style={{ width: '100vw', height: '100vh' }}
          ref={(mount) => { this.mount = mount }}
        />
      )
    }
}
export default ThreeScene
