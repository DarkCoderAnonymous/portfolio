import * as THREE from "three";

/**
 * Create a random position within a sphere
 */
export function randomSpherePoint(radius: number): [number, number, number] {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);
  const r = Math.random() * radius;

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);

  return [x, y, z];
}

/**
 * Map mouse position to 3D rotation
 */
export function mouseToRotation(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number,
  intensity: number = 0.5
): { x: number; y: number } {
  const x = (mouseY / height - 0.5) * intensity;
  const y = (mouseX / width - 0.5) * intensity;
  return { x, y };
}

/**
 * Lerp (Linear Interpolation) for smooth transitions
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Create gradient material
 */
export function createGradientMaterial(
  color1: string,
  color2: string
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
  });
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
