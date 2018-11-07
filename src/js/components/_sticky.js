import { OPEN, ACTIVE, BODY, WIN } from '../_constants';
import { debounce } from '../_utils';

const navbar = $('.js-navigation');
// const navHeight = $('.js-navigation').outerHeight();
const what = $('.js-what');
let sticky = navbar.offset().top;

const makeSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.addClass('is-sticky');
    what.addClass('is-padding-top-updated');
  } else {
    navbar.removeClass('is-sticky');
    what.removeClass('is-padding-top-updated');
  }
};

WIN.on('scroll', makeSticky);


