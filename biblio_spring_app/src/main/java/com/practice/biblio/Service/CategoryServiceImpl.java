package com.practice.biblio.Service;

import com.practice.biblio.Dao.CategoryRepo;
import com.practice.biblio.Entity.Category;
import com.practice.biblio.Service.Interfaces.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepo categoryRepo;
    
    @Override
    public void save(Category category) {
        if(category.getId() == 0 && categoryRepo.findByNom(category.getNom())!= null) throw new RuntimeException("catégorie existe déja");
        categoryRepo.save(category);
    }
}
