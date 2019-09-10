package com.practice.biblio.Controller;

import com.practice.biblio.Dao.CategoryRepo;
import com.practice.biblio.Entity.Category;
import com.practice.biblio.Service.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    CategoryServiceImpl categoryService;
    
    @PostMapping("/categories")
    public void add(@RequestBody Category category){
        categoryService.save(category);
    }
    
    @PutMapping("/categories")
    public void update(@RequestBody Category category){
        categoryService.save(category);
    }
}
