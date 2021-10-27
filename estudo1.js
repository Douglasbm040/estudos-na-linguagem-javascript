/*
1 declarar variaveis
2 condicionais 
3 lacos 
4 funcoes
5 importaçoes
*/ 



// variaveis 

var profissional  = 'enfermeiro'

function profile (profissional){
    let mensagem=" é um profissional da area da saúde"
    const lista_de_profissionais=['enfermeiro','médico','nutricionista']

    for (let profiles = 0; profiles < lista_de_profissionais.length; profiles++) {

        const element = lista_de_profissionais[profiles];

        if (profissional == element) {
            console.log(profissional + mensagem)
        } else {

        }    
        
    }
    

}

profile(profissional)

