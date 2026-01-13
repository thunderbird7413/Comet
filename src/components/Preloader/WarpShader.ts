export const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uContainerHeight;
  
  attribute float size;
  attribute vec3 velocity;
  
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    
    // Move stars towards camera (positive Z)
    // Distance traveled = time * speed * individual_velocity
    // We wrap them around a box of size 400
    float zOffset = mod(pos.z + uTime * uSpeed * 20.0, 400.0);
    pos.z = zOffset - 200.0; // range -200 to 200
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Warp Effect: Scale based on speed
    // This is a simple trick: we make the points HUGE when fast, and rely on fragment shader to draw lines
    // Alternatively, we stretch them. For 'Points', we only control gl_PointSize.
    // Making them actual lines is harder/heavier. Let's try the Point Stretcher trick in fragment or 
    // just large points that look like streaks?
    // Better: Render LINES instead of Points for warp? Or BufferGeometry with trail?
    // Let's stick to Points but stretch them in screen space via gl_PointSize
    
    gl_PointSize = size * (300.0 / -mvPosition.z);
    
    // If warping, we stretch vertically/radially? No, points are squares.
    // For a true warp, we need LineSegments.
    // BUT for simplicity and performance in this "Agent" mode, let's stick to Points but fade them 
    // and rely on speed to create the "illusion" or use a texture that is a line.
    
    gl_Position = projectionMatrix * mvPosition;
    
    // Color Shift: White -> Emerald as speed increases
    float speedFactor = smoothstep(0.0, 50.0, uSpeed);
    vColor = mix(vec3(1.0), vec3(0.05, 0.9, 0.5), speedFactor); // Emerald tint
    
    // Fade out as they get close to camera to prevent popping
    vAlpha = smoothstep(20.0, 50.0, abs(pos.z)); // Simple fade at boundaries?
    // Better: Fade at close range
    vAlpha = smoothstep(10.0, 50.0, -mvPosition.z); // Fade when very close
  }
`;

export const fragmentShader = `
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Simple circular point
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    
    // Glow center
    float glow = 1.0 - (dist * 2.0);
    glow = pow(glow, 1.5);

    gl_FragColor = vec4(vColor, vAlpha * glow);
  }
`;

// NOTE: True 3D warp (streaks) is hard with just Points.
// We will use a "LineSegments" approach in the Component if we want real lines,
// OR we just move them ridiculously fast.
