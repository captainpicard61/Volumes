




$('#startruck').click(function() {
        var searchTerm = $("#searchTerm").val();
        var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=" + searchterm;
  




$.ajax({
    url: bookUrl,
    method:"GET",
    success: function(response) {
        
        console.log(response);
            
            Booktitle = response.items[0].volumeInfo.title;
            Authors = response.items[0].volumeInfo.author[0];
            Publishers = response.items[0].volumeInfo.publisher;
            PubDate = response.items[0].volumeInfo.publishedDate;
            Description = response.item[0].volumeInfo.description;
            

    }    
        
        
    });
    
    
    
   });


 
});