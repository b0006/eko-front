import { decorate, observable, action, runInAction } from 'mobx';

import agent from '../../agent';

export interface ICategoryItem {
  id: string;
  title: string;
  imageList: string[];
}

export class CategoryStore {
  constructor() {
    this.getList();
  }

  public isLoading = false;

  public categoryList: ICategoryItem[] = [];

  public getList = async () => {
    runInAction(() => (this.isLoading = true));
    const response = await agent.GET<{}, ICategoryItem[]>('/categories');
    if (response.data) {
      runInAction(() => (this.categoryList = response.data || []));
      runInAction(() => (this.isLoading = false));
    }
  };

  public setList = (list: ICategoryItem[]) => {
    this.categoryList = list;
  };
}

decorate(CategoryStore, {
  categoryList: observable,
  isLoading: observable,
  setList: action,
  getList: action,
});

export default new CategoryStore();
