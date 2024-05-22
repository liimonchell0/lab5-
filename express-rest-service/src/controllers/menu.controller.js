const menuService = require('../services/menu.service').default;

class MenuController {
  getAllMenus(req, res) {
    const menus = menuService.getAllMenus();
    res.status(200).json(menus);
  }

  getMenuById(req, res) {
    const { menuId } = req.params;
    const menu = menuService.getMenuById(parseInt(menuId));
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  }

  createMenu(req, res) {
    const { name } = req.body;
    const newMenu = menuService.createMenu(name);
    res.status(201).json(newMenu);
  }

  updateMenu(req, res) {
    const { menuId } = req.params;
    const { name } = req.body;
    const updatedMenu = menuService.updateMenu(parseInt(menuId), name);
    if (updatedMenu) {
      res.status(200).json(updatedMenu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  }

  deleteMenu(req, res) {
    const { menuId } = req.params;
    const deletedMenu = menuService.deleteMenu(parseInt(menuId));
    if (deletedMenu) {
      res.status(200).json(deletedMenu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  }
}

module.exports = new MenuController();
