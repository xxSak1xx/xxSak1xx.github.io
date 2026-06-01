import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import sql from 'highlight.js/lib/languages/sql'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)

/**
 * Highlight all <pre><code> blocks inside a DOM element.
 * Extracts language from `class="language-xxx"` set by marked.
 */
export function highlightElement(container) {
  container.querySelectorAll('pre code').forEach((block) => {
    // Skip already-highlighted blocks
    if (block.dataset.highlighted === '') return

    const langClass = [...block.classList].find((c) =>
      c.startsWith('language-')
    )
    const lang = langClass ? langClass.replace('language-', '') : ''

    const code = block.textContent

    let result
    if (lang && hljs.getLanguage(lang)) {
      result = hljs.highlight(code, { language: lang })
    } else {
      result = hljs.highlightAuto(code)
    }

    block.innerHTML = result.value
    block.dataset.highlighted = ''
  })
}
