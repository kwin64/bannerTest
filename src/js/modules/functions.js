export function dataParseBody(data, language) {
  let priceHtml = "{{price}}/month".replace(`{{price}}`, 9);
  console.log(priceHtml);

  document.addEventListener("DOMContentLoaded", () => {
    const monthlyStyle = document.getElementById("monthlyStyle");
    const annualyStyle = document.getElementById("annualyStyle");
    const btnContinueHandler = document.getElementById("btnContinueHandler");
    let link;

    monthlyStyle.addEventListener("click", () => {
      if (monthlyStyle.className === " active") {
        monthlyStyle.className.replace("monthly");
      } else {
        monthlyStyle.className.replace(" active");
        link = "https://apple.com/";
      }
    });

    annualyStyle.addEventListener("click", () => {
      if (annualyStyle.className === " active") {
        annualyStyle.className.replace("annualy");
      } else {
        annualyStyle.className.replace(" active");
        link = "https://google.com/";
      }
    });

    btnContinueHandler.addEventListener("click", () => {
      console.log("click btn", link);
      document.location.href = link;
    });
  });

  let html = (document.getElementById("htmlBody").innerHTML = `
    <div class="banner__body banner-body">
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
            <span class='subscriptionTitle--lang--${language}'>
                ${data["Monthly"]}
            </span>
            <span class='subscriptionPrice--lang--${language}'>
                ${data[`<strong>{{price}}</strong><br>per month`].replace('{{price}}', 100)}
            </span>
            <div class='subscriptionInfo--lang--${language}'>
                ${data[`3 DAYS FREE`]}
            </div>
            <span class='subscriptionSecondPrice--lang--${language}'>
                ${data[`{{price}}/month`]}
            </span>
      </div>
      <div id='annualyStyle' class="annualy">
            <div class="subscriptionImg">
                <img  src="img/shape-2.svg" alt="" />
            </div>
            <div class="discount">
                ${data["-83%"]}
            </div>
            <span class='subscriptionTitle--lang--${language}'>
                ${data["Annually"]}
            </span>
            <span class='subscriptionPrice--lang--${language}'>
                ${data[`<strong>{{price}}</strong><br>per year`]}
            </span>
            <div class='subscriptionInfo--lang--${language}'>
                ${data[`MOST POPULAR`]}
            </div>
            <span class='subscriptionSecondPrice--lang--${language}'>
                ${data[`{{price}}/month`]}
            </span>
      </div>
    </div>
    <button class='banner-body__btnContinue' id='btnContinueHandler'>
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
            <a class="banner-header__link" href="">
                <span class="close"></span>
            </a>
        </div>
        <div class="banner-header__restore">
            <a class="banner-header__link" href="">
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
