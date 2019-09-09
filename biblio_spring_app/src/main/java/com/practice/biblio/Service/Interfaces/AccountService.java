package com.practice.biblio.Service.Interfaces;

import com.practice.biblio.Entity.AppRole;
import com.practice.biblio.Entity.AppUser;

public interface AccountService {
    public AppUser saveUser(AppUser _user);
    public AppRole saveRole(AppRole role);
    public AppUser loadUserByUsername(String username);
}
