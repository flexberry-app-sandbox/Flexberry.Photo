import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Photo',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Photo',
          title: 'Photo'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
