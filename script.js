const inputArea = document.getElementById('input-area');
const checkBtn = document.getElementById('check-button');
const result = document.getElementById('result');

const isSpam = (msg) => {

    const helpRegex = /Please help|assert me/i;
    const dollarRegex = /[0-9]+ (hundreds|thousand|million|billion)? dollars/i;
    const freeRegex = /(?:^|\s)free money(?:$|\s)/i;
    const stockRegex = /(?:^|\s)fr[e3][e3] st[0o@]ck(?:$|\s)/i;
    const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex];
    return denyList.some(regex => regex.test(msg));
}


    
checkBtn.addEventListener('click', () => {
    result.textContent = isSpam(inputArea.value) ? "OHoo! this is spam message" : "Wonderful no spam msg";
});  