/**
 * Auto-discover all .md files from src/assets/md/.
 *
 * Adding a new .md file to the directory makes it automatically available —
 * no JS changes needed.
 */

const mdModules = import.meta.glob('/src/assets/md/*.md', {
  query: '?raw',
  eager: true
})

/**
 * Returns an array of raw article objects.
 * Each has a `slug` (filename without .md) and `raw` (file content string).
 *
 * @returns {Array<{ slug: string, raw: string }>}
 */
export function loadArticles() {
  return Object.entries(mdModules).map(([path, mod]) => {
    // Glob with { eager: true, query: '?raw' } returns a module namespace
    // object { default: '<string>' }, not the raw string itself.
    const raw = typeof mod === 'string' ? mod : mod.default
    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      raw
    }
  })
}
