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

  public removeById = async (id: string) => {
    const response = await agent.DELETE<any, boolean>(`/categories/${id}`);
    if (response.data) {
      const newList = [...this.categoryList];
      const findIndex = newList.findIndex((category) => category.id === id);
      if (findIndex !== -1) {
        newList.splice(findIndex, 1);
        runInAction(() => (this.categoryList = newList));
      }
    }
  };

  public addToList = async (data: FormData) => {
    const response = await agent.POST<FormData, ICategoryItem>('/categories', data);
    if (response.data) {
      this.categoryList.push(response.data);
      return true;
    }

    return false;
  };

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
  getList: action.bound,
  removeById: action.bound,
  addToList: action.bound,
});

export default new CategoryStore();
