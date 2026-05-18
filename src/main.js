import './style.css'
import 'highlight.js/styles/atom-one-dark.css'
import heroImg from './assets/hero.png'
import { loadArticles } from './md-loader.js'
import { parseMarkdown } from './md-parser.js'
import { highlightElement } from './md-highlight.js'

// ── Essay search & pagination state ───────────────────────────────

const PAGE_SIZE = 8
let essaySearchQuery = ''
let essayCurrentPage = 1

function resetEssayState() {
  essaySearchQuery = ''
  essayCurrentPage = 1
}

function matchSearch(metadata, query) {
  if (!query) return true
  const q = query.toLowerCase()
  const fields = [metadata.title, metadata.date, metadata.description]
  return fields.some((f) => {
    const v = f instanceof Date ? formatDate(f) : String(f ?? '')
    return v.toLowerCase().includes(q)
  })
}

function renderEssayList() {
  let articles
  try {
    articles = loadArticles()
  } catch (e) {
    console.error('Failed to load articles:', e)
    return `<section class="section-content"><h1>随笔</h1><p class="md-empty">加载文章列表失败</p></section>`
  }

  const parsed = articles
    .map((a) => {
      try {
        const { metadata } = parseMarkdown(a.raw)
        return { slug: a.slug, ...metadata }
      } catch (e) {
        console.error('Failed to parse', a.slug, e)
        return { slug: a.slug, title: a.slug, date: '', description: '(解析失败)' }
      }
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))

  // Filter by search query (frontmatter fields)
  const filtered = parsed.filter((a) => matchSearch(a, essaySearchQuery))

  if (filtered.length === 0) {
    const msg = essaySearchQuery ? '没有找到匹配的随笔' : '暂无文章'
    const searchHTML = renderSearchInput()
    return `<section class="section-content"><h1>随笔</h1>${searchHTML}<p class="md-empty">${msg}</p></section>`
  }

  // Paginate
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  // Clamp current page in case filtered results shrunk
  if (essayCurrentPage > totalPages) essayCurrentPage = totalPages
  if (essayCurrentPage < 1) essayCurrentPage = 1

  const start = (essayCurrentPage - 1) * PAGE_SIZE
  const pageArticles = filtered.slice(start, start + PAGE_SIZE)

  const items = pageArticles
    .map(
      (a) => `
    <article class="essay-item">
      <a href="#essay/${a.slug}" class="essay-link">
        <h3>${escapeHTML(a.title || a.slug)}</h3>
        <div class="meta">${escapeHTML(formatDate(a.date))}</div>
        <p>${escapeHTML(a.description || '')}</p>
      </a>
    </article>`
    )
    .join('')

  const searchHTML = renderSearchInput()
  const paginationHTML = totalPages > 1 ? renderPagination(essayCurrentPage, totalPages) : ''

  return `<section class="section-content"><h1>随笔</h1>${searchHTML}<div class="essay-list">${items}</div>${paginationHTML}</section>`
}

// ── Nav / Layout helpers ──────────────────────────────────────────

function navHTML(hash) {
  const isEssay = hash === 'essays' || hash.startsWith('essay/')
  return `
    <nav>
      <a href="#home" class="${hash === 'home' || hash === '' ? 'active' : ''}">首页</a>
      <a href="#resume" class="${hash === 'resume' ? 'active' : ''}">简历</a>
      <a href="#projects" class="${hash === 'projects' ? 'active' : ''}">项目</a>
      <a href="#essays" class="${isEssay ? 'active' : ''}">随笔</a>
    </nav>`
}

function footerHTML() {
  return `<footer><p>&copy; 2026 xxSak1xx · Built with Vite</p></footer>`
}

function layout(hash, mainHTML) {
  return `${navHTML(hash)}<main>${mainHTML}</main>${footerHTML()}`
}

// ── Static routes ────────────────────────────────────────────────

