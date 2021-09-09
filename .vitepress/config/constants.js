const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://www.etovoteto.ru' : 'http://localhost:3000'

export const metaData = {
  title: 'ЭТОВОТЭТО',
  description: 'Настольная игра в придумывание новых слов и значений',
  site,
  locale: 'ru-RU',
  image: ``,
  icon: '/img/logo-eto2x.png',
  author: 'Денис Старов',
  tags: 'настольная игра, настолка, этовотэто, игра в слова, придумывание слов',
}
