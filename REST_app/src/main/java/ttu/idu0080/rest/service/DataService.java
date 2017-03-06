package ttu.idu0080.rest.service;

import ttu.idu0080.rest.data.*;

import java.util.*;
import java.text.*;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.transaction.annotation.Propagation;

import javax.persistence.EntityTransaction;
@Repository
public class DataService  {



	
	@PersistenceContext
	private EntityManager em;

	public void setEntityManager(EntityManager em) {
		this.em = em;
	}


	public Book getBookById(long id)  {


		Book node = null;
		try {


			Query q =  em
					.createQuery(
							"select b from Book b where b.id = :id")
							.setParameter("id", id);
			node = (Book) q.getSingleResult();


		}

		catch(Exception ex)
		{
			System.out.println("DataService.getBookById():"+ ex.getMessage());
		
		}

		return node;
	}


	
	
	
	public List<Book> getAllBooks()  {


		List<Book> book_list = null;
		try {


			Query q =  em
					.createQuery(
							"select b from Book b ");
			book_list = (List<Book>)  q.getResultList();


		}

		catch(Exception ex)
		{
			System.out.println("DataService.getAllBooks():"+ ex.getMessage());
		}

		return book_list;
	}

	
	
	public Book update(Book book)  {


		System.out.println("book update , book author: " + book.getAuthor());
		try {

			em.merge(book);
			em.flush();

		}

		catch(Exception ex)
		{
			System.out.println("DataService.update():"+ ex.getMessage());
		}

		return book;
	}

	
	public Book save(Book book) {

		System.out.println("new book insert , book author: " + book.getAuthor());

		try {
			
			em.persist(book);


		}

		catch(Exception ex)
		{
			System.out.println("DataService.save():"+ ex.getMessage());
		}

		return book;
	}
	
	public void delete(long id) {

		System.out.println("DELETE ");

		try {
			
	          Book book =  em.find(Book.class,id);
	          em.remove(book);


		}

		catch(Exception ex)
		{
			System.out.println("DataService.delete():"+ ex.getMessage());
		}


	}
	
	public  List<Book> searchByAuthor(String s_author)  {

		List<Book> books = null;

		try {

			String sql = "from Book b where upper(b.author) like upper(:author) order by b.title";
            
			Query q = em.createQuery(sql);	
			q.setParameter("author", s_author+"%") ;                  
			books =  (List<Book>) q.getResultList();	 				
                        System.out.println("Otsingu tulemusi:" + books.size());

		}

		catch(Exception ex)
		{
			System.out.println("DataService.searchByAuthor():" + ex.getMessage());

		}

		return books;
	}
	
	
}
