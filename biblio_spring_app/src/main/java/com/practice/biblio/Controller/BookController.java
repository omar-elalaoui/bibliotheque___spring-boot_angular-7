package com.practice.biblio.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.biblio.Entity.Book;
import com.practice.biblio.Service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    BookServiceImpl bookService;
    
    @PostMapping("/books")
    public void add(@RequestParam("book") String bookString, @RequestParam("image") MultipartFile image) throws Exception {
        Book book= new ObjectMapper().readValue(bookString, Book.class);
        bookService.save(book, image);
    }
    
    
    @GetMapping(path = "/books/{id}/getPic", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getPic(@PathVariable("id") Long id) throws Exception{
        return bookService.getPic(id);
    }
    
}
