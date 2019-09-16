package com.practice.biblio.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.biblio.Dao.DemandeRepo;
import com.practice.biblio.Entity.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemandeController {
    @Autowired
    DemandeRepo demandeRepo;
    @PostMapping("/demandes")
    public void add(@RequestBody Demande demande) {
        System.out.println(demande);
        demandeRepo.save(demande);
    }
}
