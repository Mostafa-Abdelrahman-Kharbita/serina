document.getElementById("productsBtn").addEventListener("click", function() {
    const productsSection = document.getElementById("products");
    
    if (productsSection.style.display === "none") {
      productsSection.style.display = "block";
      productsSection.style.opacity = 0;
      // نبدأ تدريجياً في التلاشي ليصل لشفافية 1
      let op = 0;
      const timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        productsSection.style.opacity = op;
        op += 0.1;
      }, 50);
    }
  });

