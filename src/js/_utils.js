export const mediaWidth = width => window.matchMedia(`(max-width: ${width}px)`).matches;

export const isTouch = () => 'ontouchstart' in window;

export const buildIcon = name => `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;

export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// $(window).on('scroll', function() {
//   clearTimeout(timeout);
//   timeout = setTimeout(function() {
//     scrollSpy();
//   }, 100);
// });
