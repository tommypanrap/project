// course-guitar

let buttonSend = document.querySelector(".send");

function checkCourses(){

    let coursesCheck = false;

    let courses = document.querySelectorAll(".checkbox");

    // console.log(courses);

    let checked = false;

    courses.forEach(function(checkbox){
        if(checkbox.checked){
            checked = true;
            console.log(checkbox);
        }
    })

    if(!checked){
        coursesCheck = false;
        return coursesCheck;
    }else{
        coursesCheck = true;
        return coursesCheck;
    }
};

buttonSend.addEventListener('click',(e)=>{
    // e.preventDefault;
    let courseCheck = checkCourses();

    let name = document.querySelector(".name-text");
    let phone = document.querySelector(".phone-text");
    let email = document.querySelector(".e-mail-text");
    let message = document.querySelector(".message");
    
    console.log(name);
    if(
        name.value == '' || phone.value == '' || email.value == '' || message.value == '' || courseCheck == false){
        alert('尚未填寫完畢');
    }else{
        name.value = ''  ;
        phone.value = '' ;
        email.value = '' ;
        message.value = '' ;
        
        let courses = document.querySelectorAll(".checkbox");
        courses.forEach(function(checkbox){
            checkbox.checked = false;
        })

        alert('我們將於三日內回覆~');
    }


    // alert('我們將於三日內回覆~');
});
