export function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const attributes: WebGLContextAttributes = {
      alpha: true,
      antialias: true,
      depth: true,
      stencil: false,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
    };
    const gl2 = canvas.getContext("webgl2", attributes as any);
    if (gl2) return true;
    const gl = (canvas.getContext("webgl", attributes as any) ||
      canvas.getContext("experimental-webgl", attributes as any)) as WebGLRenderingContext | null;
    return !!gl;
  } catch {
    return false;
  }
}


