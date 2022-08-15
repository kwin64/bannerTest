export function dataParseBody(data) {
  console.log(data);
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
      <div class="monthly">
        <div class="monthly__img">
            <img src="img/shape-1.svg" alt="" />
        </div>
            <span class='monthly__title'>
                ${data["Monthly"]}
            </span>
            <span class='monthly__price'>
                ${data[`<strong>{{price}}</strong><br>per month`]}
            </span>
            <div class='monthly__info'>
                ${data[`3 DAYS FREE`]}
            </div>
      </div>
      <div class="annualy">
        <div class="annualy__img">
            <img  src="img/shape-2.svg" alt="" />
        </div>
            <span class='annually__title'>
                ${data["Annually"]}
            </span>
        <div class="discount">
            ${data["-83%"]}
        </div>
      </div>
    </div>
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
