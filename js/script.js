/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sauce","Make Luv","Could've Been","Against Me","Unfair"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["http://wave891.fm/img/hotspot/478.jpg","https://static1.squarespace.com/static/536ac796e4b0e5e2b1f77467/55f2e802e4b02707e02e2870/5a00031664265f6a403ede88/1510160461246/Sonder+Son+1.jpg?format=300w",
"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/65/8f/2d/658f2d31-7a65-6005-f4b8-a9cca4d96a20/886447178867.jpg/600x600bf.png","https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/65/8f/2d/658f2d31-7a65-6005-f4b8-a9cca4d96a20/886447178867.jpg/600x600bf.png",
"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/bd/73/26/bd7326aa-5a10-4530-e4f5-529b2eac1824/00602577016790.rgb.jpg/1200x630bb.jpg"];
var artists = ["Ella Mai","Brent Faiyaz","H.E.R","H.E.R","6lack"];
var lengths = ["3:05","3:13","4:08","4:30","2:15"];
var links = ["https://www.youtube.com/watch?v=e7VStHPNSqo","https://www.youtube.com/watch?v=V1EYgeTER_I","https://www.youtube.com/watch?v=zHZVV02osIw",
"https://www.youtube.com/watch?v=vWYF6FLjg04","https://www.youtube.com/watch?v=URNkr1TyiSQ"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(name) {
        $("#songs").append("<p>" + name + "</p>");
    });
    
     artists.forEach(function(name) {
        $("#artists").append("<p>" + name + "</p>");
    });
    
    images.forEach(function(picture) {
        $("#images").append("<img src="+ picture +">");
    });
    
    lengths.forEach(function(time) {
        $("#lengths").append("<p>" + time + "</p>");
    });
    
     links.forEach(function(video) {
        $("#links").append("<a href= "+ video+ "> Click Here  </a>");
    });

}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}



function addSongInfo(){
    var song = $("#song").val();
    var artist = $("#artist").val();
    var image = $("#image").val();
    var length = $("#length").val();
    var link = $("#link").val();
    
    // BELOW write the code to add new items to each of the arrays.
    songs.push(song);
    artists.push(artist);
    images.push(image);
    lengths.push(length);
    links.push(link);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
