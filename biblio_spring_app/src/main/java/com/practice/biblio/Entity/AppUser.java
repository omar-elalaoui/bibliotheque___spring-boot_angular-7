package com.practice.biblio.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String username;
    private String password;
    private boolean actived;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<AppRole> roleList;
    @OneToOne(cascade = CascadeType.ALL)
    private Student student;
}
