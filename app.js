

/**
 * 👇 CHARATER ARRAYS
 */

let charaters = 
            ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]

let letterArray = 
            ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let letterMixed = 
            ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

            // console.log(charaters)

/**
 * 👇 DOM MANIPULATION 
 */
let password_space = document.querySelector("#passord_space")
let generate_btn = document.querySelector("#gen_btn")
let copy_btn = document.querySelector("#copy_btn")
let decrease_count = document.querySelector("#decrease_count")
let increase_count = document.querySelector("#increase_count")
let count = document.querySelector("#count")
let strength = document.querySelector("#quality")



/**
 * 👇 FUNCTION CALL
 */

    function getPass(){
        

        let char1 =letterArray[Math.floor(Math.random()* letterArray.length )];

        let char2 =letterMixed[ Math.floor(Math.random()* letterMixed.length )];

        let char3 =letterMixed[ Math.floor(Math.random()* letterMixed.length )];

        let char4 =letterMixed[ Math.floor(Math.random()* letterMixed.length )];

        let char5 =letterMixed[ Math.floor(Math.random()* letterMixed.length )];

        let char6 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char7 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char8 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char9 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char10 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char11 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char12 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char13 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char14 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char15 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char16 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char17 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char18 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char19 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char20 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char21 =charaters[ Math.floor(Math.random()* charaters.length )];

        let char22 =charaters[ Math.floor(Math.random()* charaters.length )];


        if(count.innerText == 8){
        password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}`
        }else if(count.innerText == 10){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}`
        }else if(count.innerText == 12){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}`
        }else if(count.innerText == 14){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}${char13}${char14}`
        }else if(count.innerText == 16){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}${char13}${char14}${char15}${char16}`
        }else if(count.innerText == 18){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}${char13}${char14}${char15}${char16}${char17}${char18}`
        }else if(count.innerText == 20){
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}${char13}${char14}${char15}${char16}${char17}${char18}${char19}${char20}`
        }else{
            password_space.innerText = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}${char10}${char11}${char12}${char13}${char14}${char15}${char16}${char17}${char18}${char19}${char20}${char21}${char22}`
        }



        // Global variable
        passwordText = password_space.innerText
    }

    function copyToClipboard(){

        navigator.clipboard.writeText(passwordText);
        alert(`copied ${passwordText}`)
        console.log(passwordText)
    }

    function increament(){
        if(count.innerText >= 22){
            return
        }
        count.innerText = Number(count.innerText) + 2

        if(count.innerText >= 13){
            strength.innerText = "Strong"
        }else if(count.innerText >= 10 && count.innerText <= 12 ){
            strength.innerText = "Modrate"
        }else{
            strength.innerText = "Weak"
        }

        
        
    }

    function decreament(){
        if(count.innerText <= 8){
            return
        }
        count.innerText=Number(count.innerText) - 2

        if(count.innerText >= 13){
            strength.innerText = "Strong"
        }else if(count.innerText >= 10 && count.innerText <= 12 ){
            strength.innerText = "Modrate"
        }else{
            strength.innerText = "Weak"
        }

        
    }

    /**
     * EventListeners 👇
     */

generate_btn.addEventListener('click',getPass)

copy_btn.addEventListener('click',copyToClipboard)

increase_count.addEventListener('click',increament)

decrease_count.addEventListener('click',decreament)


/**
 * strenth class add
 */


console.log(count.value)

