import {createContext} from 'react'

export const {Provider, Consumer} = createContext('')

export const languages = {
  reviewsTitle: {
    en: 'Leave your review',
    ru: 'Оставьте отзыв',
  },
  reviewsName: {
    en: 'Your name',
    ru: 'Ваше имя',
  },
  reviewsRating: {
    en: 'Rating',
    ru: 'Рейтинг',
  },
  reviewsButton: {
    en: 'Publish review',
    ru: 'Создать отзыв',
  },

  cartSubTotal: {
    en: 'Sub-total',
    ru: 'Сумма',
  },
  cartDelivery: {
    en: 'Delivery costs',
    ru: 'Доставка',
  },
  cartDeliveryValue: {
    en: 'Free',
    ru: 'Бесплатно',
  },
  cartTotal: {
    en: 'Total',
    ru: 'Общая сумма',
  },
  cartButton: {
    en: 'Order',
    ru: 'Заказать',
  },

  orderForm: {
    en: 'Form',
    ru: 'Форма',
  },
  orderUserName: {
    en: 'User name',
    ru: 'Имя заказчика',
  },
  orderFormButton: {
    en: 'Send order',
    ru: 'Отправить заказ',
  },

  orderComplete: {
    en: 'Thanks',
    ru: 'Спасибо',
  },
  language: {
    en: 'Language',
    ru: 'Язык',
  },
}
