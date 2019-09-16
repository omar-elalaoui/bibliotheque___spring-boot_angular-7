package com.practice.biblio.Dao;

import com.practice.biblio.Entity.Emprunt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EmpruntRepo extends JpaRepository<Emprunt, Long> {
}
