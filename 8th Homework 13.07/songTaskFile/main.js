const depecheMode = document.querySelector('.depecheModeImg');
const train = document.querySelector('.trainImg');
const rollingStones = document.querySelector('.rollingStonesImg');


depecheMode.addEventListener('click', showLyricsDepeche);
train.addEventListener('click', showLyricsTrain);
rollingStones.addEventListener('click', showLyricsRolling);

const urlDepeche = './lyrics/Depeche_mode_precious.txt';
const urlTrain = './lyrics/Train_Angel_in_blue_jeans.txt';
const urlRolling = './lyrics/Rolling_Stones_anybody_seen_my_baby.txt';


function showLyricsDepeche(e) {
    e.preventDefault();
    fetch(urlDepeche)
    .then(response => {
        return response.text();
    })
    .then(data => {
        // console.log(data);
        document.getElementById('songText').innerText = data;
    });
};

function showLyricsTrain(e) {
    e.preventDefault();
    fetch(urlTrain)
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById('songText').innerText = data;
    });
};

function showLyricsRolling(e) {
    e.preventDefault();
    fetch(urlRolling)
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById('songText').innerText = data;
    });
};

