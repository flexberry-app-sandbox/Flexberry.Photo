import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPhotoКлиентLForm from './forms/i-i-s-photo-клиент-l';
import IISPhotoОплатаLForm from './forms/i-i-s-photo-оплата-l';
import IISPhotoФотокиоскLForm from './forms/i-i-s-photo-фотокиоск-l';
import IISPhotoКлиентEForm from './forms/i-i-s-photo-клиент-e';
import IISPhotoОплатаEForm from './forms/i-i-s-photo-оплата-e';
import IISPhotoФотокиоскEForm from './forms/i-i-s-photo-фотокиоск-e';
import IISPhotoКлиентModel from './models/i-i-s-photo-клиент';
import IISPhotoОборудованиеModel from './models/i-i-s-photo-оборудование';
import IISPhotoОплатаModel from './models/i-i-s-photo-оплата';
import IISPhotoФотоModel from './models/i-i-s-photo-фото';
import IISPhotoФотокиоскModel from './models/i-i-s-photo-фотокиоск';
import IISPhotoЧекModel from './models/i-i-s-photo-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-photo-клиент': IISPhotoКлиентModel,
    'i-i-s-photo-оборудование': IISPhotoОборудованиеModel,
    'i-i-s-photo-оплата': IISPhotoОплатаModel,
    'i-i-s-photo-фото': IISPhotoФотоModel,
    'i-i-s-photo-фотокиоск': IISPhotoФотокиоскModel,
    'i-i-s-photo-чек': IISPhotoЧекModel
  },

  'application-name': 'Photo',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Photo',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Photo',
          title: 'Photo'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        photo: {
          caption: 'Photo',
          title: 'Photo',
          'i-i-s-photo-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-photo-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-photo-оплата-l': {
            caption: 'Оплата',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-photo-клиент-l': IISPhotoКлиентLForm,
    'i-i-s-photo-оплата-l': IISPhotoОплатаLForm,
    'i-i-s-photo-фотокиоск-l': IISPhotoФотокиоскLForm,
    'i-i-s-photo-клиент-e': IISPhotoКлиентEForm,
    'i-i-s-photo-оплата-e': IISPhotoОплатаEForm,
    'i-i-s-photo-фотокиоск-e': IISPhotoФотокиоскEForm
  },

});

export default translations;
