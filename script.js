/*global $*/
/*global bookTitle*/
/*global authors*/
/*global publishers*/

var library ={
background_image: "background-books-bookshelves-1193603.jpg",

};

$('#fiction').click(function() {
        var searchTerm = $("#starstruck").val();
        var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
        console.log(bookUrl)
  
$.ajax({
    url: bookUrl,
    method:"GET",
    success: function(response) {
        
        console.log(response);
            bookTitle = response.items[0].volumeInfo.title;
            authors = response.items[0].volumeInfo.authors[0];
            publishers = response.items[0].volumeInfo.publisher;
    }    
    });
});
