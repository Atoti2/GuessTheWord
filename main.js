const words = [
    "alma", "kutya", "ház", "számítógép", "toll", "asztal", "autó", "iskola", "kávé", "televízió",
    "szék", "táska", "ajtó", "laptop", "szemüveg", "gyerek", "víz", "foci", "újság", "telefon",
    "papír", "tészta", "térkép", "kert", "olvasás", "gyümölcs", "állat", "kép", "játék", "vers",
    "épület", "étel", "számológép", "sör", "film", "zene", "könyv", "főzés", "futás", "horgászat",
    "sport", "bicikli", "kerékpár", "torna", "tanulás", "ének", "színház", "fürdés", "alvás",
    "sétálás", "mozgás", "úszás", "fagylalt", "pizza", "kenyér", "kutatás", "pénz", "utazás",
    "kirándulás", "állomás", "busz", "vonat", "repülő", "strand", "park", "erdő", "hegy", "tó",
    "folyó", "híd", "út", "ország", "város", "falucska", "szomszéd", "bolt", "piac", "étterem",
    "kávézó", "mosoda", "gyógyszertár", "iskola", "óvoda", "egyetem", "színház", "mozi", "múzeum",
    "állomás", "repülőtér", "buszpályaudvar", "kórház", "park", "szórakozóhely", "hotel", "lakás",
    "ház", "kert", "udvar", "udvarház", "terasz", "társasház", "lakópark", "középület", "panelház"
];

const abc = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

let id = null
function selectRandomWord(words){
    return words[Math.floor(words.length * Math.random())]
}

let randomWord = selectRandomWord(words)
let win = []
let time

document.querySelector('button').addEventListener('click', start)

function start(){
    time = 20
    setTimer()
    randomWord = selectRandomWord(words)
    document.querySelector('.over').innerHTML = ""
    document.querySelector('.wordHolder').innerHTML = ""
    document.querySelector('.alphabet').innerHTML = ""
    Array.from(abc).forEach((letter) => {
        document.querySelector('.alphabet').innerHTML += 
        `
        <div class="letters">${letter}</div>
        `
    })

    document.querySelectorAll('.letters').forEach((item) => {
        item.addEventListener('click', checkWords)
    })
    Array.from(randomWord).forEach((letter) => {
        document.querySelector('.wordHolder').innerHTML += `<div class="${letter} words"></div>`
    })
}

function checkWords(item){
    const targetWord = Array.from(randomWord)
    console.log(targetWord);
    const clickedLetter = item.target.innerHTML
    if(targetWord.includes(clickedLetter)){
        item.target.parentNode.removeChild(item.target)
        document.querySelectorAll(`.${clickedLetter}`).forEach((data) => {
            data.innerHTML = clickedLetter
            win.push(data)
        })
    }
}

function setTimer(){
    if(id !== null){
        clearInterval(id)
    }
    id = setInterval(() => {  
        
        time -= 1
        document.querySelector('.timer').innerHTML = time
        if(time == 0){
            document.querySelector('.over').innerHTML = "Vesztettél!"
            win = []
            clearInterval(id)
            document.querySelector('button').removeEventListener('click,', start)
        }
        if(win.length == randomWord.length){
            document.querySelector('.over').innerHTML = "Gratulálok, kitaláltad!"
            win = []
            clearInterval(id)
            document.querySelector('button').removeEventListener('click,', start)
        }
    }, 1000)
    
}
