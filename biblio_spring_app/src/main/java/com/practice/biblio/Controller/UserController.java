package com.practice.biblio.Controller;

import com.practice.biblio.Entity.AppUser;
import com.practice.biblio.Service.Interfaces.AccountService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private AccountService accountService;
    @PostMapping("/register")
    public AppUser register(@RequestBody  AppUser user){
        return  accountService.saveUser(user);
    }
}
