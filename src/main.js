import './style.css'
import heroImg from './assets/hero.png'

const routes = {
  home: () => `
    <section class="section-content">
      <div class="hero-container">
        <img src="${heroImg}" class="hero-image" alt="Hero">
      </div>
      <div class="welcome-text">
        <h1>欢迎来到我的博客</h1>
        <p>这里记录了我的成长历程、项目实践以及一些琐碎的随笔。</p>
      </div>
    </section>
  `,
  // ... (keeping other routes as they were, but I'll rewrite the whole thing for clarity)
  resume: () => `
    <section class="section-content resume-section">
      <div class="resume-header">
        <h1>个人简历</h1>
        <p>热爱技术，不断探索的开发者</p>
      </div>
      
      <div class="resume-group">
        <h2>教育背景</h2>
        <div class="resume-item">
          <h3>某某大学 - 计算机科学与技术</h3>
          <p class="date">2020.09 - 2024.06</p>
          <p>主修课程：数据结构、算法分析、操作系统、计算机网络、数据库系统等。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>工作经历</h2>
        <div class="resume-item">
          <h3>某某科技公司 - 前端实习生</h3>
          <p class="date">2023.07 - 2023.12</p>
          <p>负责公司内部管理系统的维护与新功能开发，使用 React 和 Tailwind CSS 提升了页面性能和开发效率。</p>
        </div>
      </div>

      <div class="resume-group">
        <h2>技能专长</h2>
        <div class="skills-tags">
          <span>JavaScript (ES6+)</span>
          <span>Vue / React</span>
          <span>Node.js</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  `,
  projects: () => `
    <section class="section-content">
      <h1>项目介绍</h1>
      <div class="projects-grid">
        <div class="project-card">
          <h3>个人博客网站</h3>
          <p>基于 Vite + Tailwind CSS 开发的响应式个人博客，支持深色模式。</p>
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
          <p>使用 ECharts 展示实时数据动态，提供多种图表交互功能。</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">ECharts</span>
          </div>
        </div>
      </div>
    </section>
  `,
  essays: () => `
    <section class="section-content">
      <h1>随笔</h1>
      <div class="essay-list">
        <article class="essay-item">
          <h3>我的 2025 年终总结</h3>
          <div class="meta">发布于 2025-12-31 | 阅读时间: 10 min</div>
          <p>回顾这一年，在技术和生活上的感悟。从迷茫到逐渐清晰的目标...</p>
        </article>
        <article class="essay-item">
          <h3>为什么我选择了前端开发？</h3>
          <div class="meta">发布于 2025-10-15 | 阅读时间: 5 min</div>
          <p>前端开发的魅力在于它能直接将创意呈现给用户。聊聊我进入这个行业的初衷。</p>
        </article>
        <article class="essay-item">
          <h3>Tailwind CSS：提升开发效率的利器</h3>
          <div class="meta">发布于 2025-08-20 | 阅读时间: 8 min</div>
          <p>在使用了多个 CSS 框架后，为什么我最终爱上了 Tailwind CSS 的原子化思想。</p>
        </article>
      </div>
    </section>
  `
}

function render() {
  const app = document.querySelector('#app')
  if (!app) {
    console.error('App element not found!')
    return
  }

  const hash = window.location.hash.slice(1) || 'home'
  const route = routes[hash] || routes.home
  
  app.innerHTML = `
    <nav>
      <a href="#home" class="${hash === 'home' || hash === '' ? 'active' : ''}">首页</a>
      <a href="#resume" class="${hash === 'resume' ? 'active' : ''}">简历</a>
      <a href="#projects" class="${hash === 'projects' ? 'active' : ''}">项目</a>
      <a href="#essays" class="${hash === 'essays' ? 'active' : ''}">随笔</a>
    </nav>
    <main>
      ${route()}
    </main>
    <footer>
      <p>&copy; 2026 xxSak1xx. Built with Vite.</p>
    </footer>
  `
}

window.addEventListener('hashchange', render)
window.addEventListener('DOMContentLoaded', render)
// 初始渲染
render()
