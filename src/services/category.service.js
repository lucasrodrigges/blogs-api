const { Category } = require('../models');

module.exports = {
  getCategories: async () => {
    try {
      return { error: null, output: await Category.findAll() };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  createCategory: async (name) => {
    try {
       await Category.create({ name }); 
      
      return { error: null, output: await Category.create({ name }) };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },
};