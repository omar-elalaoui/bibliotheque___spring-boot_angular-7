package com.practice.biblio.Dao;

import com.practice.biblio.Entity.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DemandeRepo extends JpaRepository<Demande, Long> {
}
