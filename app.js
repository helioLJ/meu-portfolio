const projects = [
  {
      src: './imgs/notifications-service.png',
      title: 'Blog com Node.Js e Handlebars',
      preview: 'https://github.com/helioLJ/blogapp-com-mongodb',
      github: 'https://github.com/helioLJ/blogapp-com-mongodb',
      category: 'Node.Js',
      description: 'Aplicação de Blog criado com MongoDB e Mongoose no Curso de Node.JS do canal Victor Lima.'
  },
  {
      src: './imgs/notifications-service.png',
      title: 'Serviço de Notificações com Node.Js',
      preview: 'https://github.com/helioLJ/notifications-service-nodejs-ignite-lab',
      github: 'https://github.com/helioLJ/notifications-service-nodejs-ignite-lab',
      category: 'Node.Js',
      description: 'Software de notificações criado com NodeJS no evento Ignite Lab 4 da Rocketseat.'
  },
  {
      src: './imgs/nlw-copa.png',
      title: 'NLW Bolão da Copa 2022',
      preview: 'https://github.com/helioLJ/nlw-copa',
      github: 'https://github.com/helioLJ/nlw-copa',
      category: 'React',
      description: 'NLW Copa foi um evento organizado pela Rocketseat, com o objetivo de criar um Bolão da Copa do Mundo 2022.'
  },
  {
      src: './imgs/tesla-homepage.png',
      title: 'Clone da Tesla Homepage',
      preview: 'http://tesla-homepage-clone-five.vercel.app/',
      github: 'https://github.com/helioLJ/tesla-homepage-clone',
      category: 'Typescript',
      description: 'Homepage da Tesla com ReactJS, baseado no tutorial da Rocketseat. 💜🚀⚛️'
  },
  {
      src: './imgs/react-ds.png',
      title: 'React Design System',
      preview: 'https://heliolj.github.io/react-design-system/',
      github: 'https://github.com/helioLJ/react-design-system',
      category: 'React',
      description: 'Projeto de Design System desenvolvido com React, TypeScript, Storybook e Tailwind CSS durante o Ignite Lab 3 da Rocketseat.'
  },
  {
      src: './imgs/rocket-pay.png',
      title: 'Rocket Pay',
      preview: 'https://rocket-pay-sigma.vercel.app/',
      github: 'https://github.com/helioLJ/explorer-lab-01-js-dom',
      category: 'JavaScript',
      description: 'Projeto desenvolvido durante o Explorer Lab da Rocketseat'
  },
  {
      src: './imgs/expenses-chart.png',
      title: 'Expenses Chart Component',
      preview: 'https://expenses-chart-ivory.vercel.app/',
      github: 'https://github.com/helioLJ/expenses-chart',
      category: 'JavaScript',
      description: 'Desafio do Frontend Mentor onde precisei fazer um component visualizador de despesas com gráficos!'
  },
  {
      src: './imgs/notificationspage.png',
      title: 'Notifications Main Page',
      preview: 'https://helio-notifications-page.netlify.app/',
      github: 'https://github.com/helioLJ/notifications-page-main',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/clipboard-lp.jpg',
      title: 'Clipboard Landing Page',
      preview: 'https://helioj-clipboard.netlify.app/',
      github: 'https://github.com/helioLJ/clipboard-landing-page',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/calculator-app.jpg',
      title: 'Calculator App',
      preview: 'https://helioljcalculatorapp.netlify.app/',
      github: 'https://github.com/helioLJ/calculator-app',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/time-tracking-dashboard.jpg',
      title: 'Time Tracking Dashboard',
      preview: 'https://helioj-time-tracking-dashboard.netlify.app/',
      github: 'https://github.com/helioLJ/time-tracking-dashboard/',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/intro-signup-form.jpg',
      title: 'Sign-up Form',
      preview: 'https://helioj-sign-up-form.netlify.app/',
      github: 'https://github.com/helioLJ/Intro-component-with-sign-up-form',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/interactive-rating-component.jpg',
      title: 'Interactive Rating Component',
      preview: 'https://helioj-interactive-rating-component.netlify.app/',
      github: 'https://github.com/helioLJ/interactive-rating-component',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/base-apparel-coming-soon-master.jpg',
      title: 'Base Apparel Coming Soon',
      preview: 'https://helioj-base-apparel.netlify.app/',
      github: 'https://github.com/helioLJ/Base-Apparel-coming-soon-page',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/faq-accordion.jpg',
      title: 'FAQ Accordion Card',
      preview: 'https://helioj-faq-accordion-card.netlify.app/',
      github: 'https://github.com/helioLJ/FAQ-accordion-card',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/huddle-lp.jpg',
      title: 'Huddle Single Section',
      preview: 'https://helioj-huddle-single-section.netlify.app/',
      github: 'https://github.com/helioLJ/Huddle-Single-Section',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/ping-coming-soon-page-master.jpg',
      title: 'Coming Soon Page',
      preview: 'https://helioj-ping-single-column.netlify.app/',
      github: 'https://github.com/helioLJ/Ping-single-column-coming-soon-page',
      category: 'JavaScript',
      description: ''
  },
  {
      src: './imgs/single-price-grid.jpg',
      title: 'Single Price Grid Component',
      preview: 'https://helioj-singe-price-component.netlify.app/',
      github: 'https://github.com/helioLJ/single-price-grid-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/four-card-feature.jpg',
      title: 'Four Card Feature Section',
      preview: 'https://helioj-four-card-feature-section.netlify.app/',
      github: 'https://github.com/helioLJ/four-card-feature-section',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/social-proof.jpg',
      title: 'Social Proof Section',
      preview: 'https://helioj-social-proof-section.netlify.app/',
      github: 'https://github.com/helioLJ/social-proof-section',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/3-column-preview.jpg',
      title: '3 Column Preview',
      preview: 'https://helioj-three-column.netlify.app/',
      github: 'https://github.com/helioLJ/3-column-preview-card-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/stats-preview.jpg',
      title: 'Stats Preview Card',
      preview: 'https://helioj-stats-card.netlify.app/',
      github: 'https://github.com/helioLJ/stats-preview-card-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/article-preview.jpg',
      title: 'Article Preview Component',
      preview: 'https://helioj-article-preview.netlify.app/',
      github: 'https://github.com/helioLJ/article-preview-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/profile-card.jpg',
      title: 'Profile Card Component',
      preview: 'https://helioj-profile-card.netlify.app/',
      github: 'https://github.com/helioLJ/profile-card-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/order-summary.jpg',
      title: 'Order Summary Component',
      preview: 'https://helioj-order-summary-component.netlify.app/',
      github: 'https://github.com/helioLJ/order-summary-component',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/nft-preview-card.jpg',
      title: 'NFT Preview Card',
      preview: 'https://helioj-nft-preview.netlify.app/',
      github: 'https://github.com/helioLJ/card-de-nft-preview',
      category: 'CSS',
      description: ''
  },
  {
      src: './imgs/qr-code-component.jpg',
      title: 'QR-Code Component',
      preview: 'https://qr-code-component-heliolj.netlify.app/',
      github: 'https://github.com/helioLJ/qr-code-component',
      category: 'CSS',
      description: ''
  },
]

