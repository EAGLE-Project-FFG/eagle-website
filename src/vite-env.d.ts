/// <reference types="vite/client" />

declare module "*.md" {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>;

  // Modify below per your usage
  export { attributes };
}
