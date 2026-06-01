import { marked } from 'marked'

/**
 * Lightweight YAML frontmatter parser.
 * Parses `---`-delimited key:value pairs at the top of a markdown file.
 * Avoids the gray-matter → js-yaml → buffer dependency chain that breaks
 * in the browser (buffer is externalized to {}).
 *
 * Supports:
 *   - Simple key: value pairs
 *   - YYYY-MM-DD dates (auto-converted to Date objects)
 *   - Bare strings / numbers / booleans
 *
 * @param {string} raw - Raw markdown with optional frontmatter
 * @returns {{ metadata: Record<string, any>, html: string }}
 */
export function parseMarkdown(raw) {
  let metadata = {}
  let content = raw

  // Extract YAML frontmatter block
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3)
    if (end !== -1) {
      const yamlBlock = raw.slice(3, end).trim()
      content = raw.slice(end + 4).trim()

      for (const line of yamlBlock.split('\n')) {
        const colonIdx = line.indexOf(':')
        if (colonIdx === -1) continue

        const key = line.slice(0, colonIdx).trim()
        let value = line.slice(colonIdx + 1).trim()

        // Remove surrounding quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }

        // Auto-convert dates (YYYY-MM-DD)
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          value = new Date(value)
        }
        // Convert booleans
        else if (value === 'true') value = true
        else if (value === 'false') value = false

        metadata[key] = value
      }
    }
  }

  const html = marked.parse(content)
  return { metadata, html }
}
