const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sasaram';
let search = document.getElementById('search');
let input = document.getElementById('input');
let cloud_pct = document.getElementById('cloud_pct');
let humidity = document.getElementById('humidity');
let feels_like = document.getElementById('feels_like');
let windSpeed = document.getElementById('windSpeed');
let temperature = document.getElementById('temperature');
let img = document.getElementById('img');
let iconContainer = document.getElementById('iconContainer');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5835972da4msh8c6e741e6a76224p1c9f95jsn4861d5135420',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

search.addEventListener('click',searchInput);

function searchInput(e) {
    if (e) {
        e.preventDefault();
    }
    let city = input.value;
    document.getElementById('loading').style.display = 'block';
    img.style.display = 'none';
    document.getElementById('cityName').innerHTML = '';
    iconContainer.style.display = 'none';
    let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    async function fetchData() {
        try {
            const response = await fetch(url, options);
            const result = await response.json(); 

            console.log(result);
            document.getElementById('loading').style.display = 'none';
            img.style.display = 'block';
            iconContainer.style.display = 'block';
            city = "";
            document.getElementById('cityName').innerHTML = city;
            cloud_pct.innerHTML = result.cloud_pct;
            humidity.innerHTML = result.humidity;
            windSpeed.innerHTML = result.wind_speed;
            temperature.innerHTML = result.temp;

            if(result.cloud_pct > 50 ) return img.setAttribute('src','https://th.bing.com/th/id/OIP.W7QlInyIDfAni2x9P6pSagHaG3?rs=1&pid=ImgDetMain');
            else if(result.cloud_pct <= 20) return img.setAttribute('src','https://th.bing.com/th/id/OIP.AW1R8tC-fUdjNQwU_iqw1wHaEK?rs=1&pid=ImgDetMain');
            else if( result.temp == undefined) {
                img.setAttribute('src','https://th.bing.com/th/id/OIP.yYBFzWZ0R970KK2bJhwO9AHaEi?rs=1&pid=ImgDetMain');
                document.getElementById('iconContainer').innerHTML = "";
            } 
            //temperature
            if(result.temp <= 11) return img.setAttribute('src','https://th.bing.com/th/id/OIP.onVPev7Yp7ZnMVoRXdPzyAHaEo?rs=1&pid=ImgDetMain');
            else if(result.temp <= 0) return img.setAttribute('src','https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg')
            else if(result.temp >= 38){
                img.setAttribute('src','https://th.bing.com/th/id/OIP._FK-qUMjA_jDBg64duRrTgHaE8?rs=1&pid=ImgDetMain');
                document.getElementById('tempIcon').style.color = 'red';
        }

        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}
searchInput();
