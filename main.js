/**
 * Bai 1
 */

var isLeapYear = function(year){
    if((year % 4 == 0 && year % 100 ==0) || year % 400 == 0){
        return true;
    }
    return false;
}

var calculatingDaysOfMonth = function(month, year){
    var numOfDays;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numOfDays = 30;
            break;
        case 2: 
            if(isLeapYear(year)){
                numOfDays = 29;
            } else{
                numOfDays = 28;
            }
             break;   
        default: 'This is not suitable!'
    }
    return numOfDays;
}
var re = calculatingDaysOfMonth(02,2020);
console.log(re);

var findPreviousDay = function(day, month, year){
    var tempPre = "";
    if(day == 1){
        day = calculatingDaysOfMonth(month, year);
        if(month == 1){
            month = 12;
            year--;
        }else{
            month--;
        }
    }else{
        day--;
    }
     return temp = day + "/" + month + "/" + year
}

var findAfterDay = function(day, month, year){
    var tempAfter = "";
     if(day < calculatingDaysOfMonth(month, year)){
        day++;
    } else if(month<12){
        day=1;
        month++;
    }else{
        day= month =1;
        year++
    }
    return tempAfter = day + '/' + month + '/' + year
}


var resultCheck = document.getElementById('resultCheck');
document.getElementById('btnCheck').addEventListener('click', function(){
    var ipDay = parseInt(document.getElementById('ipDay').value);
    var ipMonth = parseInt (document.getElementById('ipMonth').value);
    var ipYear = parseInt(document.getElementById('ipYear').value);
    var resultPre = findPreviousDay(ipDay, ipMonth, ipYear);
    var resultAfter = findAfterDay(ipDay, ipMonth, ipYear);
    
    resultCheck.style.display = 'block';
    resultCheck.innerHTML = 'Tomorrow is: ' + resultAfter + '<br> ' + 'Yesterday is: ' + resultPre; 
    
});
    
/**
 * Bài 2:
 *- Input: month, year
 *- Handle:
 * B1: Khai báo biến: month, year
 * B2:: Viết hàm kiểm tra năm nhuần
 *      - if((year % 4 == 0 && year % 100 ==0) || year % 400 == 0){
        return true;
    }
    return false;
 * B3: Viết hàm đếm số ngày trong tháng
 *      - Nếu tháng = 1, 3, 5, 7 , 8, 10, 12 --> có 31 ngày
 *      - Nếu tháng = 4, 6, 9, 11 ---> có 30 ngày
 *      - Nếu tháng 2:
 *          + Nếu là năm nhuần ---> có 29 ngày
 *          + Ngược lại có 28 ngày
 * -Output: số ngày trong tháng
 * 
 */
var resultCount = document.getElementById('resultCount');
document.getElementById('btnCount').addEventListener('click', function(){
    var ipMonth2 = parseInt(document.getElementById('ipMonth2').value);
    var ipYear2 =  parseInt(document.getElementById('ipYear2').value);
 
    var resultDay = calculatingDaysOfMonth(ipMonth2, ipYear2);
    //hàm calculatingDaysOfMonth nhận vào 2 tham số kiểu int, còn document.getElementById('ipMonth2').value là string
    //nên khi truyền vô 2 ts ipMonth vs ipYear kiêu string bị lỗi
    //muốn phân biệt string hay int thì coi 2 cái console.log, 1 cái k parseInt, 1 cái có
    //khi console nó ra chữ màu xanh là int, màu đen là string
    resultCount.style.display = 'block';
    resultCount.innerHTML = 'Number of days in month ' + ipMonth2 + ' is: ' + resultDay;
});

/**
 * Bài 3:
 */
 var inRaCachDoc = function(soCoBaChuSo){
    var tmp;
    if(soCoBaChuSo <100 || soCoBaChuSo > 999){
        alert('Vui lòng nhập vào số có 3 chữ số!');
    }else{
        var donVi = Math.round(soCoBaChuSo % 10);
        soCoBaChuSo/= 10;
        var chuc = Math.round(soCoBaChuSo%10);
        var tram =Math.round(soCoBaChuSo/10);
        if(tram == 1){
            console.log('Một');
        } else if(tram == 2){
            console.log('Hai');
        } else if(tram == 3){
            console.log('Ba')
        } else if(tram == 4){
            console.log('Bốn');
        } else if(tram == 5){
            console.log('Năm')
        } else if(tram == 6){
            console.log('Sáu');
        } else if(tram == 7){
            console.log('Bảy');
        } else if(tram == 8){
            console.log('Tám');
        } else if(tram == 9){
            console.log('Chín');
        }
        console.log('Trăm');

        if(chuc == 2){
            console.log('Hai');
        } else if(chuc == 3){
            console.log('Ba');
        } else if(chuc == 4){
            console.log('Bốn');
        } else if(chuc == 5){
            console.log('Năm');
        } else if(chuc == 6){
            console.log('Sáu');
        } else if(chuc == 7){
            console.log('Bảy');
        }else if(chuc == 8){
            console.log('Tám');
        } else if(chuc == 9){
            console.log('Chín');
        }
        console.log('Mươi');

        if(donVi == 1){
            console.log('Một');
        } else if(donVi == 2){
            console.log('Hai');
        } else if(donVi == 3){
            console.log('Ba');
        } else if(donVi == 4){
            console.log('Bốn');
        } else if(donVi == 5){
            console.log('Năm');
        } else if(donVi == 6){
            console.log('Sáu');
        } else if(donVi == 7){
            console.log('Bảy');
        } else if(donVi == 8){
            console.log('Tám');
        }else if(donVi == 9){
            console.log('Chín');
        } 
    } 
    return tmp = tram + ' Trăm ' + chuc + ' Mươi ' + donVi;

};

document.getElementById('btnRead').addEventListener('click', function(){
    var ipNumber = document.getElementById('ipNumber').value;
    var result = inRaCachDoc(ipNumber);
    
    var resultRead = document.getElementById('resultRead');
    resultRead.style.display = 'block';
    resultRead.innerHTML = ipNumber + 'đọc là: ' + result;
})
