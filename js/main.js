(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
 
        /* Sidebar Buttons */
        $(".btn-sidebar-user").click(function () {
            $('.op-black').toggleClass("hide").toggleClass("show");
            $('body').toggleClass("hidden-scroll");
            $('.sidebar-user').toggleClass("active");
            $('.bottom-navbar').toggleClass("d-none");
        });
        $(".btn-sidebar-menu").click(function () {
            $('.op-black').toggleClass("hide").toggleClass("show");
            $('body').toggleClass("hidden-scroll");
            $('.sidebar-menu').toggleClass("active");
            $('.bottom-navbar').toggleClass("d-none");
        });
        $(".op-black").click(function () {
            $('.op-black').toggleClass("hide").toggleClass("show");
            if ( $(".sidebar-user").is(".active")){
                $('.sidebar-user').toggleClass("active");
                $('body').toggleClass("hidden-scroll");
                $('.bottom-navbar').toggleClass("d-none");
            }
            if ( $(".sidebar-menu").is(".active")){
                $('.sidebar-menu').toggleClass("active");
                $('body').toggleClass("hidden-scroll");
                $('.bottom-navbar').toggleClass("d-none");
            }
        });
    
/*Header Sabitleme*/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
      $('header.desktop').addClass('fixed');
     }
     else {
      $('header.desktop').removeClass('fixed');
     }
  });
  /*Header Sabitleme Son*/

  $(".bottom-navbar .category-menu").click(function () {
    $('.op-black').toggleClass("hide").toggleClass("show");
    $('body').toggleClass("hidden-scroll");
    $('.sidebar-menu').toggleClass("active");
});

    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
  
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-regular fa-eye-slash');
    
  });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);
// Header Fixed

const fixedClass = $("header.desktop");
const fixedClassHeight = 190

$(window).scroll(function() {
    if ($(window).scrollTop() > fixedClassHeight) {
        fixedClass.addClass("fixed");
        $('.special-campaign').hide();
    } else {
        fixedClass.removeClass("fixed");
        $('.special-campaign').show();
    }
});


/* Footer Menü Toogle */
function mobileFooterToggle(cls1){
    if ($(document).width() < 991) {
          $('.f'+cls1).toggle()
    }
}




    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });



/*pagination*/



const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }



/*pagination son*/








// /*SORTTABLE*/
// let tablesortElement = document.querySelectorAll('#table');

//  if(tablesortElement){
//     tablesortElement=Array.isArray(tablesortElement)? tablesortElement:Object.values(tablesortElement);

//     tablesortElement.forEach(tablesortElement=> {
//      let tbheadcells=tablesortElement.querySelectorAll('thead>tr>*');
//       if(tbheadcells) {
//         tbheadcells=Array.from(tbheadcells);
//         tbheadcells.forEach((tbheadcells,index)=>{
//             tbheadcells.addEventListener('click',function(){
//                 this.classList.toggle('asc');
//                 sorttable (tablesortElement,index,!this.classList.contains('asc'));
//             })
    
//         })
//       }
//     })
//  }

//  function sorttable (table,column,desc=false){
//   let tbody=table.querySelector('tbody'),rows=tbody.querySelectorAll('tr');
//   rows=rows.isArray?rows:Object.values(rows);
//   function compare(a,b){
//     let atext=a.childiren[column].innerText.trim(),btext=b.childiren[column].innerText.trim;
//     return(atext<btext)?-1:1;
//   }
//   rows.sort(compare);
//   if(desc) rows.reverse();
//   tbody.innerHtml='';
//   let i=0;
//   while(i<rows.length){
//    tbody.appendChild(rows[i]);
//    i++;
//   }
//  }

/*SORTTABLE*/


    
// const passwordField = document.getElementById("password");
// const togglePassword = document.querySelector(".password-toggle-icon i");

// togglePassword.addEventListener("click", function () {
//   if (passwordField.type === "password") {
//     passwordField.type = "text";
//     togglePassword.classList.remove("fa-eye");
//     togglePassword.classList.add("fa-eye-slash");
//   } else {
//     passwordField.type = "password";
//     togglePassword.classList.remove("fa-eye-slash");
//     togglePassword.classList.add("fa-eye");
//   }
// });

/*Product Right Itemler*/
// var show_righttabcontent_item_heading = false;
//  $(".right-tab-content .item .heading").click(function () 
//      {
//        if (show_righttabcontent_item_heading){
//          $(this).find('i').removeClass("fa-chevron-up").addClass("fa-chevron-down");
//          $(this).closest('.item').removeClass('active');   
//        }
//       else{
//       $(this).find('i').removeClass("fa-chevron-down").addClass("fa-chevron-up");
//       $(this).closest('.item').addClass('active');
//           }
//   show_righttabcontent_item_heading = !show_righttabcontent_item_heading;
//  });

/*Product Right Itemler Son*/
  })})