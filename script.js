document.querySelector(".jars").addEventListener("click", function(event){
  event.preventDefault(); // يمنع الانتقال للرابط
  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.textContent = "Mystery Jar";
  cartItems.appendChild(li);
  alert("added to cart");
});
document.getElementById("order-form").addEventListener("submit", function(e){
  e.preventDefault();

  // عرض رسالة النجاح
  let msgDiv = document.getElementById("success-msg");
  msgDiv.style.display = "block";

  // اختفاء الرسالة بعد 3 ثواني
  setTimeout(() => {
    msgDiv.style.display = "none";

    // إعادة التوجيه للصفحة الرئيسية
    window.location.href = "index.html"; // غيري الرابط حسب اسم صفحتك الرئيسية

  }, 3000);

  // تنظيف السلة بعد الطلب
  cart = [];
  renderCart();
});
document.getElementById("buy-now-btn").addEventListener("click", function() {
  window.location.href = "shop.html";
});
