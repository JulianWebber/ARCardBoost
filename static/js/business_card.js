function initBusinessCard() {
    const cardEntity = document.getElementById('businessCard');
    
    // Create a scene
    const scene = new THREE.Scene();
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;
    
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);
    cardEntity.appendChild(renderer.domElement);
    
    // Create a plane for the business card
    const geometry = new THREE.PlaneGeometry(1, 0.6);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cardMesh = new THREE.Mesh(geometry, material);
    scene.add(cardMesh);

    // Add text to the card
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
        const textGeometry = new THREE.TextGeometry('John Doe\nSoftware Engineer\njohn@example.com', {
            font: font,
            size: 0.05,
            height: 0.01
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-0.4, 0.2, 0.01);
        cardMesh.add(textMesh);
    });

    // Add profile picture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/static/assets/profile_picture.png', function(texture) {
        const picGeometry = new THREE.PlaneGeometry(0.2, 0.2);
        const picMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const picMesh = new THREE.Mesh(picGeometry, picMaterial);
        picMesh.position.set(0.3, 0, 0.01);
        cardMesh.add(picMesh);
    });

    // Load and add 3D laptop model
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('/static/assets/laptop.glb', function(gltf) {
        const laptop = gltf.scene;
        laptop.scale.set(0.1, 0.1, 0.1);
        laptop.position.set(0.3, -0.2, 0.1);
        laptop.rotation.x = -Math.PI / 4;
        cardMesh.add(laptop);
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // Add interactivity
    cardEntity.addEventListener('click', function(evt) {
        window.open('https://www.linkedin.com/in/johndoe', '_blank');
    });
}
