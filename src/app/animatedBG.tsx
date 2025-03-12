"useEffect";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000);

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        const lineCount = 30;
        const lineSpacing = 0.1;
        const lines: THREE.Mesh[] = [];
        const colors = [
            0x00008B, 0x0000CD, 0x191970, 0x1E3A8A, 0x2A52BE,
            0x4682B4, 0x5D3FD3, 0x4169E1, 0x0F52BA, 0x27408B
        ];

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,
            0.4,
            0.85
        );
        bloomPass.threshold = 0;
        bloomPass.strength = 2;
        bloomPass.radius = 0.1;
        composer.addPass(bloomPass);

        function createInfiniteLine(offset: number) {
            const points = [];
            for (let x = -50; x <= 50; x += 0.4) {
                let y = Math.sin(x * 1.5 + offset) * 2;
                let z = Math.cos(x * 1.2 + offset) * 1.5;
                points.push(new THREE.Vector3(x, y, z));
            }

            const curve = new THREE.CatmullRomCurve3(points);
            const geometry = new THREE.TubeGeometry(curve, 100, 0.02, 8, false);
            const material = new THREE.MeshStandardMaterial({
                color: colors[offset % colors.length],
                emissive: colors[offset % colors.length],
                emissiveIntensity: 1.5,
                roughness: 0.3,
                metalness: 0.8,
            });

            const lineMesh = new THREE.Mesh(geometry, material);
            lineMesh.position.y = (offset - lineCount / 2) * lineSpacing;
            lines.push(lineMesh);
            scene.add(lineMesh);
        }

        for (let i = 0; i < lineCount; i++) {
            createInfiniteLine(i);
        }

        camera.position.set(0, 0, 10);

        const light = new THREE.AmbientLight(0x404040);
        scene.add(light);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();

            lines.forEach((line, index) => {
                const positions = line.geometry.attributes.position.array;
                for (let j = 0; j < positions.length; j += 3) {
                    positions[j + 1] = Math.sin(
                        positions[j] + performance.now() * 0.002 + index * 0.3
                    );
                }
                line.geometry.attributes.position.needsUpdate = true;
            });

            composer.render();
        };

        animate();

        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0" />;
}
