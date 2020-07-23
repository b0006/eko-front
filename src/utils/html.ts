export const toggleHtmlScroll = (isShowed: boolean) => {
  const htmlElem = document.getElementsByTagName('html')[0];
  htmlElem.style.overflowY = isShowed ? 'hidden' : 'unset';
};
