// src/controllers/CategoryController.js
const Category = require('../models/Category');

class CategoryController {
  static async createCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar categoria', error });
    }
  }

  static async getCategories(req, res) {
    try {
      const categories = await Category.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter categorias', error });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const category = await Category.getById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter categoria', error });
    }
  }

  static async updateCategory(req, res) {
    try {
      const result = await Category.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.status(200).json({ message: 'Categoria atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar categoria', error });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const result = await Category.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.status(200).json({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar categoria', error });
    }
  }
}

module.exports = CategoryController;
