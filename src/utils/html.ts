export const toggleHtmlScroll = (isShowed: boolean, isFixed?: boolean) => {
  const htmlElem = document.getElementsByTagName('html')[0];
  const classHtml = isFixed ? 'scroll-hidden' : 'scroll-hidden-fixed';
  htmlElem.className = isShowed ? classHtml : '';
};
