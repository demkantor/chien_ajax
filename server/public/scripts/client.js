$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    $( '#addQuoteButton' ).on( 'click', addQuote );
    // get quotes from server when page loads
    getQuotes();
} // end onReady

function addQuote(){
    // get user input and place in an object
    const objectToSend = {
        who: $('#whoIn').val(),
        quote: $('#quoteIn').val()
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

function displayQuotes( quotesArray ){
    let el = $( '#quotesOut' );
    el.empty();
    for( let i=0; i<quotesArray.length; i++){
        el.append( `<li>"${ quotesArray[i].quote }": ${ quotesArray[i].who }</li>`)
    }
} // end displayQuotes

// make a get call to /quotes on server
function getQuotes(){
    console.log("want to hear a quote?");
    // ask jQuery to make an AJAX GET call to /quotes
    $.ajax({
        type: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log("guess whos back?", response);
        // lopp through array and append each to DOM
        displayQuotes(response);
    }).catch(function(err){
        console.log(err);
        alert("error getting quotes. see console for details");
    })// end AJAX
}//end get quotes