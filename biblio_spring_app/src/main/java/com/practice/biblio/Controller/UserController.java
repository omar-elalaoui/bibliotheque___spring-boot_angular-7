package com.practice.biblio.Controller;

import com.practice.biblio.Dao.AppUserRepo;
import com.practice.biblio.Entity.AppUser;
import com.practice.biblio.Service.Interfaces.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private AccountService accountService;
    @Autowired
    AppUserRepo appUserRepo;
    
    @PostMapping("/register")
    public void register(@RequestBody  AppUser user){
        accountService.saveUser(user);
    }
    
    @PostMapping("/appUsers/update")
    public void update(@RequestBody AppUser user){
        accountService.updateUser(user);
    }
    
    @GetMapping("/appUsers")
    public List<AppUser> getUsers(){
        return appUserRepo.findAll();
    }
    
    @GetMapping("/appUsers/{id}")
    public AppUser getUser(@PathVariable("id") long id){
        return appUserRepo.findById(id).get();
    }
    
}
