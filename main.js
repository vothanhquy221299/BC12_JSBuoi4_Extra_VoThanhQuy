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
 * B??i 2:
 *- Input: month, year
 *- Handle:
 * B1: Khai b??o bi???n: month, year
 * B2:: Vi???t h??m ki???m tra n??m nhu???n
 *      - if((year % 4 == 0 && year % 100 ==0) || year % 400 == 0){
        return true;
    }
    return false;
 * B3: Vi???t h??m ?????m s??? ng??y trong th??ng
 *      - N???u th??ng = 1, 3, 5, 7 , 8, 10, 12 --> c?? 31 ng??y
 *      - N???u th??ng = 4, 6, 9, 11 ---> c?? 30 ng??y
 *      - N???u th??ng 2:
 *          + N???u l?? n??m nhu???n ---> c?? 29 ng??y
 *          + Ng?????c l???i c?? 28 ng??y
 * -Output: s??? ng??y trong th??ng
 * 
 */
var resultCount = document.getElementById('resultCount');
document.getElementById('btnCount').addEventListener('click', function () {
    var ipMonth2 = parseInt(document.getElementById('ipMonth2').value);
    var ipYear2 = parseInt(document.getElementById('ipYear2').value);

    var resultDay = calculatingDaysOfMonth(ipMonth2, ipYear2);
    //h??m calculatingDaysOfMonth nh???n v??o 2 tham s??? ki???u int, c??n document.getElementById('ipMonth2').value l?? string
    //n??n khi truy???n v?? 2 ts ipMonth vs ipYear ki??u string b??? l???i
    //mu???n ph??n bi???t string hay int th?? coi 2 c??i console.log, 1 c??i k parseInt, 1 c??i c??
    //khi console n?? ra ch??? m??u xanh l?? int, m??u ??en l?? string
    resultCount.style.display = 'block';
    resultCount.innerHTML = 'Number of days in month ' + ipMonth2 + ' is: ' + resultDay;
});

/**
 * B??i 3:
 */
var hangTram = function (soCoBaChuSo) {
    var tmpTram = '';
    soCoBaChuSo /= 10;
    switch (Math.round(soCoBaChuSo / 10)) {
        case 0:
            tmpTram = 'Kh??ng Tr??m';
            break;
        case 1:
            tmpTram = 'M???t Tr??m';
            break;
        case 2:
            tmpTram = 'Hai Tr??m';
            break;
        case 3:
            tmpTram = 'Ba Tr??m';
            break;
        case 4:
            tmpTram = 'B???n Tr??m';
            break;
        case 5:
            tmpTram = 'N??m Tr??m';
            break;
        case 6:
            tmpTram = 'S??u Tr??m';
            break;
        case 7:
            tmpTram = 'B???y Tr??m';
            break;
        case 8:
            tmpTram = 'T??m Tr??m';
            break;
        case 9:
            tmpTram = 'Ch??n Tr??m';
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
            tmpChuc = 'M????i';
            break;
        case 2:
            tmpChuc = 'Hai M????i';
            break;
        case 3:
            tmpChuc = 'Ba M????i';
            break;
        case 4:
            tmpChuc = 'B???n M????i';
            break;
        case 5:
            tmpChuc = 'N??m M????i';
            break;
        case 6:
            tmpChuc = 'S??u M????i';
            break;
        case 7:
            tmpChuc = 'B???y M????i';
            break;
        case 8:
            tmpChuc = 'T??m M????i';
            break;
        case 9:
            tmpChuc = 'Ch??n M????i';
            break;
    }
    return tmpChuc;
};

var hangDonVi = function (soCoBaChuSo) {
    var tmpDonVi = '';
    switch (Math.round(soCoBaChuSo % 10)) {
        case 0:
            tmpDonVi = 'Kh??ng';
            break;
        case 1:
            tmpDonVi = 'M???t';
            break;
        case 2:
            tmpDonVi = 'Hai';
            break;
        case 3:
            tmpDonVi = 'Ba';
            break;
        case 4:
            tmpDonVi = 'B???n';
            break;
        case 5:
            tmpDonVi = 'N??m';
            break;
        case 6:
            tmpDonVi = 'S??u';
            break;
        case 7:
            tmpDonVi = 'B???y';
            break;
        case 8:
            tmpDonVi = 'T??m';
            break;
        case 9:
            tmpDonVi = 'Ch??n';
            break;
    }
    return tmpDonVi;
};

document.getElementById('btnRead').addEventListener('click', function () {
    var ipNumber = document.getElementById('ipNumber').value;
    var tram = hangTram(ipNumber);
    var chuc = hangChuc(ipNumber);
    var donVi = hangDonVi(ipNumber);
    if (ipNumber < 100 && ipNumber > 999) {
        alert('Nh???p v??o s??? c?? 3 ch??? s???!');
    } else {
        var resultRead = document.getElementById('resultRead');
        resultRead.style.display = 'block';
        resultRead.innerHTML = ipNumber + ' ?????c l??: ' + ' ' + tram + ' ' + chuc + ' ' + donVi;
    }
});

/**
 *B??i 4:
 *
 */
var toaDo = function (x, y) {
    console.log(x + ',' + y);
}
var tinhKhoangCach = function (x, y) {
    var khoangCach = 0;
    khoangCach = Math.sqrt((0 - x) * (0 - x) + (0 - y) * (0 - y));
    return khoangCach;
}
document.getElementById('btnDistance').addEventListener('click', function () {
    var x1 = parseInt(document.getElementById('ipX1').value);
    var y1 = parseInt(document.getElementById('ipY1').value);
    var x2 = parseInt(document.getElementById('ipX2').value);
    var y2 = parseInt(document.getElementById('ipY2').value);
    var x3 = parseInt(document.getElementById('ipX3').value);
    var y3 = parseInt(document.getElementById('ipY3').value);

    var resultDistance = document.getElementById('resultDistance');

    var khoangCachXaNhat = function () {
        var maxDistance = 0;
        var listToaDo = [tinhKhoangCach(x1, y1), tinhKhoangCach(x2, y2), tinhKhoangCach(x3, y3)];
        for (var i = 0; i < listToaDo.length; i++) {

            if (listToaDo[i] > maxDistance) {
                maxDistance = listToaDo[i];
            }
        }
        return maxDistance;
    }


    var ketQuaXaNhat = khoangCachXaNhat();
    console.log(ketQuaXaNhat);
    var msg = "";
    if (ketQuaXaNhat == tinhKhoangCach(x1, y1)) {
        msg = 'T???a ????? A l?? xa tr?????ng nh???t';
    } else if (ketQuaXaNhat == tinhKhoangCach(x2, y2)) {
        msg = 'T???a ????? B l?? xa tr?????ng nh???t';

    } else if (ketQuaXaNhat == tinhKhoangCach(x3, y3)) {
        msg = 'T???a ????? C l?? xa tr?????ng nh???t';
    }
    resultDistance.style.display = 'block';
    resultDistance.innerHTML = msg;

})