document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("dildosContainer");
  const loadingMessage = document.getElementById("loadingMessage");

  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => {
      loadingMessage.style.display = "none";

      [
        "Dildos",
        "Anal",
        "Vibrators",
        "Fetish",
        "Accessories",
        "Clothes",
        "Extra Products",
        "Lovense",
      ].forEach((store) => {
        const listGroup = document.createElement("div");
        listGroup.className = "list-group";

        const listWrapper = document.createElement("div");
        listWrapper.className = "dildosList";

        const sectionHeader = document.createElement("h4");
        sectionHeader.textContent = store;
        sectionHeader.style.cursor = "pointer";
        sectionHeader.addEventListener("click", () => {
          const isOpen = listWrapper.classList.contains("opening");

          if (isOpen) {
            // Close
            listWrapper.classList.remove("scrollable");
            listWrapper.classList.remove("opening");
          } else {
            // Open
            listWrapper.classList.add("opening");

            setTimeout(() => {
              if (listWrapper.classList.contains("opening")) {
                listWrapper.classList.add("scrollable");
              }
            }, 600); // Match CSS transition duration
          }
        });

        listGroup.appendChild(sectionHeader);

        let products = data[store];
        if (!products) {
          console.warn(`⚠️ No products found for store: ${store}`);
          return;
        }

        // Sort products by numeric price ascending
        products = products.slice().sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d\.]/g, ""));
          const priceB = parseFloat(b.price.replace(/[^\d\.]/g, ""));
          return priceA - priceB;
        });

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

        listGroup.appendChild(listWrapper);
        container.appendChild(listGroup);
      });

      // Render deals
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
