document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("dildosContainer");
  const loadingMessage = document.getElementById("loadingMessage");

  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => {
      loadingMessage.style.display = "none"; // Hide loading message once data is ready

      // ✅ Correct loop over stores
      ["Vuxen.se", "Mshop.se"].forEach((store) => {
        const sectionHeader = document.createElement("h4");
        sectionHeader.textContent = store;
        container.appendChild(sectionHeader);

        const listWrapper = document.createElement("div");
        listWrapper.id = "dildosList";

        const products = data[store];
        if (!products) {
          console.warn(`⚠️ No products found for store: ${store}`);
          return;
        }

        products.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "dildo-Item";

          itemDiv.innerHTML = `
            <a href="${item.link}" target="_blank">
              <p>${item.price}</p>
              <img src="${item.img}" width="100" height="100" />
            </a>
          `;
          listWrapper.appendChild(itemDiv);
        });

        container.appendChild(listWrapper);
      });

      // ✅ Render deals
      const dealsHeader = document.createElement("h4");
      dealsHeader.textContent = "DEALS";
      container.appendChild(dealsHeader);

      const dealList = document.createElement("div");
      dealList.id = "dealList";

      data.deals.forEach((deal) => {
        const dealDiv = document.createElement("div");
        dealDiv.className = "deal-Item";

        dealDiv.innerHTML = `
          <a href="${deal.link}" target="_blank">
            <h4>${deal.text}</h4>
          </a>
        `;

        dealList.appendChild(dealDiv);
      });

      container.appendChild(dealList);
      container.classList.add("visible");
    })
    .catch((err) => {
      console.error("❌ Failed to load product data:", err);
      loadingMessage.textContent =
        "⚠️ Oops! Could not load products. Try refreshing the page.";
      loadingMessage.style.color = "red";
    });
});
