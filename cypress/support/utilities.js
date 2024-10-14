export class Utilities{

random_email(){
    const characters='abcdefghijklmnopqrstuvwxyz0123456789';
    let results=''
    for(let i=0;i<10;i++){
        results +=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return results+ '@gmail.com'
}
}

export const util=new Utilities();