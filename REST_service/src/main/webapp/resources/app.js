var book_from_server;

function Book()
{
this.title;
this.author;
this.publisher;
this.country;
}

function get_books()
{

 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/books' ,
    type: "GET",
    dataType: 'json',
    success: function(data) {
    	display_books(data);
        console.log(JSON.stringify(data));

    }
  });


}


function get_book(id)
{

 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + id ,
    type: "GET",
    dataType: 'json',
    contentType: 'application/json',
    accept: 'application/json',
    success: function(data) {
    	book_from_server = data;
    	display_book(data);
        console.log(JSON.stringify(data));

    }
  });


}


function save_book()
{
	
	book_from_server.title=document.forms[0].title.value;
	book_from_server.author=document.forms[0].author.value;
	book_from_server.publisher=document.forms[0].publisher.value;
	book_from_server.country=document.forms[0].country.value;
		
var jsonData = JSON.stringify(book_from_server); 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + book_from_server.id ,
    type: "POST",
    data: jsonData,
    dataType: 'json',
    contentType : 'application/json',
    success: function(data) {
    	show_message("Salvestatud");
        console.log(JSON.stringify(data));

    }
  });


}


function add_book()
{
	var book_to_server = new Book();
	book_to_server.title=document.forms[0].new_book_title.value;
	book_to_server.author=document.forms[0].new_book_author.value;
	book_to_server.publisher=document.forms[0].new_book_publisher.value;
	book_to_server.country=document.forms[0].new_book_country.value;
		
var jsonData = JSON.stringify(book_to_server); 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' ,
    type: "PUT",
    data: jsonData,
    dataType: 'json',
    contentType : 'application/json',
    success: function(data) {
    	show_message("Sisestatud");
        console.log(JSON.stringify(data));

    }
  });


}

function display_book(book)
{
	 var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td>Raamatu id: <b>" + book.id + "</b></td></tr>";

		out_data = out_data + "<tr><td>Pealkiri:</td><td><input type=text name=title value='" + book.title + "'></td></tr>";
		out_data = out_data + "<tr><td>Autor:</td><td><input type=text name=author value='" + book.author + "'></td></tr>";
		out_data = out_data + "<tr><td>Kirjastus:</td><td><input type=text name=publisher value='" + book.publisher + "'></td></tr>";
		out_data = out_data + "<tr><td>Riik:</td><td><input type=text name=country value='" + book.country + "'></td></tr>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:save_book()'>Salvesta</button></td>";
		//out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:delete_book()'>Kustuta</button></td></tr>";
		out_data = out_data + "</table>";

	

	
	 $("#one_book").html(out_data);
}




function display_books(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td>Raamatud, kokku: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>Pealkiri:</td><td>" + book.title + "</td><td>autor:</td><td>" + book.author + "</td>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:get_book(" + book.id + ")'>Vali</button></td></tr>";
		out_data = out_data + "<td><button type='button' class='btn' onClick='javascript:delete_book(" + book.id + ")'>Kustuta</button></td></tr>";
		out_data = out_data + "</table>";
		
	 }
	

	
	 $("#books_table").html(out_data);
}


function show_message(message)
{
	
	 $("#msg_text").html(message);
}
