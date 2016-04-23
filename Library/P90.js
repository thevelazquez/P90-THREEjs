var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
		
var spotLight = new THREE.SpotLight( 0xffffff );

spotLight.castShadow = true;

spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;

spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;

scene.add( spotLight );
		
camera.position.z = 8;
spotLight.position.set( 0, 10, 100 );
		
var loader = new THREE.JSONLoader();
loader.load('images/P90.json', addModel);
		
function addModel( geometry,  materials ) {
  var texture = THREE.ImageUtils.loadTexture( "images/P90.png" );
  var material = new THREE.MeshPhongMaterial( {map: texture} );
			
  P90 = new THREE.Mesh( geometry, material );
  scene.add( P90 );            
}
		
function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
     
  P90.rotation.y += 0.01;
}
		
render();