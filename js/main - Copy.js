var activeDropdown = {};
document.addEventListener("DOMContentLoaded", function() {

    //document.getElementById('music-dropdown').addEventListener('click', showDropdown);
    function showDropdown(event){

        if (activeDropdown.id && activeDropdown.id !== event.target.id) {
            activeDropdown.element.classList.remove('active');
        }
        //checking if a list element was clicked, changing the inner button value
        if (event.target.tagName === 'LI') {
            activeDropdown.button.innerHTML = event.target.innerHTML;
            for (var i=0;i<event.target.parentNode.children.length;i++){
                if (event.target.parentNode.children[i].classList.contains('check')) {
                    event.target.parentNode.children[i].classList.remove('check');
                }
            }
            //timeout here so the check is only visible after opening the dropdown again
            window.setTimeout(function(){
                event.target.classList.add('check');
            },500)
        }
        for (var i = 0;i<this.children.length;i++){
            if (this.children[i].classList.contains('dropdown-selection')){
                activeDropdown.id = this.id;
                activeDropdown.element = this.children[i];
                this.children[i].classList.add('active');
            }
            //adding the dropdown-button to our object
            else if (this.children[i].classList.contains('dropdown-button')){
                activeDropdown.button = this.children[i];
            }
        }
    }

    // window.onclick = function(event) {
    //     if (!event.target.classList.contains('dropdown-button')) {
    //         activeDropdown.element.classList.remove('active');
    //     }
    // };

    document.getElementsByClassName('menu-toggle')[0].addEventListener('click', menuClick);
    function menuClick() {
        // if (!(document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display === "" || document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display === "block")) {
        //     //document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display = 'block';
        //     setTimeout(function () {document.getElementById('main-navigation').getElementsByTagName('ul')[0].setAttribute("class", "nav-display-show");}, 5);
        // } else {
        //     //document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display = 'none';
        //     setTimeout(function () {document.getElementById('main-navigation').getElementsByTagName('ul')[0].setAttribute("class", "nav-display-hide");}, 5);
        // }

        if (document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].className === "group-list") {
            //document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display = 'block';
            setTimeout(function () {document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].setAttribute("class", "add-click-show");}, 5);

        } else {
            //document.getElementById('main-navigation').getElementsByTagName('ul')[0].style.display = 'none';
            setTimeout(function () {document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].setAttribute("class", "group-list");}, 5);
        }
    }


    /*document.getElementById('main-navigation').addEventListener('click', menuListClick);
     for(var t=0; t<document.getElementById('main-navigation').getElementsByTagName("ul").length; t++) {
     if(t!==0) {
     //document.getElementById('main-navigation').getElementsByTagName("ul")[t].style.display = 'none';
     document.getElementById('main-navigation').getElementsByTagName("ul")[t].setAttribute("class", "nav-display-hide");
     }
     }
     function menuListClick(e) {
     if(e.target.children[1]) {
     // if (e.target.children[1].style.display === "") {//e.target.children[1].style.transition = "all 4s linear";
     //     console.log("");
     //     console.log(e.target.children[1].style.display);
     //     e.target.children[1].style.display = 'block';
     //     //e.target.children[1].className = "nav-display-show";
     //     e.target.children[1].style.opacity = "1";
     // }
     // else if (e.target.children[1].style.display === "block"){
     //     e.target.children[1].style.display = 'none';
     //     //e.target.children[1].className = "nav-display-hide";
     //     e.target.children[1].style.opacity = "0";
     // }
     // else{
     //     e.target.children[1].style.display = 'block';
     //     //e.target.children[1].className = "nav-display-show";
     //     e.target.children[1].style.opacity = "1";
     // }


     if (e.target.children[1].className === "") {

     //e.target.children[1].style.display = 'block';
     setTimeout(function () {e.target.children[1].setAttribute("class", "nav-display-show");}, 5);
     }
     else if (e.target.children[1].className === "nav-display-show"){

     //setTimeout(function () {e.target.children[1].style.display = 'none';}, 5);
     setTimeout(function () {e.target.children[1].setAttribute("class", "nav-display-hide");}, 5);
     }
     else{


     //e.target.children[1].style.display = 'block';
     setTimeout(function () {e.target.children[1].setAttribute("class", "nav-display-show");}, 5);
     }

     }

     // if (e.target.children[1].style.display==="block"){
     //     console.log("block");
     //     console.log(e.target.children[1].style.display);
     //     e.target.children[1].style.display = 'none';
     // }
     // if (e.target.children[1].style.display==="none"){
     //     console.log("none");
     //     console.log(e.target.children[1].style.display);
     //     e.target.children[1].style.display = 'block';
     // }

     }*/
    //setTimeout(function () {
        for(var i=0; i<document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("label").length; i++)
            document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("label")[i].addEventListener('click', menuListClick);

        function menuListClick(e) {

            if(e.target.getElementsByTagName("span")[0].classList.contains( "rotate-icon")) {
                e.target.getElementsByTagName("span")[0].classList.remove("rotate-icon");

                for(var k=0; k<e.target.parentNode.getElementsByTagName("span").length; k++){
                    e.target.parentNode.getElementsByTagName("span")[k].classList.remove("rotate-icon");

                }

            }
            else {
                e.target.getElementsByTagName("span")[0].className = e.target.getElementsByTagName("span")[0].className+" rotate-icon";

            }

//            console.log(e.target.parentNode);

            if(e.target.parentElement.getElementsByTagName("ul")[0].className === "group-list") {
                e.target.parentElement.getElementsByTagName("ul")[0].setAttribute("class", "add-click-show");
                if (e.target.parentElement.parentElement.parentElement.classList.contains( "nav")){
                    for (var h = 0; h < document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul").length; h++) {
                        if (document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h] !== e.target.parentElement.getElementsByTagName("ul")[0]) {
                            //e.target.parentElement.parentElement.getElementsByTagName("ul")[h].setAttribute("class", "group-list");
                            document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h].setAttribute("class", "group-list");
                            console.log(e.target.parentElement.getElementsByTagName("ul")[h]);
                        }
                    }
                }

            }
            else {
                e.target.parentElement.getElementsByTagName("ul")[0].setAttribute("class", "group-list");
                for(var j=0; j<e.target.parentElement.getElementsByTagName("ul")[0].getElementsByTagName("ul").length; j++){
                    e.target.parentElement.getElementsByTagName("ul")[0].getElementsByTagName("ul")[j].setAttribute("class", "group-list");
                }


            }

        }
            // },50);
}, false);