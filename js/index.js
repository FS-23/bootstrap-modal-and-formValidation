// $(document).ready(function(){
//       let dom1 = document.querySelector('#container-1')
//       console.log(dom1.dataset);
// })
let alertbox = document.querySelector('#send-alert')
let modalBox = document.querySelector('#form-modal')


function showAlert(text,timeout = 2000) {
    alertbox.style.display = "block"
    alertbox.innerHTML = text
    setTimeout(()=>{
        alertbox.style.display = "none"
    },timeout)
}

function hideModal(){
    modalBox.style.display ='none'
    document.querySelector('.modal-backdrop').style.display = 'none' 
    $('#app-loading').hide()

}

function initEvent(){
    document.querySelector('#SendMessage').addEventListener('click', ()=>{
        let errorMessage = document.querySelector('#error-message')
        
        let isFomrValid = validateForm()
        if(isFomrValid){
            errorMessage.innerHTML =''
            $('#app-loading').show()
            setTimeout(()=>{
                hideModal()
                showAlert('😍 Votre message a été envoyé avec succès !!!')
            }, 3000)
        }else{
            errorMessage.innerHTML = "Veuillez remplir les champs obligatoires !!!"
        }
       
    })
}

function validateForm(){

    /*  @ restrictions @
        
        - name |required & min(6)
        - email | required & valid email ( contains @ )
        - message | reuired & min(10) & max(100)
    */

    let nameInput = document.querySelector('#message-username')
    let emailInput = document.querySelector('#message-user-email')
    let messageInput = document.querySelector('#message-text')
    
    let name = nameInput.value
    let email = emailInput.value
    let message = messageInput.value
    
    let isNameValid = false , isEmailValid = false , isMessageValid = false

    if(name.length >= 6) {
        isNameValid = true;
        nameInput.classList.remove('error-input')
    }else{
        nameInput.classList.add('error-input')
    }
    if(email != '' && email.indexOf("@") != -1 ){
        isEmailValid = true 
        emailInput.classList.remove('error-input')
    }
    else{
        emailInput.classList.add('error-input')
    }
    if(message.length >= 10 && message.length <= 100) {
        isMessageValid = true
        messageInput.classList.remove('error-input')
    }
    else{
        messageInput.classList.add('error-input')
    }

    console.log('validation infos:', {isNameValid , isEmailValid , isMessageValid})
    let messageInfo = {name ,  email , message}
    
    console.log('form values:', messageInfo)

    return isNameValid && isEmailValid && isMessageValid
}

initEvent()
