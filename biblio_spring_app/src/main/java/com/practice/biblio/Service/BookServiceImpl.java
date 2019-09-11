package com.practice.biblio.Service;

import com.practice.biblio.Dao.BookRepo;
import com.practice.biblio.Entity.Book;
import com.practice.biblio.Service.Interfaces.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class BookServiceImpl implements BookService {
    
    @Value("${dir.books}")
    String booksDir;
    
    @Autowired
    BookRepo bookRepo;
    
    @Override
    public void save(Book book, MultipartFile pic) throws Exception{
        Book foundBook= bookRepo.findByTitre(book.getTitre());
        if(foundBook != null && foundBook.getEdition() == book.getEdition()) throw new RuntimeException("Livre existe déja");
        File bookDir= new File(booksDir);
        if(!bookDir.exists()) bookDir.mkdir();
        book.setPhoto(pic.getOriginalFilename());
        bookRepo.save(book);
        Files.write(Paths.get(booksDir + "/" + book.getId() +".jpg"), pic.getBytes());
    }
    
    @Override
    public byte[] getPic(long id) throws Exception{
        String ff= booksDir+"/"+id+".jpg";
        return Files.readAllBytes(Paths.get(booksDir+"/"+id+".jpg"));
    }
    
    
}
