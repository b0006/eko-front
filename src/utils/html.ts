export const toggleHtmlScroll = (isShowed: boolean) => {
  const htmlElem = document.getElementsByTagName('html')[0];
  htmlElem.className = isShowed ? 'scroll-hidden' : '';
};
