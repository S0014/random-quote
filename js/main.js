let btn=document.getElementById('btn')
let output=document.getElementById('output')
let auther=document.getElementById('auther')
let quotes=[{
        output:`"It's not what happens to you, but how you react to it that matters."`,
        auther:`--Epictetus`
    },
    {
        output:`"The best revenge is massive success."`,
        auther:`--Frank Sinatra`
    },
    {
        output:`"Resentment is like drinking poison and waiting for your enemies to die."`,
        auther:`--Nelson Mandela`
    },
    {
        output:`"You miss 100% of the shots you don't take."`,
        auther:`--Wayne Gretzy`
    },
    {
        output:`"Do not take life too seriously. You will not get out alive."`,
        auther:`--Elbert Hubbard`
    },
    {
        output:`"So many books ,so little time."`,
        auther:`--Frank zappa`
    },
    {
        output:`"A room without books is like a body without soul."`,
        auther:`--Marcus Tullius`
    },
    {
        output:`"You only live once, but if you do it right ,once is enough."`,
        auther:`--Mae West`
    }
]




function addQuote(){
    let random=Math.floor(Math.random()*quotes.length);
    output.innerHTML=quotes[random].output;
    auther.innerHTML=quotes[random].auther;
}