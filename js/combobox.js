/**
 * Hàm đóng mở combobox
 * AUTHOR: DDDuong (09/12/2022)
 */
const combobox1 = function () {
  try {
    $(".dialog-el-13").css("position", "static");
    $(".dialog-el-9-list").toggle();
    $(".dialog-el-11-list").hide();
    $(".dialog-el-13-list").hide();
  } catch (error) {
    console.log("error");
  }
};
const combobox2 = function () {
  try {
    $(".dialog-el-13").css("position", "static");
    $(".dialog-el-11-list").toggle();
    $(".dialog-el-9-list").hide();
    $(".dialog-el-13-list").hide();
  } catch (error) {
    console.log("error");
  }
};
const combobox3 = function () {
  try {
    $(".dialog-el-13").css("position", "relative");

    $(".dialog-el-13-list").toggle();
    $(".dialog-el-9-list").hide();
    $(".dialog-el-11-list").hide();
  } catch (error) {
    console.log("error");
  }
};
/**
 * Hàm chọn select trong combobox
 * AUTHOR: DDDuong (12/12/2022)
 */
const selectCombobox1 = function () {
  try {
    for (const option of document.querySelectorAll(".dialog-el-9-list-item")) {
      option.addEventListener("click", function () {
        document.querySelector(
          ".dialog-el-9-select"
        ).innerHTML = `<span class="">${option.textContent}</span>
        <img
        src="../../assets/Icons/ic_Chevron.png"
        width="25"
        height="25"
      />
           `;

        $(".dialog-el-9-list").hide();
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const selectCombobox2 = function () {
  try {
    for (const option of document.querySelectorAll(".dialog-el-11-list-item")) {
      option.addEventListener("click", function () {
        $(".dialog-el-11-select-content-first").remove();
        //Chọn thì thêm 1 div vào dialog-el-11-select-content

        $(
          ".dialog-el-11-select-content"
        ).append(` <div style=" font-size: 12px; padding: 0 4px 0 4px; border-radius: 4px ; background-color: var(--backgound-color)  ;" class="">${option.textContent}</div>
        
             `);
        // Hiển thị check box active khi select
        this.innerHTML = `<img
        src="../../assets/Icons/ic_Checkbox_Active.png"
        width="25"
        height="25"
      />
      <span class="">${option.textContent}</span>
                `;
        $(".dialog-el-11-list").hide();
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const selectCombobox3 = function () {
  try {
    for (const option of document.querySelectorAll(".dialog-el-13-list-item")) {
      option.addEventListener("click", function () {
        $(".dialog-el-13-select-content-first").remove();
        //Chọn thì thêm 1 div vào dialog-el-11-select-content

        $(
          ".dialog-el-13-select-content"
        ).append(` <div style=" font-size: 12px; padding: 0 4px 0 4px; border-radius: 4px ; background-color: var(--backgound-color)  ;" class="">${option.textContent}</div>
          
               `);
        // Hiển thị check box active khi select
        this.innerHTML = `<img
          src="../../assets/Icons/ic_Checkbox_Active.png"
          width="25"
          height="25"
        />
        <span class="">${option.textContent}</span>
                  `;
        $(".dialog-el-13-list").hide();
      });
    }
  } catch (error) {
    console.log(error);
  }
};
$(".dialog-el-9-select").click(combobox1);
$(".dialog-el-11-select").click(combobox2);
$(".dialog-el-13-select").click(combobox3);
selectCombobox1();
selectCombobox2();
selectCombobox3();