const portfolioContainer = document.querySelector('.portfolio-container');
const btnContainer = document.querySelector('.filter-container');

// load items
window.addEventListener('DOMContentLoaded', () => {
  displayProjectItems(projects)
  const categories = projects.reduce((values, item) => {
      if (!values.includes(item.category)) {
          values.push(item.category)
      }
      return values
  }, ['Todos'])
  const categoryBtns = categories.map(category => {
      return `<button class="filter-btn" type="button"
                data-id="${category}">
                ${category}
                </button>`
  }).join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn');

  // filter items
  filterBtns.forEach(btn => {
      btn.addEventListener('click', e => {
          const category = e.currentTarget.dataset.id;
          const projectsCategory = projects.filter(projectItem => {
              if (projectItem.category === category) {
                  return projectItem
              }
          })

          if (category === 'Todos') {
              displayProjectItems(projects)
          } else {
              displayProjectItems(projectsCategory)
          }
          filterBtns.forEach(btn => btn.classList.remove('btn-active'))
          btn.classList.add('btn-active')
      })
  })
})

function displayProjectItems(projectItems) {
  let displayItems = projectItems.map(item => {

      return `<div class="portfolio-item">
              <div class="image">
                  <img src="${item.src}" alt="">
              </div>
              <div class="content">
                  <h3>${item.title}</h3>
                  <div class="divider"></div>
                  <p>${item.description}</p>
                  <div class="links">
                      <a href="${item.preview}" target="_blank">
                          <i class="fa-solid fa-eye"></i>
                      </a>
                      <a href="${item.github}" target="_blank"">
                          <i class="fa-brands fa-github"></i>
                      </a>
                  </div>
              </div>
          </div>`;
  })
  displayItems = displayItems.join('')
  portfolioContainer.innerHTML = displayItems
}

const themeBtn = document.querySelector('.theme');

themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})

const down = document.querySelectorAll('.down')
const up = document.querySelector('.up')

down.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        
        window.scrollTo({
            left:0,
            top: 1050
        });
    });
});

up.addEventListener('click', e => {
    e.preventDefault();
        
    window.scrollTo({
        left:0,
        top: 0
    });
})