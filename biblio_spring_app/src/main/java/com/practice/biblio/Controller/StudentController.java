package com.practice.biblio.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.biblio.Entity.Student;
import com.practice.biblio.Service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class StudentController {
    @Autowired
    StudentServiceImpl studentService;
    
    @PostMapping("/students")
    public void add(@RequestParam("student") String bookString, @RequestParam("image") MultipartFile image) throws Exception {
        Student student= new ObjectMapper().readValue(bookString, Student.class);
        studentService.save(student, image);
    }
    
    @GetMapping(path = "/students/{id}/getPic", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getPic(@PathVariable("id") Long id) throws Exception{
        return studentService.getPic(id);
    }
    
}
