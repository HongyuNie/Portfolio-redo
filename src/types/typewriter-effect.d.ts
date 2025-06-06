declare module 'typewriter-effect/dist/core' {
  export default class Typewriter {
    constructor(element: HTMLElement, options: {
      strings?: string[];
      autoStart?: boolean;
      loop?: boolean;
      deleteSpeed?: number;
    });
  }
} 