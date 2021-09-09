import { metaData } from './constants'
import head from './head'
//@ts-ignore
import getTags from 'vitepress-tags'

const pages = getTags('./')

const config = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: 'etovoteto/etovoteto.ru',
    logo: '/img/logo-eto2x.png',
    pages,
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'etovoteto.ru'],
      })
    },
  },
}

export default config
