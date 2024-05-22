import { menus, categories } from '../repositories/memory.repository';
import Menu from '../models/menu.model';

class MenuService {
  getAllMenus() {
    return menus;
  }

  getMenuById(id) {
    return menus.find(menu => menu.id === id);
  }

  createMenu(name) {
    const id = menus.length ? menus[menus.length - 1].id + 1 : 1;
    const newMenu = new Menu(id, name);
    menus.push(newMenu);
    return newMenu;
  }

  updateMenu(id, name) {
    const menu = this.getMenuById(id);
    if (menu) {
      menu.name = name;
      return menu;
    }
    return null;
  }

  deleteMenu(id) {
    const menuIndex = menus.findIndex(menu => menu.id === id);
    if (menuIndex !== -1) {
      const [deletedMenu] = menus.splice(menuIndex, 1);
      categories.forEach((category, index) => {
        if (category.menuId === id) {
          categories.splice(index, 1);
        }
      });
      return deletedMenu;
    }
    return null;
  }
}

export default new MenuService();
