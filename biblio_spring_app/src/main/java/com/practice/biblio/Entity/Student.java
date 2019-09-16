package com.practice.biblio.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Student {
    @Id @GeneratedValue
    private long id;
    private String prenom;
    private String nom;
    private String email;
    private String telephone;
    private String cin;
    private long cne;
    private String photo;
    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Emprunt> empruntList;
    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Demande> demandeList;
}
