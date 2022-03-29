const Dino = document.querySelector('.Dino')
const background = document.querySelector('.background')
let pulo = false
let MEposition = 0 
document.addEventListener('keyup', espaco)


function espaco(event){
    if(event.keyCode === 32){
        if(!pulo){

            jump()
        }
    }
}


function jump(){
    
    pulo = true

        let Upinterval = setInterval(()=>{
            
            if (MEposition >= 150){
                clearInterval(Upinterval)
                let Downinterval = setInterval(()=>{
                    if(MEposition <= 0){
                        pulo = false
                        clearInterval(Downinterval)
                    }else{
                        
                        MEposition -= 05
                        Dino.style.bottom = MEposition + "px"
                    }
                })
            }else{
                
                MEposition += 20
                Dino.style.bottom = MEposition + "px"
            
            }
        }, 20)

    };

function CreateCactus(){
        let position = 1000
        const cactus = document.createElement('div')
        let randomNumber = Math.floor( Math.random() * 5000)

        cactus.classList.add('cactus')
        background.appendChild(cactus)
        cactus.style.left = position + "px"

        let leftInterval = setInterval(()=>{


            position -= 10
            cactus.style.left = position + "px"

            if( position == -60){
                clearInterval(leftInterval)
                background.removeChild(cactus)
                
            }else if ( position > 0 && position < 60 && MEposition < 60 ){
                
                clearInterval(leftInterval)
                document.body.innerHTML = "<h1 class='gameOver'> Game Over</h1>"
               
            }
            
            
            
        }, 20)
        
        
        setTimeout(CreateCactus,randomNumber)   


    }

CreateCactus();
    
    



    