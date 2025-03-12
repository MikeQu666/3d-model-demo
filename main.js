// 创建 Three.js 场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3); // 相机位置

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加控制器
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

// 光源
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// 注释模型加载器
/*
const loader = new THREE.GLTFLoader();
loader.load('model.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error('加载模型失败:', error);
});
*/

// 测试立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// 渲染循环
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// 自适应屏幕大小
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
