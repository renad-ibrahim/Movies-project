// sidebar***************************************************************************
let navWidth = $("#links").innerWidth();
$("aside").css("left",`-${navWidth}px`);
$("#navBtn").click(function () { 
    if($("aside").css("left") == "0px"){
        $("aside").animate({ left : `-${navWidth}` } , 1000);
    }
    else{
        $("aside").animate({ left : "0px" } , 1000);
        $(".l1 a").animate({ top : "0px" } , 1500);
        $(".l2 a").animate({ top : "0px" } , 2000);
        $(".l3 a").animate({ top : "0px" } , 2500);
        $(".l4 a").animate({ top : "0px" } , 3000);
        $(".l5 a").animate({ top : "0px" } , 3500);
    }
    
});
// Validation Form ****************************************************************
$("input").click(function (e) { 
    $(e.target).css({"text-align": "start" , "background-color" : "black" , "color" : "white"});
});

$("#userName").on('input' , function(){
    
    let regex = /^[a-zA-Z\s]{3,15}[0-9]{0,2}$/;
    if(regex.test(userName.value) == true){
        if(userName.classList.contains("is-invalid") == true){
            userName.classList.replace("is-invalid" , "is-valid");
            document.getElementById("nameMsg").innerHTML = "";
        }
        return true;
    }
    else{
        userName.classList.add('is-invalid');
        document.getElementById("nameMsg").innerHTML = "Enter valid name";
        document.getElementById("nameMsg").style.color = "rgb(243, 54, 54)";
        return false;
    }
});

$("#userEmail").on('input' , function(){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(regex.test(userEmail.value) == true){
        if(userEmail.classList.contains("is-invalid") == true){
            userEmail.classList.replace("is-invalid" , "is-valid");
            document.getElementById("emailMsg").innerHTML = "";
        }
        return true;
    }
    else{
        userEmail.classList.add('is-invalid');
        document.getElementById("emailMsg").innerHTML = "Enter valid email";
        document.getElementById("emailMsg").style.color = "rgb(243, 54, 54)";
        return false;
    }
});

$("#userNumber").on('input' , function(){
    let regex = /^01[0125][0-9]{8}$/;

    if(regex.test(userNumber.value) == true){
        if(userNumber.classList.contains("is-invalid") == true){
            userNumber.classList.replace("is-invalid" , "is-valid");
            document.getElementById("phoneMsg").innerHTML = "";
        }
        return true;
    }
    else{
        userNumber.classList.add('is-invalid');
        document.getElementById("phoneMsg").innerHTML = "Enter valid Phone Number";
            document.getElementById("phoneMsg").style.color = "rgb(243, 54, 54)";
        return false;
    }
});

$("#userPass").on('input' , function(){
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
    if(regex.test(userPass.value) == true){
        if(userPass.classList.contains("is-invalid") == true){
            userPass.classList.replace("is-invalid" , "is-valid");
            document.getElementById("message1").innerHTML="Correct Passowrd";
            document.getElementById("message1").style.color="green";
        }
        return true;
    }
    else{
        userPass.classList.add('is-invalid');
        document.getElementById("message1").innerHTML="Password should contain at least one digit , one Lower case , one Upper case and 8 from the mentioned character and shouldn't contain a special charatcer";
        document.getElementById("message1").style.color="rgb(243, 54, 54)";
        return false;
    }
});

$("#userRePass").on('input' , function(){
    if(userRePass.value == userPass.value){

        document.getElementById("message2").innerHTML="Confirm Passowrd";
        document.getElementById("message2").style.color="green";
    }
    else{
        document.getElementById("message2").innerHTML= "Worng Matched Passowrd";
        document.getElementById("message2").style.color="rgb(243, 54, 54)";
    }
});

$("#btn").on('click' , function(){
    if(userName.value == ""){
        document.getElementById("nameMsg").innerHTML = "Please fill this input";
        document.getElementById("nameMsg").style.color = "rgb(243, 54, 54)";
    }
    else if(userEmail.value == ""){
        document.getElementById("emailMsg").innerHTML = "Please fill this input";
        document.getElementById("emailMsg").style.color = "rgb(243, 54, 54)";
    }
    else if(userNumber.value == ""){
        document.getElementById("phoneMsg").innerHTML = "Please fill this input";
        document.getElementById("phoneMsg").style.color = "rgb(243, 54, 54)";
    }
    else if( userPass.value == "" ){
        document.getElementById("message1").innerHTML = "Please fill this input";
        document.getElementById("message1").style.color = "rgb(243, 54, 54)";
    }
    else if(userRePass.value == ""){
        document.getElementById("message2").innerHTML = "Please fill this input";
        document.getElementById("message2").style.color = "rgb(243, 54, 54)";
    }
    else{
        let form = document.getElementById('form');
        form.submit();
    }
});

//Get APIs  ********************************************************************** 
var allMovies = [];

var movies = [];
(async function(){
    var response =  await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4e165a882363df27a61e64f79f5a612f&language=en-US&page=1")
    var finalDataFromApi = await response.json();

    movies = finalDataFromApi.results;

    console.log(movies);
    
    displayMovies(movies);

})();
$("#now").on('click' ,async function(){
        var response =  await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4e165a882363df27a61e64f79f5a612f&language=en-US&page=1")
        var finalDataFromApi = await response.json();

        movies = finalDataFromApi.results;
        displayMovies(movies);

});
$("#trending").on('click' ,async function(){
        var response =  await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4e165a882363df27a61e64f79f5a612f")
        var finalDataFromApi = await response.json();

        movies = finalDataFromApi.results;
        displayMovies(movies);

});

$("#popular").on('click' ,async function(){
        var response =  await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e165a882363df27a61e64f79f5a612f&language=en-US&page=1")
        var finalDataFromApi = await response.json();

        movies = finalDataFromApi.results;
        displayMovies(movies);

});
$("#rated").on('click' ,async function(){
        var response =  await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e165a882363df27a61e64f79f5a612f&language=en-US&page=1")
        var finalDataFromApi = await response.json();

        movies = finalDataFromApi.results;
        displayMovies(movies);

});
$("#upComing").on('click' ,async function(){
        var response =  await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e165a882363df27a61e64f79f5a612f&language=en-US&page=1")
        var finalDataFromApi = await response.json();

        movies = finalDataFromApi.results;
        displayMovies(movies);

});

//Display Movies ********************************************************* 
function displayMovies(x) {
    var dataContainer = ``;
    for(i=0 ; i<x.length ; i++){
        dataContainer += `<div class="col-lg-4 col-md-6 pb-3">
            <div class="movie text-center position-relative ">
                <img class="w-100" src= "https://image.tmdb.org/t/p/w500/${x[i].poster_path}" />
                <div class="movie-info position-absolute bg-white end-0 h-100 opacity-75 d-flex justify-content-center align-items-center">
                <div>
                    <h3>${x[i].original_title}</h3>
                    <p>${x[i].overview}</p>
                    <p class="rate">rate : ${x[i].vote_average}</p>
                    <p class="date">${x[i].release_date}</p>
                </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById("rowsData").innerHTML = dataContainer;
};

// Search *************************************************************
function search(searchInput){
    var searchMovies = []; 

    for(i=0 ; i<movies.length ;i++ ){
        if(movies[i].original_title.toLowerCase().includes(searchInput.toLowerCase()) == true){
            searchMovies.push(movies[i]);
        }
    }
    displayMovies(searchMovies);
};
