// "use strict";

// GOI API LAY DU LIEU
$.ajax({
  type: "GET",
  url: "https://amis.manhnv.net/api/v1/Employees",
  success(respone) {
    console.log(respone);
    for (const emp of respone) {
      const employeeCode = emp.EmployeeCode;
      const employeeName = emp.EmployeeName;
      const employeePhone = emp.TelephoneNumber;
      const employeeDepartment = emp.DepartmentName;
      const trHTML = `<tr>
        <td class="text-align-center"><input type="checkbox" /></td>
        <td class="text-align-center">${employeeCode || ""}</td>
        <td class="text-align-left">${employeeName || ""}</td>
        <td class="text-align-center">${employeePhone || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td class="text-align-center">
          <img
            src="../../assets/Icons/ic_Check.png"
            width="25"
            height="25"
          />
        </td>
        <td class="text-align-center">
          <img
            src="../../assets/Icons/ic_Check.png"
            width="25"
            height="25"
          />
        </td>
        <td class="text-align-center">
          <img class='cursor-pointer'
            src="../../assets/Icons/ic_Edit.png"
            width="25"
            height="25"
          />
          <img class='cursor-pointer'
            src="../../assets/Icons/ic_Remove.png"
            width="25"
            height="25"
          />
        </td>
      </tr>`;
      $("#tb-employee-list").append(trHTML);
    }
  },
  error(error) {
    console.log(error);
  },
});
/**
 * Hàm  mở dialog
 * AUTHOR: DDDuong (09/12/2022)
 */
const showDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "flex";
    // Lấy mã nhân viên mới
    $.ajax({
      type: "GET",
      url: "https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode",
      success: function (response) {
        $("#txtEmployeeCode").val(response);
      },
      success(error) {
        console.log(error);
      },
    });

    //forcus vào ô nhập liệu đầu tiên
    $("#txtEmployeeCode").focus();
  } catch (error) {
    console.log("error");
  }
};
/**
 * Hàm  đóng dialog
 * AUTHOR: DDDuong (09/12/2022)
 */
const closeDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "none";
  } catch (error) {
    console.log("error");
  }
};

/**
 * Lập trình cho các sự kiện
 * AUTHOR: DDDuong (08/12/2022)
 */
const createEvent = function () {
  try {
    $(".content-header-add").click(showDialog);
    $(".dialog-close-button").click(closeDialog);
    $(".dialog-button-close").click(closeDialog);
    $("#dialog-button-save").click(bntSaveOnClick);
    $(".toast-message-close").click(bntCloseErrorMessage);
    $("#txtEmployeeCode").blur(onValidateFieldRequired1);
    $("#txtEmployeeName").blur(onValidateFieldRequired2);
  } catch (error) {
    console.log("error");
  }
};
/**
 * Hàm khi điền xong thì cho ô input dialog trở về bình thường
 * AUTHOR: DDDuong (11/12/2022)
 */
const onValidateFieldRequired1 = function () {
  try {
    const value = $("#txtEmployeeCode").val();
    if (!value) {
      $("#txtEmployeeCode").addClass("input-error");
    } else {
      $("#txtEmployeeCode").removeClass("input-error");
      $(".dialog-el-2-error").hide();
      $("#txtEmployeeCode").hover(function () {
        $(".dialog-el-2-error").hide();
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const onValidateFieldRequired2 = function () {
  try {
    const value = $("#txtEmployeeName").val();
    if (!value) {
      $("#txtEmployeeName").addClass("input-error");
    } else {
      $("#txtEmployeeName").removeClass("input-error");
      $(".dialog-el-0-error").hide();
      $("#txtEmployeeName").hover(function () {
        $(".dialog-el-0-error").hide();
      });
    }
  } catch (error) {
    console.log(error);
  }
};
//Hàm để hover vào input là show ra lỗi không nhập số hiệu và họ tên
const showError1 = function () {
  try {
    $(".dialog-el-2-error").toggle();
    $(".dialog-el-0").css("position", "static");
    $(".dialog-el-2").css("position", "relative");
  } catch (error) {
    console.log(error);
  }
};
const showError2 = function () {
  try {
    $(".dialog-el-0-error").toggle();
    $(".dialog-el-0").css("position", "relative");
    $(".dialog-el-2").css("position", "static");
  } catch (error) {
    console.log(error);
  }
};
/**
 * Đóng thông báo lỗi khi nhập sai thông tin cán bộ
 * AUTHOR: DDDuong (10/12/2022)
 */
const bntCloseErrorMessage = function () {
  try {
    $(".toast-message-container").hide();

    if (errorFocus.length > 0) {
      errorFocus[0].focus();
    }
  } catch (error) {
    console.log("error");
  }
};
/**
 * save dữ liệu
 * AUTHOR: DDDuong (09/12/2022)
 */
const bntSaveOnClick = function () {
  try {
    //1.Thu thập dữ liệu trên form
    const employeeCode = $("#txtEmployeeCode").val();
    const employeeName = $("#txtEmployeeName").val();
    const mobie = $("#txtEmployeeMobie").val();
    const email = $("#txtEmployeeEmail").val();
    let errorMsgs = [];
    errorFocus = [];

    //2.kiểm tra dữ liệu

    //-Dữ liệu bắt buộc đã nhập chưa
    if (!employeeCode) {
      errorMsgs.push("Số hiệu cán bộ không được phép để trống");
      $("#txtEmployeeCode").addClass("input-error");
      errorFocus.push($("#txtEmployeeCode"));
      $("#txtEmployeeCode").hover(showError1);
    } else {
      $("#txtEmployeeCode").removeClass("input-error");
    }
    if (!employeeName) {
      errorMsgs.push("Họ và tên không được phép để trống");
      $("#txtEmployeeName").addClass("input-error");
      errorFocus.push($("#txtEmployeeName"));
      $("#txtEmployeeName").hover(showError2);
    } else {
      $("#txtEmployeeName").removeClass("input-error");
    }
    //Clear error message
    document.querySelector(".toast-message-content").innerHTML = "";
    //-Kiểm tra errorMsgs xem có lỗi không
    if (errorMsgs.length > 0) {
      // Nếu có lỗi thì hiển thị ra dialog báo lỗi
      for (const errMsg of errorMsgs) {
        $(".toast-message-content").append(`<div >${errMsg}</div>`);
      }
      $(".toast-message-container").css("display", "flex");
    } else {
      $.ajax({
        type: "POST",
        url: "https://amis.manhnv.net/api/v1/Employees",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          employeeCode: `${employeeCode}`,
          employeeName: `${employeeName}`,
          email: `${email}`,
          telephoneNumber: `${mobie}`,
          departmentId: "142cb08f-7c31-21fa-8e90-67245e8b283e",
        }),
        success() {
          alert("succes");
        },
        error(error) {
          console.log(error);
        },
      });
    }

    //3. gọi API save dữ liệu
    //4. Xử lí thông tin từ API trả về
  } catch (error) {
    console.log("error");
  }
};
createEvent();
