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
    public ResponseEntity<List<AppUser>> getUsers(){
        return ResponseEntity.ok(appUserRepo.findAll());
    }
    
    @GetMapping("/appUsers/{username}")
    public AppUser getUser(@PathVariable("username") String username){
        return appUserRepo.findByUsername(username);
    }
    
}
