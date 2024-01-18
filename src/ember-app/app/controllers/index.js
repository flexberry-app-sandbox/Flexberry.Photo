import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.photo.caption'),
          title: i18n.t('forms.application.sitemap.photo.title'),
          children: [{
            link: 'i-i-s-photo-клиент-l',
            caption: i18n.t('forms.application.sitemap.photo.i-i-s-photo-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.photo.i-i-s-photo-клиент-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-photo-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.photo.i-i-s-photo-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.photo.i-i-s-photo-фотокиоск-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-photo-оплата-l',
            caption: i18n.t('forms.application.sitemap.photo.i-i-s-photo-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.photo.i-i-s-photo-оплата-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})