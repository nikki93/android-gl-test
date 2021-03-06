import Exponent, {
  createTHREEViewClass,
} from 'exponent';
import React from 'react';

const THREE = require('three');
const THREEView = createTHREEViewClass(THREE);

export default class THREEScene extends React.Component {
  componentWillMount() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry(200, 200, 200);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  tick = (dt) => {
    this.mesh.rotation.x += 1 * dt;
    this.mesh.rotation.y += 2 * dt;
  }

  render() {
    return (
      <THREEView
        style={this.props.style}
        scene={this.scene}
        camera={this.camera}
        tick={this.tick}
      />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <THREEScene style={{ flex: 1 }} />
    );
  }
}

Exponent.registerRootComponent(App);
