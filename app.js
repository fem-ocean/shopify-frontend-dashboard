
// Your javascript goes here

document.addEventListener('DOMContentLoaded', function() {

    // Elements for Arrow Toggle
    const dropdownArrow = document.getElementById('arrow');
    const setupBody = document.getElementById('setup-guide');
    const arrowImageDown = document.getElementById('arrow-image-down');
    const arrowImageUp = document.getElementById('arrow-image-up');


    const optionDivCollection = document.getElementsByClassName('option-online-store');

    // For hiding all option divs on after page has finish loading.
    for (let i=0; i < optionDivCollection.length; i++){
        let currentDiv = optionDivCollection[i];   
        currentDiv.style.display = "none";
    }


    // For hiding and showing elements in the div that receives a click event.
    dropdownArrow.addEventListener('click', function(){
        setupBody.classList.toggle('show');

        // cursor pointer and clicking to open details functionalities
        for (let i=0; i < optionDivCollection.length; i++){
            let currentDiv = optionDivCollection[i];

            currentDiv.addEventListener('mouseover', function(){
                if (this.style.height == "40px"){
                    this.style.cursor = "pointer";
                }else{
                    this.style.cursor = "";
                }
            })
            currentDiv.addEventListener('click', showDetails)
            
        }

        if (setupBody.classList.contains('show')){
            setupBody.style.height = "auto";
            arrowImageDown.style.display= "none";
            arrowImageUp.style.display =  "block";
            for (let i=0; i<optionDivCollection.length; i++){
                optionDivCollection[0].click();
                optionDivCollection[i].style.display = 'flex';

            }

        }else{
            setupBody.style.height = "106px";
            arrowImageUp.style.display = "none";
            arrowImageDown.style.display = "block";
            for (let i=0; i<optionDivCollection.length; i++){
                optionDivCollection[i].style.display = 'none';
            }

        }
    })

    
    // For Checkbox Selection
    const uncheckImgCollection = document.getElementsByClassName('uncheck-option');
    for (let i=0; i<uncheckImgCollection.length; i++){
        const uncheckImg = uncheckImgCollection[i];

        uncheckImg.addEventListener('mouseover', function(){
            this.src = "assets/hover-circle.svg";
            this.style.cursor = "pointer";

        })

        uncheckImg.addEventListener('mouseout', function(){
            // if the image is not clicked, return to previous empty box
            this.src = "assets/unchecked.svg"

        })



        uncheckImg.addEventListener('click', function(){
            // when clicked, toggle animation class
            this.classList.toggle('animate')

            // if the animation class is there, it means its checked, return to unchecked state
            console.log((this.classList.contains('animate'))
            )
                if (this.classList.contains('animate')){
                    this.content = "assets/unchecked.svg";
                }
                
        })


        uncheckImg.addEventListener('keydown', function(e){
            // Check if Enter key (keyCode 13) or Space key (keyCode 32) is pressed
            if (e.keyCode === 13 || e.keyCode === 32) {
                this.classList.toggle('animate');
                this.content = "assets/unchecked.svg";
            }
        });
        
    }

    

    // Removing Plan Div Functionality
    const xImage = document.querySelector('#cancel-plan-image');
    const trialDiv = document.querySelector('.trial-div');
    const pageBody = document.getElementById('body');

    xImage.addEventListener('mouseover', function(){
        xImage.style.cursor = "pointer";
    })

    xImage.addEventListener('click', function(){
        trialDiv.style.visibility = "hidden";
    })


    // Notification1 Display
    const bellButton = document.querySelector(".bell");
    const bellNotificationDiv = document.querySelector(".bell-notification");

    bellButton.addEventListener('click', function(){
        bellNotificationDiv.classList.toggle('showDiv');
        if(bellNotificationDiv.classList.contains('showDiv')){
            bellNotificationDiv.style.display="inline-flex";
        }else{
            bellNotificationDiv.style.display="none"
        }

        document.body.addEventListener('click', function() {
            // Check if bellNotificationDiv contains 'showDiv'
            if (!bellNotificationDiv.classList.contains('showDiv')) {
                bellNotificationDiv.style.display = "none";
            }
        });

    })



    // Notification2 Display
    const notification2 = document.querySelector(".notification");
    const notificationDropdown = document.querySelector(".name-notification-dropdown");


    notification2.addEventListener('click', function(){
        notificationDropdown.classList.toggle('showNotification');
        if(notificationDropdown.classList.contains('showNotification')){
            notificationDropdown.style.display="flex";
        }else{
            notificationDropdown.style.display="none"
        }

        const isExpanded = notification2.attributes["aria-expanded"].value=="true"
        const allMenuItems = notificationDropdown.querySelectorAll('[role="menuitem"]')


        if (isExpanded){
            notification2.ariaExpanded = "false"
        }else{
            notification2.ariaExpanded = "true"
            allMenuItems.item(1).focus()


        }


        console.log(allMenuItems)
        // is it expanded

        // if yes, focus on the first item of the list

        // if no, do nothing

        // get all items in the menu

        // get the first item in the menu

        // focus on that irem

    })

  
    

    const imgCollection = document.querySelectorAll('.uncheck-option');
    console.log(imgCollection)
    imgCollection.forEach((image) => {
        image.addEventListener('click', progressBarUpdate)
        image.addEventListener('keydown', progressBarUpdate)
    });
    
    const progress = document.querySelector('#progress');
    const numberCompleted = document.querySelector('.number-completed');

    function progressBarUpdate(){
        
        const checkedCount = document.querySelectorAll('.animate').length;
        numberCompleted.innerHTML = checkedCount;
        const percent = (checkedCount/5) * 100;
        progress.style.width = `${percent}%`
    }




    function showDetails (e){

        const allOptionDivs = document.getElementsByClassName('option-online-store');
        for (let i=0; i<allOptionDivs.length; i++){
            const div = allOptionDivs[i];
            const allParagraphs2 = div.querySelector('.option1-writing-box-para2');
            const allSingleBtn = div.querySelector('.customize-theme-btn');
            const allOptionImage = div.querySelector('.option-image');
            try{
                const allProductBtns = div.querySelector('.product-btns');
                const allImportProduct = div.querySelector('.import-product');
                if (allProductBtns){
                    allProductBtns.style.display="none";
                    allImportProduct.style.display="";
                }
            }catch{}

            allParagraphs2.style.display="";
            allSingleBtn.style.display="";
            allOptionImage.style.display="";

            div.style.height = "40px";
            div.style.backgroundColor = "#fff";
            

        }

        // the div that received the event should show the details
        const paragraph2 = e.currentTarget.querySelector('.option1-writing-box-para2');
        const singleBtn = e.currentTarget.querySelector('.customize-theme-btn');
        const optionImage = e.currentTarget.querySelector('.option-image');
        const productBtns = e.currentTarget.querySelector('.product-btns');
        const importProduct = e.currentTarget.querySelector('.import-product');
        e.currentTarget.style.backgroundColor = "#f3f3f3";
        

        paragraph2.style.display = "inline";
        singleBtn.style.display = "block";
        optionImage.style.display = "block";
        try{
        productBtns.style.display = "flex";
        importProduct.style.display = "block";
        }catch{}

        e.currentTarget.style.height = "auto"
        e.currentTarget.style.cursor = ""

    }

    
})