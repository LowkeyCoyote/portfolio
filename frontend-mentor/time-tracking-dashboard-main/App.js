const typeDate = document.querySelectorAll('.date')
const currentTime = document.querySelectorAll(".current");
const previousTime = document.querySelectorAll(".previous");
const daily = typeDate[0];
const weekly = typeDate[1];
const monthly = typeDate[2];

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        daily.addEventListener("click", function () {
            for (let i = 0; i < data.length; i++) {
                if (data[i].timeframes.daily.current === 1) {
                    currentTime[i].innerHTML = data[i].timeframes.daily.current + "hr";
                } else {
                    currentTime[i].innerHTML = data[i].timeframes.daily.current + "hrs";
                }
                if (data[i].timeframes.daily.previous === 1) {
                    previousTime[i].innerHTML = "Previous - " + data[i].timeframes.daily.previous + " hr";
                } else {
                    previousTime[i].innerHTML = "Previous - " + data[i].timeframes.daily.previous + " hrs";
                }
            }
        })

        weekly.addEventListener("click", function () {
            for (let i = 0; i < data.length; i++) {
                currentTime[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
                previousTime[i].innerHTML = "Previous - " + data[i].timeframes.weekly.previous + " Hrs";
            }
        })

        monthly.addEventListener("click", function () {
            for (let i = 0; i < data.length; i++) {
                currentTime[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
                previousTime[i].innerHTML = "Previous - " + data[i].timeframes.monthly.previous + " Hrs";
            }
        })
    })


daily.addEventListener('click', () => {
    typeDate.forEach(ele => {
        if (ele.classList.contains('daily')) {
            ele.classList.add('active');
        } else {
            ele.classList.remove('active')
        }
    })
})

monthly.addEventListener('click', () => {
    typeDate.forEach(ele => {
        if (ele.classList.contains('monthly')) {
            ele.classList.add('active');
        } else {
            ele.classList.remove('active')
        }
    })
})

weekly.addEventListener('click', () => {
    typeDate.forEach(ele => {
        if (ele.classList.contains('weekly')) {
            ele.classList.add('active');
        } else {
            ele.classList.remove('active')
        }
    })
})