const routes = {
  home: () => `
    <section class="section-content">
      <div class="hero-container">
        <img src="${heroImg}" class="hero-image" alt="Avatar">
      </div>
      <div class="welcome-text">
        <h1>欢迎来到我的博客</h1>
        <p>这里记录了我的成长历程、项目实践以及一些琐碎的随笔。</p>
      </div>
    </section>
  `,

  resume: () => `
    <section class="section-content resume-section">
      <div class="resume-header">
        <h1>个人简历</h1>
        <p>热爱技术，不断探索的开发者</p>
      </div>

      <div class="resume-group">
        <h2>教育背景</h2>
        <div class="resume-item">
          <h3>某某大学 · 计算机科学与技术</h3>
          <p class="date">2020.09 - 2024.06</p>
          <p>主修课程：数据结构、算法分析、操作系统、计算机网络、数据库系统等。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>工作经历</h2>
        <div class="resume-item">
          <h3>某某科技公司 · 前端开发实习生</h3>
          <p class="date">2023.07 - 2023.12</p>
          <p>负责公司内部管理系统的维护与新功能开发，使用 React 和 Tailwind CSS 提升了页面性能和开发效率。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>技能专长</h2>
        <div class="skills-tags">
          <span>JavaScript</span>
          <span>Vue</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  `,

  projects: () => `
    <section class="section-content">
      <div class="projects-header">
        <h1>项目介绍</h1>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <h3>个人博客网站</h3>
          <p>基于 Vite + Tailwind CSS 开发的响应式个人博客，支持深色模式与科技风主题。</p>
          <div class="tags">
            <span class="tag">Vite</span>
            <span class="tag">Tailwind</span>
          </div>
        </div>
        <div class="project-card">
          <h3>任务管理系统</h3>
          <p>一个简单易用的待办事项管理应用，支持任务分类、优先级设置和本地存储。</p>
          <div class="tags">
            <span class="tag">Vue 3</span>
            <span class="tag">Pinia</span>
          </div>
        </div>
        <div class="project-card">
          <h3>数据可视化看板</h3>
          <p>使用 ECharts 展示实时数据动态，提供多种图表交互与数据洞察功能。</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">ECharts</span>
          </div>
        </div>
      </div>
    </section>
  `,

  // Dynamic essays list — generated from MD file frontmatter
  essays: () => renderEssayList(),
}

// ── Essay detail (hash = "essay/<slug>") ─────────────────────────

function renderEssayPage(hash, slug) {
  const articles = loadArticles()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return layout(hash, `
      <section class="section-content">
        <h1>404</h1>
        <p>文章不存在。</p>
        <a href="#essays" class="md-back-link">← 返回随笔列表</a>
      </section>`)
  }

  const { metadata, html } = parseMarkdown(article.raw)

  return layout(hash, `
    <article class="section-content md-content">
      <a href="#essays" class="md-back-link">← 返回随笔列表</a>
      <h1>${escapeHTML(metadata.title || slug)}</h1>
      <div class="md-meta">${escapeHTML(formatDate(metadata.date))}</div>
      <div class="md-body">${html}</div>
    </article>`)
}

// ── Utility ──────────────────────────────────────────────────────

function renderSearchInput() {
  const q = escapeHTML(essaySearchQuery)
  return `<input
    class="essay-search"
    type="text"
    placeholder="搜索标题、日期、描述..."
    value="${q}"
    data-essay-search
  >`
}

function renderPagination(current, total) {
  const prevDisabled = current <= 1
  const nextDisabled = current >= total

  return `
  <div class="pagination">
    <span class="pagination-btn ${prevDisabled ? 'pagination-btn--disabled' : ''}" data-page="prev">← 上一页</span>
    <span class="pagination-info">
      第
      <input class="page-jump-input" type="text" value="${current}" data-page-jump>
      / ${total} 页
    </span>
    <span class="page-jump-btn" data-page-go>跳转</span>
    <span class="pagination-btn ${nextDisabled ? 'pagination-btn--disabled' : ''}" data-page="next">下一页 →</span>
  </div>`
}

