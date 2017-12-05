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
        if (document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].className === "group-list") {
            setTimeout(function () {document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].setAttribute("class", "add-click-show");}, 5);

        } else {
            setTimeout(function () {document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].setAttribute("class", "group-list");}, 5);
            // for (var f = 0; f < document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul").length; f++) {
            //     if (document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[f]) {
            //         document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[f].setAttribute("class", "group-list");
            //
            //     }
            // }
            //
            // for (var k = 0; k < document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("span").length; k++) {
            //     if(document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("span")[k].classList.contains( "rotate-icon")) {
            //         document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("span")[k].classList.remove("rotate-icon");
            //     }
            //
            // }
        }
    }
    for(var i=0; i<document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("label").length; i++)
        document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("label")[i].addEventListener('click', menuListClick);

    function menuListClick(e) {
        /** Main menu click item collapse other open.*/
        for(var p=0; p<e.target.parentNode.parentNode.children.length; p++) {
            if (e.target.parentNode.parentNode.children[p] !== "#text" && e.target.parentNode !== e.target.parentNode.parentNode.children[p]) {

                if (e.target.parentNode.parentNode.children[p].getElementsByTagName("span").length!==0) {
                    for(var a=0; a<e.target.parentNode.parentNode.children[p].getElementsByTagName("span").length; a++) {
                        e.target.parentNode.parentNode.children[p].getElementsByTagName("span")[a].classList.remove("rotate-icon");
                    }
                }

            }
        }
        /** Remove rotation icons from entire menu, by clicking items individually or click other to clising it */
        if(e.target.getElementsByTagName("span")[0].classList.contains( "rotate-icon")) {
            e.target.getElementsByTagName("span")[0].classList.remove("rotate-icon");
            //e.target.getElementsByTagName("span")[0].removeAttribute('style');

            for (var k = 0; k < e.target.parentNode.getElementsByTagName("span").length; k++) {
                //e.target.parentNode.getElementsByTagName("span")[k].classList.remove("rotate-icon");
                e.target.parentNode.getElementsByTagName("span")[k].classList.remove("rotate-icon");
            }

        }
        else {
            e.target.getElementsByTagName("span")[0].className = e.target.getElementsByTagName("span")[0].className+" rotate-icon";
        }


        if(e.target.parentElement.getElementsByTagName("ul")[0].className === "group-list") {
            e.target.parentElement.getElementsByTagName("ul")[0].setAttribute("class", "add-click-show");
            /** Collapse all submenus when clicking other than current clicked menu item */
            if (e.target.parentElement.parentElement.parentElement.classList.contains( "nav")){
                for (var h = 0; h < document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul").length; h++) {
                    if (document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h] !== e.target.parentElement.getElementsByTagName("ul")[0]) {
                        document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h].setAttribute("class", "group-list");

                    }
                }
            }
        }
        else {
            e.target.parentElement.getElementsByTagName("ul")[0].setAttribute("class", "group-list");
            /** Collapse all submenus when clicking other than current clicked menu item */
            if (e.target.parentElement.parentElement.parentElement.classList.contains( "nav")){
                for (var h = 0; h < document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul").length; h++) {
                    if (document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h] !== e.target.parentElement.getElementsByTagName("ul")[0]) {
                        document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("ul")[h].setAttribute("class", "group-list");

                    }
                }
            }
        }
    }

}, false);

