export function dataParseBody(data) {
  window.addEventListener("load", function () {
    const monthlyStyle = document.getElementById("monthlyStyle");
    const annualyStyle = document.getElementById("annualyStyle");
    const btnContinueHandler = document.getElementById("btnContinueHandler");
    const windowSize = document.getElementById("windowSize");
    let link;

    monthlyStyle.addEventListener("click", () => {
      if (monthlyStyle.className === " active") {
        monthlyStyle.className.replace("monthly");
        btnContinueHandler.setAttribute("disabled", "");
      } else {
        monthlyStyle.className.replace(" active");
        link = "https://apple.com/";
        btnContinueHandler.removeAttribute("disabled");
      }
    });

    annualyStyle.addEventListener("click", () => {
      if (annualyStyle.className === " active") {
        annualyStyle.className.replace("annualy");
        btnContinueHandler.setAttribute("disabled", "");
      } else {
        annualyStyle.className.replace(" active");
        link = "https://google.com/";
        btnContinueHandler.removeAttribute("disabled");
      }
    });

    btnContinueHandler.addEventListener("click", () => {
      document.location.href = link;
    });

    function displayWindowSize() {
      let currentWidthWindow = document.documentElement.clientWidth;
      let size = currentWidthWindow * 0.08;
      windowSize.style.fontSize = `${size}px`;
    }

    window.addEventListener("resize", displayWindowSize);

    displayWindowSize();
  });

  let html = (document.getElementById("htmlBody").innerHTML = `
    <div id='windowSize' class="banner__body banner-body">
        <div class="banner-body__content">
            <div class="banner-body__title">
                <span class="title">
                    ${data["Unlimited Access<br>to All Features"]}
                </span>
            </div>
            <div class="banner-body__items">
                <div class="banner-body__item">
                    <img
                        class="banner-body__item__img"
                        src='img/unlimitedDocs.svg'
                        alt=""
                    />
                    <span class="banner-body__item__description">
                        ${data["Unlimited documents"]}
                    </span>
                </div>
                <div class="banner-body__item">
                    <img class="banner-body__item__img" 
                        src="img/export.svg" alt="" 
                    />
                    <span class="banner-body__item__description">
                            ${data["Count mode"]}
                    </span>
                </div>
                <div class="banner-body__item">
                    <img class="banner-body__item__img" src="img/noAds.svg" alt="" />
                        <span class="banner-body__item__description">
                            ${data["Text recognition (OCR)"]}
                        </span>
                </div>
            </div>
    </div>
    <div class="banner-body__subscription">
      <div id='monthlyStyle' class="monthly">
            <div class="subscriptionImg">
                <img src="img/shape-1.svg" alt="" />
            </div>
            <span class='subscriptionTitle'>
                ${data["Monthly"]}
            </span>
            <span class='subscriptionPrice'>
                ${data[`<strong>{{price}}</strong><br>per month`]
                  .replace(`{{price}}`, `$9.99`)
                  .replace(
                    `per month`,
                    `<div class='fontInfoPrice'>per month</div>`
                  )}
            </span>
            <div class='subscriptionInfo'>
                ${data[`3 DAYS FREE`]}
            </div>
            <span class='subscriptionSecondPrice'>
                ${data[`{{price}}/month`].replace("{{price}}", "$9.99")}
            </span>
      </div>
      <div id='annualyStyle' class="annualy">
            <div class="subscriptionImg">
                <img  src="img/shape-2.svg" alt="" />
            </div>
            <div class="discount">
                ${data["-83%"]}
            </div>
            <span class='subscriptionTitle'>
                ${data["Annually"]}
            </span>
            <span class='subscriptionPrice'>
                ${data[`<strong>{{price}}</strong><br>per year`]
                  .replace(`{{price}}`, `$19.99`)
                  .replace(
                    `per month`,
                    `<div class='fontInfoPrice'>per year</div>`
                  )}
            </span>
            <div class='subscriptionInfo'>
                ${data[`MOST POPULAR`]}
            </div>
            <span class='subscriptionSecondPrice'>
                ${data[`{{price}}/month`].replace("{{price}}", "$1.99")}
            </span>
      </div>
    </div>
    <button class='banner-body__btnContinue' disabled id='btnContinueHandler'>
        ${data[`Continue`]}
    </button>
  </div>
                `);
  return html;
}

export function dataParseHeader(data) {
  let html = (document.getElementById("htmlHeader").innerHTML = `
  <div class="banner__header banner-header">
        <div class="banner-header__close">
            <a class="banner-header__link" href='#'>
                <span class="close"></span>
            </a>
        </div>
        <div class="banner-header__restore">
            <a class="banner-header__link" href='#'>
                <span class="restore">
                    ${data["Restore"]}
                </span>
            </a>
        </div>
        </div>
                  `);
  return html;
}

export function dataParseFooter(data) {
  let html = (document.getElementById("htmlFooter").innerHTML = `
    
    <div class="banner__footer banner-footer">
    <span class='banner-footer_notification'>
        ${data["Auto-renewable. Cancel anytime."]}
    </span>
         <div class='banner-footer_links'>
            <a class='' href='#'>
                ${data["Terms of Use"]}
            </a>
            <a class='' href='#'>
                ${data["Privacy Policy"]}
            </a>
         </div
    </div>
                    `);
  return html;
}