function escapeHTML(str) {
  if (str == null) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function bindEssayEvents() {
  // Search input: real-time filtering
  const searchInput = document.querySelector('[data-essay-search]')
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      essaySearchQuery = e.target.value
      essayCurrentPage = 1
      render()
    })
    // Focus at end of input after render
    searchInput.focus()
    const len = searchInput.value.length
    searchInput.setSelectionRange(len, len)
  }

  // Pagination: prev/next buttons
  const prevBtn = document.querySelector('[data-page="prev"]')
  const nextBtn = document.querySelector('[data-page="next"]')
  if (prevBtn && !prevBtn.classList.contains('pagination-btn--disabled')) {
    prevBtn.addEventListener('click', () => {
      if (essayCurrentPage > 1) {
        essayCurrentPage--
        render()
      }
    })
  }
  if (nextBtn && !nextBtn.classList.contains('pagination-btn--disabled')) {
    nextBtn.addEventListener('click', () => {
      essayCurrentPage++
      render()
    })
  }

  // Page jump: validate and go
  const jumpInput = document.querySelector('[data-page-jump]')
  const goBtn = document.querySelector('[data-page-go]')
  if (jumpInput && goBtn) {
    const doJump = () => {
      const raw = jumpInput.value.trim()
      const totalPages = Math.ceil(
        loadArticles()
          .map((a) => {
            try { return parseMarkdown(a.raw).metadata }
            catch { return {} }
          })
          .filter((m) => matchSearch(m, essaySearchQuery)).length / PAGE_SIZE
      ) || 1

      // Empty input: ignore
      if (raw === '') return

      // Non-integer check (reject decimals and non-numeric)
      const num = Number(raw)
      if (!Number.isInteger(num) || raw.includes('.')) {
        jumpInput.classList.add('page-jump-input--error')
        jumpInput.value = essayCurrentPage
        setTimeout(() => jumpInput.classList.remove('page-jump-input--error'), 400)
        return
      }

      // Clamp
      let page = num
      if (page < 1) page = 1
      if (page > totalPages) page = totalPages

      // Already on target page: ignore
      if (page === essayCurrentPage) return

      essayCurrentPage = page
      render()
    }

    goBtn.addEventListener('click', doJump)
    jumpInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doJump()
    })
  }
}

function formatDate(d) {
  if (!d) return ''
  if (d instanceof Date && !isNaN(d)) {
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0')
  }
  return String(d)
}

// ── Render ───────────────────────────────────────────────────────

function render() {
  const app = document.querySelector('#app')
  if (!app) {
    console.error('App element not found!')
    return
  }

  const hash = window.location.hash.slice(1) || 'home'

  // Reset essay state when leaving essay pages
  if (!hash.startsWith('essay')) {
    resetEssayState()
  }

  // Essay detail: hash starts with "essay/"
  if (hash.startsWith('essay/')) {
    const slug = hash.slice(6)
    try {
      app.innerHTML = renderEssayPage(hash, slug)
      const body = document.querySelector('.md-body')
      if (body) highlightElement(body)
      bindEssayEvents()
    } catch (e) {
      console.error('Essay detail render failed:', e)
      const errMsg = e instanceof Error ? e.message : String(e)
      app.innerHTML = layout(hash, `<section class="section-content"><h1>文章加载失败</h1><p>${escapeHTML(errMsg)}</p><a href="#essays" class="md-back-link">← 返回随笔列表</a></section>`)
    }
    return
  }

  // Standard routes (home, resume, projects, essays)
  try {
    const route = routes[hash] || routes.home
    app.innerHTML = layout(hash, route())
    bindEssayEvents()
  } catch (e) {
    console.error('Route render failed:', e)
    app.innerHTML = layout(hash, `<section class="section-content"><h1>出错了</h1><p>${escapeHTML(e.message)}</p></section>`)
  }
}

window.addEventListener('hashchange', render)
window.addEventListener('DOMContentLoaded', render)
render()
