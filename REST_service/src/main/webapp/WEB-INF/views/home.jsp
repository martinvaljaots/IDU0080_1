<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Home</title>
         <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script src="resources/app.js"></script>
    </head>
    <body>
        <h1>REST World!</h1>
        <p>Raamatud</p>
      <form>
      <input type=button value="Koik raamatd" onClick="javascript:get_books()">
      
      
      <div id="msg_text"></div> 
      <div id="one_book"></div> 
      
      <table bgcolor=eeeeee><tr><td>Uus raamat</td></tr>
      <tr><td>Pealkiri:</td><td><input type=text name=new_book_title value=''></td></tr>
      <tr><td>Autor:</td><td><input type=text name=new_book_author value=''></td></tr>
      <tr><td>Kirjastus:</td><td><input type=text name=new_book_publisher value=''></td></tr>
      <tr><td>Riik:</td><td><input type=text name=new_book_country value=''></td></tr>
      <td><button type='button' class='btn'  onClick='javascript:add_book()'>Saada uus serverile</button></td></tr>
      </table>
      
      
	  <div id="books_table"></div> 
	  
	  </form>
	  
    </body>
</html>
