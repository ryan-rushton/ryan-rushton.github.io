/// <reference types="vite/client" />

// Type declaration for HTML files imported with ?raw suffix
declare module '*.html?raw' {
  const content: string;
  export default content;
}
