// src/controllers/CategoryController.js

const Category = require('../models/Category');

// CategoryController Class
// - Manages CRUD operations for Category resources
class CategoryController {
  // Create a new category record in the database
  static async createCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error creating category. Please check your input and try again.', error });
    }
  }

  // Retrieve all category records from the database
  static async getCategories(req, res) {
    try {
      const categories = await Category.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving categories. Please try again later.', error });
    }
  }

  // Retrieve a specific category by its ID
  static async getCategoryById(req, res) {
    try {
      const category = await Category.getById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found with the provided ID.' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving category. Please verify the ID and try again.', error });
    }
  }

  // Update an existing category record by ID
  static async updateCategory(req, res) {
    try {
      const result = await Category.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Category not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Category updated successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating category. Ensure the request data is valid and try again.', error });
    }
  }

  // Delete a category record by ID
  static async deleteCategory(req, res) {
    try {
      const result = await Category.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Category not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Category deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting category. Please try again later.', error });
    }
  }
}

module.exports = CategoryController;
