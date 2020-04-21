$(document).ready(function (){
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=Zagreb,hr&units=imperial&APPID=f8312bc8248b9a672e702747793da827';
    $.getJSON(url, function (data) {
        console.log(data);
        var weathData1 = data.list[0].weather[0].description;
        var weathData2 = data.list[8].weather[0].description;
        var weathData3 = data.list[16].weather[0].description;
        var weathData4 = data.list[24].weather[0].description;
        var weathData5 = data.list[32].weather[0].description;
//can only do 5 days

        $('#date0').html(data.list[0].dt_txt);
        $('#weather0').html(weathData1);
        $('#temp0').html(data.list[0].main.temp + "&deg; F");

        $('#date1').html(data.list[8].dt_txt);
        $('#weather1').html(weathData2);
        $('#temp1').html(data.list[8].main.temp + "&deg; F");

        $('#date2').html(data.list[16].dt_txt);
        $('#weather2').html(weathData3);
        $('#temp2').html(data.list[16].main.temp + "&deg; F");

        $('#date3').html(data.list[24].dt_txt);
        $('#weather3').html(weathData4);
        $('#temp3').html(data.list[24].main.temp + "&deg; F");

        $('#date4').html(data.list[36].dt_txt);
        $('#weather4').html(weathData5);
        $('#temp4').html(data.list[36].main.temp + "&deg; F");

        var icon0 = document.createElement('img');
        var icon1 = document.createElement('img');
        var icon2 = document.createElement('img');
        var icon3 = document.createElement('img');
        var icon4 = document.createElement('img');

        switch(data.list[0].weather[0].main){
            case 'Clouds':
                icon0.src = 'images/cloud.png';
                icon0.style.height = '50px';
                icon0.style.width = '50px';
                $('#weatherIcon0').html(icon0);
                break;
            case 'Rain':
                icon0.src = 'images/rain.png';
                icon0.style.height = '50px';
                icon0.style.width = '50px';
                $('#weatherIcon0').html(icon0);
                break;
            case 'Clear':
                icon0.src = 'images/sun.png';
                icon0.style.height = '50px';
                icon0.style.width = '50px';
                $('#weatherIcon0').html(icon0);
                break;
            case 'Snow':
                icon0.src = 'images/snow.png';
                icon0.style.height = '50px';
                icon0.style.width = '50px';
                $('#weatherIcon0').html(icon0);
                break;
            
        }
        
        
        switch(data.list[8].weather[0].main){
            case 'Clouds':
                icon1.src = 'images/cloud.png';
                icon1.style.height = '50px';
                icon1.style.width = '50px';
                $('#weatherIcon1').html(icon1);
                break;
            case 'Rain':
                icon1.src = 'images/rain.png';
                icon1.style.height = '50px';
                icon1.style.width = '50px';
                $('#weatherIcon1').html(icon1);
                break;
            case 'Clear':
                icon1.src = 'images/sun.png';
                icon1.style.height = '50px';
                icon1.style.width = '50px';
                $('#weatherIcon1').html(icon1);
                break;
            case 'Snow':
                icon1.src = 'images/snow.png';
                icon1.style.height = '50px';
                icon1.style.width = '50px';
                $('#weatherIcon1').html(icon1);
                break;
            
        }

        switch(data.list[16].weather[0].main){
            case 'Clouds':
                icon2.src = 'images/cloud.png';
                icon2.style.height = '50px';
                icon2.style.width = '50px';
                $('#weatherIcon2').html(icon2);
                break;
            case 'Rain':
                icon2.src = 'images/rain.png';
                icon2.style.height = '50px';
                icon2.style.width = '50px';
                $('#weatherIcon2').html(icon2);
                break;
            case 'Clear':
                icon2.src = 'images/sun.png';
                icon2.style.height = '50px';
                icon2.style.width = '50px';
                $('#weatherIcon2').html(icon2);
                break;
            case 'Snow':
                icon2.src = 'images/snow.png';
                icon2.style.height = '50px';
                icon2.style.width = '50px';
                $('#weatherIcon2').html(icon2);
                break;
            
        }

        switch(data.list[24].weather[0].main){
            case 'Clouds':
                icon3.src = 'images/cloud.png';
                icon3.style.height = '50px';
                icon3.style.width = '50px';
                $('#weatherIcon3').html(icon3);
                break;
            case 'Rain':
                icon3.src = 'images/rain.png';
                icon3.style.height = '50px';
                icon3.style.width = '50px';
                $('#weatherIcon3').html(icon3);
                break;
            case 'Clear':
                icon3.src = 'images/sun.png';
                icon3.style.height = '50px';
                icon3.style.width = '50px';
                $('#weatherIcon3').html(icon3);
                break;
            case 'Snow':
                icon3.src = 'images/snow.png';
                icon3.style.height = '50px';
                icon3.style.width = '50px';
                $('#weatherIcon3').html(icon3);
                break;
            
        }

        switch(data.list[32].weather[0].main){
            case 'Clouds':
                icon4.src = 'images/cloud.png';
                icon4.style.height = '50px';
                icon4.style.width = '50px';
                $('#weatherIcon4').html(icon4);
                break;
            case 'Rain':
                icon4.src = 'images/rain.png';
                icon4.style.height = '50px';
                icon4.style.width = '50px';
                $('#weatherIcon4').html(icon4);
                break;
            case 'Clear':
                icon4.src = 'images/sun.png';
                icon4.style.height = '50px';
                icon4.style.width = '50px';
                $('#weatherIcon4').html(icon4);
                break;
            case 'Snow':
                icon4.src = 'images/snow.png';
                icon4.style.height = '50px';
                icon4.style.width = '50px';
                $('#weatherIcon4').html(icon4);
                break;
            
        }




    });
});