package com.practice.biblio.Service;

import com.practice.biblio.Dao.AppRoleRepo;
import com.practice.biblio.Dao.AppUserRepo;
import com.practice.biblio.Entity.AppRole;
import com.practice.biblio.Entity.AppUser;
import com.practice.biblio.Service.Interfaces.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountserviceImpl implements AccountService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private AppUserRepo appUserRepo;
    @Autowired
    private AppRoleRepo appRoleRepo;
    @Override
    public AppUser saveUser(AppUser _user) {
        AppUser user=appUserRepo.findByUsername(_user.getUsername());
        if(user!=null) throw new RuntimeException("Utilisateur existe déjà");
        _user.setActived(true);
        _user.setPassword(bCryptPasswordEncoder.encode(_user.getPassword()));
        List<AppRole> roleList= new ArrayList<AppRole>();
        roleList.add(appRoleRepo.findByRoleName("USER"));
        _user.setRoleList(roleList);
        appUserRepo.save(_user);
        return _user;
    }
    
    @Override
    public AppRole saveRole(AppRole role) {
        return appRoleRepo.save(role);
    }
    
    @Override
    public AppUser loadUserByUsername(String username) {
        AppUser appUser= appUserRepo.findByUsername(username);
        return appUser;
    }
}
