
let countPeep = document.getElementById('count-peeps')
let saveEntries = document.getElementById('previous-entries')

let count = 0

function increment(){
    count = count+1
    countPeep.innerText=count
    console.log(count)

}

function saveCount(){
    
    let savedScore = countPeep.textContent
    
    saveEntries.textContent = saveEntries.textContent + savedScore + " - "

    countPeep.textContent = 0

    count = 0
}
