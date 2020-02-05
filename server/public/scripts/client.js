$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    //get quotes from server on page load
    
    getQuotes();
} // end onReady

function addQuote(){
    // get user input and place in an object
    const objectToSend = {
        who: "abcdef",
        quote: "xyz"
    };
    // use AJAX to send object to server via a post
    $.ajax({
        type: "POST",
        url: "/quotes",
        data: objectToSend
    }).then(function(response){
        console.log("back from the post office!", response);
        // update DOM
        getQuotes();
    }).catch(function(err){
        // Catch any errors
        console.log(err);
        alert("no wonky");
    })//end ajax
}//end addQuote


// make a get call to /quotes on server
function getQuotes(){
    console.log("want to hear a quote?");
    // ask jQuery to make an AJAX GET call to /quotes
    $.ajax({
        type: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log("guess whos back?", response);
    }).catch(function(err){
        console.log(err);
        alert("error getting quotes. see console for details");
    })// end AJAX
}//end get quotes