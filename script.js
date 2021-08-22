const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const clock = setInterval(
    function time(){
        const date_now = new Date();
        const hr = date_now.getHours();
        const min = date_now.getMinutes();
        const sec = date_now.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        }
        else if(min < 10){
            min = "0" + min;
        }
        else if(sec < 10){
            sec = "0" + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
    },1000
)