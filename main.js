// GrapX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

// GrapSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

// GrapBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRABX_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhTien").onclick = function () {
  var soKm = document.getElementById("txtNhapKm").value;
  var thoiGianCho = document.getElementById("txtThoiGianCho").value;

  var loaiXe = layLoaiXe();

  switch (loaiXe) {
    case "grabX":
      //Tính tiền grabX
      //   if (0 <= soKm && soKm <= 1) {
      //     tienKm_1 = tinhKm_1(soKm, GRABX_1);

      //     tongTien = tienKm_1 + tienCho;
      //     console.log(tongTien);
      //   } else if (1 < soKm && soKm <= 19) {
      //     tienKm_1 = tinhKm_1(1, GRABX_1);
      //     tienKm_2 = tinhKm_2(soKm, GRABX_2);

      //     tongTien = tienKm_1 + tienKm_2 + tienCho;
      //     console.log(tongTien);
      //   } else if (soKm > 19) {
      //     // tienKm_1 = 1 * GRABX_1;
      //     // tienKm_2 = (19 - 1) * GRABX_2;
      //     // tienKm_3 = (soKm - 19) * GRABX_3;
      //     tienKm_1 = tinhKm_1(1, GRABX_1);
      //     tienKm_2 = tinhKm_2(19, GRABX_2);
      //     tienKm_3 = tinhKm_3(soKm, GRABX_3);

      //     tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
      //     console.log(tongTien);
      //   }

      tinhTienChiTiet(soKm, thoiGianCho, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);

      break;
    case "grabSUV":
      //Tính tiền grabSUV
      tinhTienChiTiet(
        soKm,
        thoiGianCho,
        GRAB_SUV_WAIT,
        GRAB_SUV_1,
        GRAB_SUV_2,
        GRAB_SUV_3
      );

      break;
    case "grabBlack":
      //Tính tiền grabBlack
      tinhTienChiTiet(
        soKm,
        thoiGianCho,
        GRABX_BLACK_WAIT,
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3
      );

      break;

    default:
      alert("Vui Long Chon Loai Xe");
      break;
  }

  //   if(loaiXe === "grabX"){
  //       //Tính tiền grabX

  //   }else if(loaiXe === "grabSUV"){
  //       // Tính tiền grabSUV

  //   } else if(loaiXe === "grabBlack"){
  //     // Tính tiền grabBlack
  //In kết QUả
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
};

function layLoaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSuv = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";
  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSuv.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}
function tinhTienCho(thoiGianCho, giaCho) {
  var kq = 0;
  if (thoiGianCho >= 3) {
    kq = Math.floor(thoiGianCho / 3) * giaCho;
  }
  return kq;
}

function tinhKm_1(soKm, giaKm) {
  var kq = soKm * giaKm;
  return kq;
}

function tinhKm_2(soKm, giaKm) {
  var kq = (soKm - 1) * giaKm;
  return kq;
}

function tinhKm_3(soKm, giaKm) {
  var kq = (soKm - 19) * giaKm;
  return kq;
}

function tinhTienChiTiet(soKm, thoiGianCho, giaCho, giaKm_1, giaKm_2, giaKm_3) {
  tienCho = tinhTienCho(thoiGianCho, giaCho);
  if (0 <= soKm && soKm <= 1) {
    tienKm_1 = tinhKm_1(soKm, giaKm_1);

    tongTien = tienKm_1 + tienCho;
  } else if (1 < soKm && soKm <= 19) {
    tienKm_1 = tinhKm_1(1, giaKm_1);
    tienKm_2 = tinhKm_2(soKm, giaKm_2);

    tongTien = tienKm_1 + tienKm_2 + tienCho;
  } else if (soKm > 19) {
    // tienKm_1 = 1 * giaKm_1;
    // tienKm_2 = (19 - 1) * giaKm_2;
    // tienKm_3 = (soKm - 19) * giaKm_3;
    tienKm_1 = tinhKm_1(1, giaKm_1);
    tienKm_2 = tinhKm_2(19, giaKm_2);
    tienKm_3 = tinhKm_3(soKm, giaKm_3);

    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  }
}

document.getElementById("btnHoaDon").onclick = function () {
  var content = "";
  var loaiXe = layLoaiXe();
  var soKm = document.getElementById("txtNhapKm").value;
  var thoiGianCho = document.getElementById("txtThoiGianCho").value;

  switch (loaiXe) {
    case "grabX":
      if (0 < soKm && soKm <= 1) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + soKm + "</td>";
        content += "<td>" + GRABX_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (1 < soKm && soKm <= 19) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRABX_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + (soKm - 1) + "</td>";
        content += "<td>" + GRABX_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (19 < soKm) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRABX_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + "18" + "</td>";
        content += "<td>" + GRABX_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Trên 19 KM</td>";
        content += "<td>" + (soKm - 19) + "</td>";
        content += "<td>" + GRABX_3 + "</td>";
        content += "<td>" + tienKm_3 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      }
      break;
    case "grabSUV":
      if (0 < soKm && soKm <= 1) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + soKm + "</td>";
        content += "<td>" + GRAB_SUV_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRAB_SUV_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (1 < soKm && soKm <= 19) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRAB_SUV_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + (soKm - 1) + "</td>";
        content += "<td>" + GRAB_SUV_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRAB_SUV_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (19 < soKm) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRAB_SUV_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + "18" + "</td>";
        content += "<td>" + GRAB_SUV_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Trên 19 KM</td>";
        content += "<td>" + (soKm - 19) + "</td>";
        content += "<td>" + GRAB_SUV_3 + "</td>";
        content += "<td>" + tienKm_3 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRAB_SUV_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      }
      break;
    case "grabBlack":
      if (0 < soKm && soKm <= 1) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + soKm + "</td>";
        content += "<td>" + GRAB_BLACK_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_BLACK_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (1 < soKm && soKm <= 19) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRAB_BLACK_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + (soKm - 1) + "</td>";
        content += "<td>" + GRAB_BLACK_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_BLACK_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      } else if (19 < soKm) {
        content += "<tr>";
        content += "<td>KM Đầu Tiên</td>";
        content += "<td>" + "1 " + "</td>";
        content += "<td>" + GRAB_BLACK_1 + "</td>";
        content += "<td>" + tienKm_1 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Từ 1KM Đến 19KM</td>";
        content += "<td>" + "18" + "</td>";
        content += "<td>" + GRAB_BLACK_2 + "</td>";
        content += "<td>" + tienKm_2 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Trên 19 KM</td>";
        content += "<td>" + (soKm - 19) + "</td>";
        content += "<td>" + GRAB_BLACK_3 + "</td>";
        content += "<td>" + tienKm_3 + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Thời Gian Chờ</td>";
        content += "<td>" + thoiGianCho + "</td>";
        content += "<td>" + GRABX_BLACK_WAIT + "</td>";
        content += "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>Tổng Tiền</td>";
        content += "<td>" + tongTien + "</td>";
        content += "</tr>";
      }
      break;

    default:
      break;
  }

  document.getElementById("tbody").innerHTML = content;
};
