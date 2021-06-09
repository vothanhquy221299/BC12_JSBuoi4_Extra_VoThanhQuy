/**
 * Bai 1
 */

var isLeapYear = function (year) {
    if ((year % 4 == 0 && year % 100 == 0) || year % 400 == 0) {
        return true;
    }
    return false;
}

var calculatingDaysOfMonth = function (month, year) {
    var numOfDays;
    switch (month) {
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
            if (isLeapYear(year)) {
                numOfDays = 29;
            } else {
                numOfDays = 28;
            }
            break;
        default: 'This is not suitable!'
    }
    return numOfDays;
}

var findPreviousDay = function (day, month, year) {
    var tempPre = "";
    if (day == 1) {
        day = calculatingDaysOfMonth(month, year);
        if (month == 1) {
            month = 12;
            year--;
        } else {
            month--;
        }
    } else {
        day--;
    }
    return temp = day + "/" + month + "/" + year
}

var findAfterDay = function (day, month, year) {
    var tempAfter = "";
    if (day < calculatingDaysOfMonth(month, year)) {
        day++;
    } else if (month < 12) {
        day = 1;
        month++;
    } else {
        day = month = 1;
        year++
    }
    return tempAfter = day + '/' + month + '/' + year
}


var resultCheck = document.getElementById('resultCheck');
document.getElementById('btnCheck').addEventListener('click', function () {
    var ipDay = parseInt(document.getElementById('ipDay').value);
    var ipMonth = parseInt(document.getElementById('ipMonth').value);
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
document.getElementById('btnCount').addEventListener('click', function () {
    var ipMonth2 = parseInt(document.getElementById('ipMonth2').value);
    var ipYear2 = parseInt(document.getElementById('ipYear2').value);

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
var hangTram = function (soCoBaChuSo) { 
    var tmpTram = '';
    soCoBaChuSo /= 10;
    switch (Math.round(soCoBaChuSo / 10)) {
        case 0:
            tmpTram = 'Không Trăm';
            break;
        case 1:
            tmpTram = 'Một Trăm';
            break;
        case 2:
            tmpTram = 'Hai Trăm';
            break;
        case 3:
            tmpTram = 'Ba Trăm';
            break;
        case 4:
            tmpTram = 'Bốn Trăm';
            break;
        case 5:
            tmpTram = 'Năm Trăm';
            break;
        case 6:
            tmpTram = 'Sáu Trăm';
            break;
        case 7:
            tmpTram = 'Bảy Trăm';
            break;
        case 8:
            tmpTram = 'Tám Trăm';
            break;
        case 9:
            tmpTram = 'Chín Trăm';
            break;
    }
    return tmpTram;
};

var hangChuc = function (soCoBaChuSo) {
    var tmpChuc = '';
    soCoBaChuSo /= 10;
    switch (Math.round(soCoBaChuSo % 10)) {
        case 0:
            tmpChuc = 'Ling';
            break;
        case 1:
           tmpChuc = 'Mươi';
            break;
        case 2:
            tmpChuc = 'Hai Mươi';
            break;
        case 3:
            tmpChuc = 'Ba Mươi';
            break;
        case 4:
            tmpChuc = 'Bốn Mươi';
            break;
        case 5:
            tmpChuc = 'Năm Mươi';
            break;
        case 6:
            tmpChuc = 'Sáu Mươi';
            break;
        case 7:
            tmpChuc = 'Bảy Mươi';
            break;
        case 8:
            tmpChuc = 'Tám Mươi';
            break;
        case 9:
            tmpChuc = 'Chín Mươi';
            break;
    }
    return tmpChuc;
};

var hangDonVi = function (soCoBaChuSo) {
    var tmpDonVi = '';
    switch (Math.round(soCoBaChuSo % 10)) {
        case 0:
            tmpDonVi = 'Không';
            break;
        case 1:
            tmpDonVi = 'Một';
            break;
        case 2:
            tmpDonVi = 'Hai';
            break;
        case 3:
            tmpDonVi = 'Ba';
            break;
        case 4:
            tmpDonVi = 'Bốn';
            break;
        case 5:
            tmpDonVi = 'Năm';
            break;
        case 6:
            tmpDonVi = 'Sáu';
            break;
        case 7:
            tmpDonVi = 'Bảy';
            break;
        case 8:
            tmpDonVi = 'Tám';
            break;
        case 9:
            tmpDonVi = 'Chín';
            break;
    }
    return tmpDonVi;
};

document.getElementById('btnRead').addEventListener('click', function () {
    var ipNumber = document.getElementById('ipNumber').value;
    var tram = hangTram(ipNumber);
    var chuc = hangChuc(ipNumber);
    var donVi = hangDonVi(ipNumber);
    if(ipNumber<100 && ipNumber>999){
        alert('Nhập vào số có 3 chữ số!');
    }else{
    var resultRead = document.getElementById('resultRead');
    resultRead.style.display = 'block';
    resultRead.innerHTML = ipNumber + ' đọc là: ' + ' ' +tram + ' ' +chuc + ' ' +donVi;
    }
});

/**
 *
 *
 */
