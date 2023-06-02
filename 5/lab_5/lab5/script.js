let input = document.getElementById("input");
let originalText = document.getElementById("originalText");
let ciphertext = document.getElementById("ciphertext");
let origAn = document.getElementById("origAn");
let ciphAn = document.getElementById("ciphAn");

let alphabet = 'абвгдеёжзійклмнопрстуўфхцчшыьэюя';
let N = alphabet.length;

originalText.value = `Я стары, я нават вельмі стары чалавек. І ніякая кніга не дасць вам таго, што на ўласныя вочы бачыў я, Андрэй Беларэцкі, чалавек дзевяноста шасці год. Кажуць, што доўгія гады лёс дае звычайна дурням, каб яны папоўнілі разумовы недахоп багатым вопытам. Ну што ж, я жадаў бы быць дурным удвая і пражыць яшчэ столькі, бо я дапытлівы суб'ект. Столькі цікавага адбудзецца на зямлі ў наступныя дзевяноста шэсць год!А калі мне скажуць заўтра, што я памру, - ну што ж: адпачынак таксама нядрэнная штука. Людзі калісь будуць жыць нават даўжэй за мяне, і ім не будзе горка за жыццё: усё ў ім было, усякага жыта па лапаце, усё я зведаў - нашто ж шкадаваць? Лёг і заснуў, спакойна, нават з усмешкай.Я адзін. Памятаеце, казаў Шэлі: Цемра здушылаЦеплыню скрыпічых таноў.Калі двое навек разлучыліся,То не трэба пяшчоты і слоў. Яна была добрым чалавекам, і мы пражылі, як у казцы: «доўга, шчасліва, пакуль не памёрлі». Але хопіць надрываць вам сэрца смутнымі словамі - я ж казаў, старасць мая - радасць мая, - лепей распавем вам штосьці з далёкіх, з маладых маіх год. Тут у мяне патрабуюць, каб я сваім апавяданнем скончыў сказ пра род Яноўскіх і яго заняпад, пра вымарачнасць беларускай шляхты. Відаць, трэба мне зрабіць гэта, бо, сапраўды, якая ж гэта атрымаецца гісторыя без канца.Да таго ж, яна блізка датычыцца мяне, і расказаць пра гэта ўжо ніхто не можа - толькі я. А вам цікава будзе паслухаць дзіўную гісторыю і пасля сказаць, што яна вельмі падобна да выдумкі.Дык вось, перад пачаткам я скажу, што тут праўда, шчырая праўда, толькі праўда, хоць вам давядзецца пакласціся ў гэтым толькі на адно маё слова.`;

let s = 3;
let k = Math.floor((originalText.value.length - 1) / s) + 1;


function crypt1() {
    let text = originalText.value.toLocaleLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            text[i] = '_';
        }

    }

    let entext = '';


    var time = performance.now();

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < s; j++) {
            let element = text[j * k + i];
            if (element) {
                entext += element;
            } else {
                entext += '.';
            }
        }
    }

    time = performance.now() - time;
    alert(time + ' мс');

    ciphertext.value = entext;


    //Анализ
    let origAnalize = [];
    let ciphAnalize = [];
    for (let i = 0; i < alphabet.length; i++) {
        origAnalize[i] = 0;
        ciphAnalize[i] = 0;
    }
    for (let i = 0; i < text.length; i++) {
        if (alphabet.indexOf(text[i]) > -1) {
            origAnalize[alphabet.indexOf(text[i])]++;
        }
    }
    for (let i = 0; i < entext.length; i++) {
        if (alphabet.indexOf(entext[i]) > -1) {
            ciphAnalize[alphabet.indexOf(entext[i])]++;
        }
    }
    origAn.innerHTML = '';
    ciphAn.innerHTML = '';

    for (let i = 0; i < alphabet.length; i++) {
        origAn.innerHTML += alphabet[i] + ': ' + origAnalize[i] + '<br>';
        ciphAn.innerHTML += alphabet[i] + ': ' + ciphAnalize[i] + '<br>';
    }

}

function decrypt1() {
    let text = originalText.value.toLocaleLowerCase();
    let entext = '';


    var time = performance.now();

    for (let j = 0; j < s; j++) {
        for (let i = 0; i < k; i++) {
            let element = text[i * s + j];
            if (element) {
                entext += element;
            } else {
                entext += '.';
            }

        }

    }

    time = performance.now() - time;
    alert(time + ' мс');

    ciphertext.value = entext;

}

let key1 = 'аляксандр';
let key2 = 'канцэвич';
let key1n = [0, 4, 8, 3, 7, 1, 5, 2, 6];
let key2n = [3, 0, 4, 5, 7, 1, 2, 6];

let table = [];
for (let i = 0; i < key1.length; i++) {
    table[i] = [];
}

let entable = [];
for (let i = 0; i < key1.length; i++) {
    entable[i] = [];
}

function crypt2() {
    let text = originalText.value.toLocaleLowerCase();
    let entext = '';
    var time = performance.now();

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            if (text[key1.length * i + j]) {
                table[i][j] = text[key2.length * i + j];
            }
        }
    }

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            entable[i][j] = table[key1n.indexOf(i)][key2n.indexOf(j)];
        }
    }

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            entext += entable[i][j];
        }
    }

    // entext = entext.split('').reverse().join('');;

    time = performance.now() - time;
    alert(time + ' мс');

    ciphertext.value = entext;

    //Анализ
    let origAnalize = [];
    let ciphAnalize = [];
    for (let i = 0; i < alphabet.length; i++) {
        origAnalize[i] = 0;
        ciphAnalize[i] = 0;
    }
    for (let i = 0; i < text.length; i++) {
        if (alphabet.indexOf(text[i]) > -1) {
            origAnalize[alphabet.indexOf(text[i])]++;
        }
    }
    for (let i = 0; i < entext.length; i++) {
        if (alphabet.indexOf(entext[i]) > -1) {
            ciphAnalize[alphabet.indexOf(entext[i])]++;
        }
    }
    origAn.innerHTML = '';
    ciphAn.innerHTML = '';

    for (let i = 0; i < alphabet.length; i++) {
        origAn.innerHTML += alphabet[i] + ': ' + origAnalize[i] + '<br>';
        ciphAn.innerHTML += alphabet[i] + ': ' + ciphAnalize[i] + '<br>';
    }

}

function decrypt2() {
    let text = originalText.value.toLocaleLowerCase();
    let entext = '';
    var time = performance.now();

    // text = text.split('').reverse().join('');

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            if (text[key2.length * i + j]) {
                table[i][j] = text[key2.length * i + j];
            }
        }
    }

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            entable[i][j] = table[key1n[i]][key2n[j]];
        }
    }

    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            entext += entable[i][j];
        }
    }


    time = performance.now() - time;
    alert(time + ' мс');

    ciphertext.value = entext;
}