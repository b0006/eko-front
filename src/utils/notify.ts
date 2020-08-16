interface IShowData {
  text: string;
  type?: 'success' | 'info' | 'warning' | 'danger';
  buttonList?: Array<{
    title: string;
    onclick: () => void;
    hideOnClick: boolean;
  }>;
  close?: boolean;
  clickToHide?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

interface INotifyItem {
  contentEl: HTMLDivElement;
  id: number;
}

class Notify {
  private wrapperEl: HTMLElement | null = document.getElementById('notify');
  private firstOffset = 85;

  private listInternal: INotifyItem[] = [];

  private set list(list) {
    this.listInternal = list;
    this.reRenderOffset();
  }
  private get list() {
    return this.listInternal;
  }

  private reRenderOffset() {
    if (this.list.length) {
      setTimeout(() => {
        this.list.forEach(({ contentEl }, index) => {
          const tmpList = Object.assign([], this.list);
          tmpList.length = index;
          const offset = tmpList.reduce((a: number, b: INotifyItem) => a + b.contentEl.clientHeight, 0);
          contentEl.style.top = `${this.firstOffset + offset + 10 * index}px`;
        });
      }, 0);
    }
  }

  public show({
    text,
    type = 'info',
    buttonList,
    close = true,
    clickToHide = false,
    autoHide = true,
    autoHideDelay = 5000,
  }: IShowData) {
    const newList = this.list;
    const itemId = this.list.length;

    const contentEl = document.createElement('div');
    contentEl.className = 'notify-kas__content';
    contentEl.classList.add(`notify-kas__content_${type}`);

    if ((!autoHide && !close) || clickToHide) {
      contentEl.setAttribute('role', 'button');
      contentEl.onclick = () => this.hide(itemId);
    }

    const textEl = document.createElement('div');
    textEl.className = 'notify-kas__text';
    textEl.innerText = text;
    const actionEl = document.createElement('div');
    actionEl.className = 'notify-kas__action';

    if (buttonList) {
      buttonList.forEach(({ title, onclick, hideOnClick = true }) => {
        const buttonEl = document.createElement('button');
        buttonEl.className = 'notify-kas__button';
        buttonEl.innerText = title;
        buttonEl.onclick = (ev) => {
          if (!hideOnClick) {
            ev.stopPropagation();
          }
          onclick();
        };

        actionEl.appendChild(buttonEl);
      });
    }

    if (close) {
      const closeEl = document.createElement('i');
      closeEl.className = 'notify-kas__close';
      closeEl.innerHTML = 'X';
      closeEl.setAttribute('role', 'button');
      closeEl.onclick = (ev) => {
        ev.stopPropagation();
        this.hide(itemId);
      };

      actionEl.appendChild(closeEl);
    }

    contentEl.appendChild(textEl);
    contentEl.appendChild(actionEl);

    this.wrapperEl?.appendChild(contentEl);

    newList.push({ contentEl, id: itemId });

    if (autoHide) {
      setTimeout(() => {
        this.hide(itemId);
      }, autoHideDelay);
    }

    this.list = newList;
  }

  public hide(id: number) {
    const findIndex = this.list.findIndex((i) => i.id === id);
    const findItem = this.list.find((i) => i.id === id);
    if (findIndex !== -1 && findItem) {
      findItem.contentEl.style.top = '-100px';
      setTimeout(() => {
        if (findItem.contentEl.parentNode) {
          findItem.contentEl.parentNode.removeChild(findItem.contentEl);
          const list = this.list;
          list.splice(findIndex, 1);
          this.list = list;
        }
      }, 300);
    }
  }
}

export default new Notify();
