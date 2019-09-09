package com.practice.biblio.Dao;

import com.practice.biblio.Entity.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AppRoleRepo extends JpaRepository<AppRole, Long> {
    public AppRole findByRoleName(String roleName);
}
