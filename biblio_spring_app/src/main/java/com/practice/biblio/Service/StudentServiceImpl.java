package com.practice.biblio.Service;

import com.practice.biblio.Dao.StudentRepo;
import com.practice.biblio.Entity.Student;
import com.practice.biblio.Service.Interfaces.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class StudentServiceImpl implements StudentService {
    @Value("${dir.students}")
    String studentsDir;
    
    @Autowired
    StudentRepo studentRepo;
    
    @Override
    public void save(Student student, MultipartFile pic) throws Exception {
//        Book foundBook= bookRepo.findByTitre(book.getTitre());
//        if(book.getId() == 0 && foundBook != null && foundBook.getEdition() == book.getEdition()) throw new RuntimeException("Livre existe déja");
        File studentDir= new File(studentsDir);
        if(!studentDir.exists()) studentDir.mkdir();
        student.setPhoto(pic.getOriginalFilename());
        studentRepo.save(student);
        Files.write(Paths.get(studentsDir + "/" + student.getId() +".jpg"), pic.getBytes());
    }
    
    @Override
    public byte[] getPic(long id) throws Exception {
        String ff= studentsDir+"/"+id+".jpg";
        return Files.readAllBytes(Paths.get(studentsDir+"/"+id+".jpg"));
    }
}
