function initBusinessCard() {
    const cardEntity = document.getElementById('businessCard');
    
    // Create a plane for the business card
    const geometry = new THREE.PlaneGeometry(1, 0.6);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cardMesh = new THREE.Mesh(geometry, material);

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
    textureLoader.load('{{ url_for("static", filename="assets/profile_picture.png") }}', function(texture) {
        const picGeometry = new THREE.PlaneGeometry(0.2, 0.2);
        const picMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const picMesh = new THREE.Mesh(picGeometry, picMaterial);
        picMesh.position.set(0.3, 0, 0.01);
        cardMesh.add(picMesh);
    });

    // Add the card to the scene
    cardEntity.object3D.add(cardMesh);

    // Add interactivity
    cardEntity.addEventListener('click', function(evt) {
        window.open('https://www.linkedin.com/in/johndoe', '_blank');
    });
}
