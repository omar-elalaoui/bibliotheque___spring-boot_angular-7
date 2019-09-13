package com.practice.biblio.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
}
