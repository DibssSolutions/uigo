import { OPEN, ACTIVE, BODY, WIN } from '../_constants';
import { debounce } from '../_utils';

let navLinks = $('.js-nav-link');
let mainSections = $('.js-scrollspy-section');
const navHeight = $('.js-navigation').outerHeight();
const createSection = $('.js-create');
const trigger = $('.js-navigation-current-text');
const navigation = $('.js-navigation-out');

WIN.on('scroll', () => scrollSpy());

var scrollSpy = () => {
  let fromTop = WIN.scrollTop() + navHeight;
  $(navLinks).each((index, link) => {
    let section = $(link.hash);
    let firstSection = $('.js-default-scrollspy');
    let lastSection = $('.js-last-scrollspy');
    let triggerText;

    if (
      $(link)
        .closest('.js-nav-item')
        .hasClass(ACTIVE)
    ) {
      triggerText = $(link).text();
    }

    if (firstSection.offset().top > fromTop) {
      $(link)
        .closest(firstSection)
        .addClass(ACTIVE);
    } else if (
      lastSection.offset().top + lastSection.outerHeight() <=
      fromTop
    ) {
      $(link)
        .closest(lastSection)
        .addClass(ACTIVE);
    } else if (
      section.offset().top <= fromTop &&
      section.offset().top + section.outerHeight() > fromTop
    ) {
      $(link)
        .closest('.js-nav-item')
        .addClass(ACTIVE);
    } else {
      $(link)
        .closest('.js-nav-item')
        .removeClass(ACTIVE);
    }
    trigger.text(triggerText);
    $(link).on('click', () => navigation.removeClass(OPEN));
  });

  if (
    $(createSection).offset().top <= fromTop &&
    createSection.offset().top + createSection.outerHeight() > fromTop
  ) {
    $('.js-nav-item:nth-child(2)').addClass(ACTIVE);
  }
};
