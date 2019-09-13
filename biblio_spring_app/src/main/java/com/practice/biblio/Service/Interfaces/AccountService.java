package com.practice.biblio.Service.Interfaces;

import com.practice.biblio.Entity.AppRole;
import com.practice.biblio.Entity.AppUser;

public interface AccountService {
    public void saveUser(AppUser _user);
    public void updateUser(AppUser _user);
    public AppRole saveRole(AppRole role);
    public AppUser loadUserByUsername(String username);
}
