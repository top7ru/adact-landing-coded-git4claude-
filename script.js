window.vehicleCatalog = {
  BMW: {
    "3 Series (G20)": {
      "320i 2.0T 184": {
        stockHp: 184,
        tunedHp: 260,
        stockNm: 300,
        tunedNm: 410,
        stage: "Stage 1",
        note: "Плотный прирост по тяге и отклику без агрессивного сценария. Хороший вариант для ежедневной езды по городу и трассе.",
        efficiency: 91,
      },
      "330i 2.0T 258": {
        stockHp: 258,
        tunedHp: 320,
        stockNm: 400,
        tunedNm: 500,
        stage: "Stage 1",
        note: "Турбо-конфигурация охотнее тянет с середины диапазона и дает более собранный отклик без нервозной подачи.",
        efficiency: 93,
      },
    },
    "X5 (G05)": {
      "30d 3.0D 249": {
        stockHp: 249,
        tunedHp: 320,
        stockNm: 620,
        tunedNm: 720,
        stage: "Stage 1 diesel",
        note: "Сильнее всего ощущается тяга с низких оборотов и более легкий разгон тяжелого кузова при обгонах.",
        efficiency: 89,
      },
    },
  },
  Audi: {
    A4: {
      "2.0 TFSI 190": {
        stockHp: 190,
        tunedHp: 252,
        stockNm: 320,
        tunedNm: 400,
        stage: "Stage 1",
        note: "Безопасная настройка под городской режим и трассу с более живой педалью газа и плотным разгоном.",
        efficiency: 88,
      },
    },
    Q7: {
      "3.0 TDI 249": {
        stockHp: 249,
        tunedHp: 315,
        stockNm: 600,
        tunedNm: 700,
        stage: "Stage 1 diesel",
        note: "Большой крутящий момент приходит раньше, и машина ощущается заметно легче без постоянного кикдауна.",
        efficiency: 90,
      },
    },
  },
  Volkswagen: {
    Tiguan: {
      "2.0 TSI 180": {
        stockHp: 180,
        tunedHp: 245,
        stockNm: 320,
        tunedNm: 410,
        stage: "Stage 1",
        note: "Комфортный прирост для повседневной машины: без дерганья, но с уверенным ускорением после 60 км/ч.",
        efficiency: 87,
      },
    },
    Touareg: {
      "3.0 TDI 249": {
        stockHp: 249,
        tunedHp: 310,
        stockNm: 600,
        tunedNm: 700,
        stage: "Stage 1 diesel",
        note: "Сильная дизельная тяга под нагрузкой и спокойные обгоны на трассе без постоянного перехода в кикдаун.",
        efficiency: 89,
      },
    },
  },
  Toyota: {
    LandCruiser: {
      "2.8D 204": {
        stockHp: 204,
        tunedHp: 265,
        stockNm: 500,
        tunedNm: 620,
        stage: "Stage 1 diesel",
        note: "Даем эластичность под тяжелую машину и тяговые режимы без перегруза по температурам и ресурсу.",
        efficiency: 86,
      },
    },
  },
};

window.benefits = [
  {
    title: "Быстрый разгон и отклик",
    description:
      "Автомобиль острее реагирует на педаль газа, легче ускоряется с низких оборотов и увереннее идет на обгон.",
  },
  {
    title: "Плавная работа коробки",
    description:
      "Снижается ощущение затянутости и рывков при переключениях, машина едет ровнее и предсказуемее.",
  },
  {
    title: "Снижение расхода в спокойной езде",
    description:
      "При корректной настройке и обычном режиме движения мотору проще тянуть машину без лишнего напряжения.",
  },
  {
    title: "Устранение ошибок экосистем",
    description:
      "Для типовых задач по EGR, DPF, катализатору и AdBlue заранее понятен маршрут решения и состав работ.",
  },
];

window.painPoints = [
  {
    title: "Машина не едет",
    description: "Слабая динамика, вялый отклик и ощущение, что мотору тяжело тянуть кузов.",
  },
  {
    title: "Дергается коробка",
    description: "Пинки, затяжные переключения и дискомфорт в городе при обычной езде.",
  },
  {
    title: "Засорился катализатор / DPF",
    description: "Потеря мощности, аварийный режим и риск попасть на дорогой ремонт.",
  },
  {
    title: "Ошибки EGR / AdBlue",
    description: "Постоянные ошибки на приборной панели и ограничения по режимам работы.",
  },
  {
    title: "Дорогой ремонт на горизонте",
    description: "Нужно понять, где поможет настройка, а где сначала важнее диагностика и техническое состояние.",
  },
];

window.trustCards = [
  {
    theme: "dark",
    value: { number: 500000, suffix: "+" },
    label: "автомобилей в накопленном опыте сети ADACT по разным маркам и конфигурациям",
  },
  {
    theme: "accent",
    value: { number: 10, suffix: " дней" },
    label: "на проверку результата, чтобы прошивка подтверждалась не только на словах",
  },
  {
    theme: "default",
    value: "Диагностика",
    label: "входная проверка автомобиля до начала работ, а не прошивка вслепую по шаблону",
  },
  {
    theme: "default",
    value: "ГОСТ и ISO",
    label: "сертификация процессов и инженерный подход, который понятен клиенту и команде",
  },
];

window.safetyCards = [
  {
    title: "Проверено на десятках тысяч авто",
    description:
      "Опираемся на накопленный опыт по массовым и сложным конфигурациям, а не на разовые эксперименты.",
  },
  {
    title: "Ресурс не снижается",
    description:
      "Калибровка строится в безопасных допусках с учетом нагрузки, топлива, температуры и реальной эксплуатации.",
  },
  {
    title: "Диагностика до работ",
    description:
      "Сначала проверяем ошибки, состояние систем и ограничения по блоку управления, потом берем машину в работу.",
  },
  {
    title: "Можно вернуть сток",
    description:
      "Если по задаче требуется возврат к заводской конфигурации, заранее обсуждаем условия и техническую возможность.",
  },
];

window.powerGains = [
  {
    title: "Атмосферные двигатели",
    description: "Небольшой, но ощутимый прирост мощности и более живой отклик.",
    value: "+5-7%",
    progress: 38,
  },
  {
    title: "Турбо бензин",
    description: "Заметное улучшение динамики, тяги в середине диапазона и реакции на газ.",
    value: "+10-15%",
    progress: 66,
  },
  {
    title: "Турбо дизель",
    description: "Максимальный прирост по моменту и более легкое ускорение под нагрузкой.",
    value: "+15-25%",
    progress: 100,
  },
];

window.priceItems = [
  { label: "Чип-тюнинг атмосферных бензиновых авто", price: "от 5 499 ₽" },
  { label: "Чип-тюнинг турбо бензина Stage 1", price: "от 7 990 ₽" },
  { label: "Чип-тюнинг турбо дизеля Stage 1", price: "от 8 990 ₽" },
  { label: "Прошивка АКПП / DSG по совместимости", price: "от 6 990 ₽" },
  { label: "Сложные блоки и индивидуальные кейсы", price: "от 14 990 ₽" },
  { label: "Комбинированные задачи по экологии", price: "по согласованию" },
];

window.includedInPrice = [
  "Полная диагностика автомобиля перед началом работ.",
  "Подбор оптимальной прошивки под мотор, блок и задачи владельца.",
  "Запись калибровки в ЭБУ и проверка корректности работы систем.",
  "Рекомендации по тестовой эксплуатации после визита.",
  "Гарантийные условия и понятный маршрут дальнейших действий.",
];

window.addOnServices = [
  { title: "Отключение EGR", price: "от 2 000 ₽" },
  { title: "Отключение DPF", price: "от 3 000 ₽" },
  { title: "Отключение катализатора", price: "от 2 500 ₽" },
];

window.testimonials = [
  {
    name: "Алексей П.",
    car: "BMW X5 30d",
    quote:
      "До прошивки машина была тяжелой на подхват, особенно после 80 км/ч. После настройки стало проще обгонять и ехать в горку без ощущения, что мотору тяжело.",
    hp: 71,
    nm: 100,
  },
  {
    name: "Дмитрий К.",
    car: "Volkswagen Tiguan 2.0 TSI",
    quote:
      "Ушла вялость педали, коробка стала вести себя спокойнее, а разгон стал ровным. Получился не нервный спорт, а нормальная уверенная езда каждый день.",
    hp: 65,
    nm: 90,
  },
  {
    name: "Игорь М.",
    car: "Toyota Land Cruiser 2.8D",
    quote:
      "Приезжал с запросом на тягу и понятное решение без риска для мотора. Все объяснили по делу, после настройки машина стала заметно легче под нагрузкой.",
    hp: 61,
    nm: 120,
  },
];

const brandSelect = document.querySelector("#brand-select");
const modelSelect = document.querySelector("#model-select");
const engineSelect = document.querySelector("#engine-select");
const resultTitle = document.querySelector("#result-title");
const resultStage = document.querySelector("#result-stage");
const resultNote = document.querySelector("#result-note");
const efficiencyNode = document.querySelector("#result-efficiency");
const segmentGauge = document.querySelector("#segment-gauge");
const pricingList = document.querySelector("#pricing-list");
const includedList = document.querySelector("#included-list");
const addonsGrid = document.querySelector("#addons-grid");
const reviewsGrid = document.querySelector("#reviews-grid");
const benefitGrid = document.querySelector("#benefit-grid");
const painGrid = document.querySelector("#pain-grid");
const trustGrid = document.querySelector("#trust-grid");
const safetyGrid = document.querySelector("#safety-grid");
const powerGrid = document.querySelector("#power-grid");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const leadForm = document.querySelector("#lead-form");
const nameInput = document.querySelector("#lead-name");
const phoneInput = document.querySelector("#lead-phone");
const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const formStatus = document.querySelector("#form-status");
const stockHpNode = document.querySelector("#stock-hp");
const tunedHpNode = document.querySelector("#tuned-hp");
const stockNmNode = document.querySelector("#stock-nm");
const tunedNmNode = document.querySelector("#tuned-nm");
const gainHpNode = document.querySelector("#gain-hp");
const gainNmNode = document.querySelector("#gain-nm");
const stockHpBar = document.querySelector("#stock-hp-bar");
const tunedHpBar = document.querySelector("#tuned-hp-bar");
const stockNmBar = document.querySelector("#stock-nm-bar");
const tunedNmBar = document.querySelector("#tuned-nm-bar");

function populateSelect(select, values) {
  select.innerHTML = values
    .map((value) => `<option value="${value}">${value}</option>`)
    .join("");
}

function currentVehicle() {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const engine = engineSelect.value;
  return window.vehicleCatalog[brand][model][engine];
}

function updateModels() {
  const brand = brandSelect.value;
  const models = Object.keys(window.vehicleCatalog[brand]);
  populateSelect(modelSelect, models);
  updateEngines();
}

function updateEngines() {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const engines = Object.keys(window.vehicleCatalog[brand][model]);
  populateSelect(engineSelect, engines);
  updateResults();
}

function updateGaugeSegments(efficiency) {
  segmentGauge.innerHTML = "";
  const activeSegments = Math.max(1, Math.round(efficiency / 10));
  for (let index = 0; index < 10; index += 1) {
    const segment = document.createElement("span");
    if (index < activeSegments) {
      segment.classList.add("is-active");
    }
    segmentGauge.appendChild(segment);
  }
}

function setBarWidths(values) {
  const hpMax = Math.max(values.stockHp, values.tunedHp);
  const nmMax = Math.max(values.stockNm, values.tunedNm);
  stockHpBar.style.width = `${(values.stockHp / hpMax) * 100}%`;
  tunedHpBar.style.width = `${(values.tunedHp / hpMax) * 100}%`;
  stockNmBar.style.width = `${(values.stockNm / nmMax) * 100}%`;
  tunedNmBar.style.width = `${(values.tunedNm / nmMax) * 100}%`;
}

function updateResults() {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const engine = engineSelect.value;
  const values = currentVehicle();
  const gainHp = values.tunedHp - values.stockHp;
  const gainNm = values.tunedNm - values.stockNm;

  resultTitle.textContent = `${brand} ${model}`;
  resultStage.textContent = values.stage;
  resultNote.textContent = values.note;
  efficiencyNode.textContent = `${values.efficiency}%`;
  stockHpNode.textContent = values.stockHp;
  tunedHpNode.textContent = values.tunedHp;
  stockNmNode.textContent = values.stockNm;
  tunedNmNode.textContent = values.tunedNm;
  gainHpNode.textContent = `+${gainHp} HP`;
  gainNmNode.textContent = `+${gainNm} Нм`;
  updateGaugeSegments(values.efficiency);
  setBarWidths(values);

  resultTitle.setAttribute("data-engine", engine);
}

function initVehicleSelector() {
  if (!brandSelect || !modelSelect || !engineSelect) {
    return;
  }

  const brands = Object.keys(window.vehicleCatalog);
  populateSelect(brandSelect, brands);
  updateModels();
  brandSelect.addEventListener("change", updateModels);
  modelSelect.addEventListener("change", updateEngines);
  engineSelect.addEventListener("change", updateResults);
}

function renderBenefits() {
  if (!benefitGrid) {
    return;
  }

  benefitGrid.innerHTML = window.benefits
    .map(
      (item, index) => `
        <article class="advantage-card">
          <div class="advantage-index">${String(index + 1).padStart(2, "0")}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderStoryCards(items, container, prefix) {
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item, index) => `
        <article class="story-card">
          <div class="story-card-top">
            <span class="story-card-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="story-card-kicker">${prefix}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderTrustCards() {
  if (!trustGrid) {
    return;
  }

  trustGrid.innerHTML = window.trustCards
    .map((item) => {
      const themeClass =
        item.theme === "dark"
          ? " proof-card-dark"
          : item.theme === "accent"
            ? " proof-card-accent"
            : "";
      const valueMarkup =
        typeof item.value === "string"
          ? item.value
          : `<span data-counter="${item.value.number}" data-suffix="${item.value.suffix}">${item.value.number.toLocaleString(
              "ru-RU"
            )}${item.value.suffix}</span>`;

      return `
        <article class="proof-card${themeClass}">
          <div class="proof-value">${valueMarkup}</div>
          <p>${item.label}</p>
        </article>
      `;
    })
    .join("");
}

function renderPowerGains() {
  if (!powerGrid) {
    return;
  }

  powerGrid.innerHTML = window.powerGains
    .map(
      (item) => `
        <article class="power-card">
          <div class="power-card-head">
            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
            <div class="power-value">
              <strong>${item.value}</strong>
              <span>прирост мощности</span>
            </div>
          </div>
          <div class="power-track" aria-hidden="true">
            <span class="power-fill" style="width: ${item.progress}%"></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPricing() {
  if (pricingList) {
    pricingList.innerHTML = window.priceItems
      .map(
        (item) => `
          <article class="pricing-row">
            <span>${item.label}</span>
            <strong>${item.price}</strong>
          </article>
        `
      )
      .join("");
  }

  if (includedList) {
    includedList.innerHTML = window.includedInPrice
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function renderAddons() {
  if (!addonsGrid) {
    return;
  }

  addonsGrid.innerHTML = window.addOnServices
    .map(
      (item) => `
        <article class="addon-card">
          <span>${item.title}</span>
          <strong>${item.price}</strong>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  if (!reviewsGrid) {
    return;
  }

  reviewsGrid.innerHTML = window.testimonials
    .map(
      (item) => `
        <article class="review-card">
          <header>
            <div>
              <h3>${item.name}</h3>
              <div class="review-car">${item.car}</div>
            </div>
            <div class="review-badge">Verified</div>
          </header>
          <blockquote>«${item.quote}»</blockquote>
          <div class="review-mini-graph" aria-hidden="true"></div>
          <div class="review-metrics">
            <div>
              <strong>+${item.hp}</strong>
              <span>HP</span>
            </div>
            <div>
              <strong>+${item.nm}</strong>
              <span>Нм</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function initMenu() {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", targetId);
    });
  });
}

function validateForm() {
  let valid = true;
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.replace(/[^\d+]/g, "");

  nameError.textContent = "";
  phoneError.textContent = "";
  formStatus.textContent = "";
  formStatus.classList.remove("is-success");

  if (nameValue.length < 2) {
    nameError.textContent = "Введите имя, чтобы мы понимали, как к вам обращаться.";
    valid = false;
  }

  if (phoneValue.length < 11) {
    phoneError.textContent = "Нужен телефон, чтобы согласовать визит и подтвердить конфигурацию.";
    valid = false;
  }

  return valid;
}

function initLeadForm() {
  if (!leadForm) {
    return;
  }

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    formStatus.textContent =
      "Заявка принята. Свяжемся с вами по Воронежу, уточним конфигурацию и предложим удобное время визита.";
    formStatus.classList.add("is-success");
    leadForm.reset();
  });
}

function animateCounters() {
  const duration = 1200;
  document.querySelectorAll("[data-counter]").forEach((node) => {
    const target = Number(node.dataset.counter);
    const suffix = node.dataset.suffix ?? "";
    const prefix = node.dataset.prefix ?? "";
    const start = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(target * progress);
      node.textContent = `${prefix}${current.toLocaleString("ru-RU")}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
}

function initObserver() {
  const proofSection = document.querySelector("#trust");
  if (!proofSection) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    animateCounters();
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(proofSection);
}

function init() {
  renderBenefits();
  renderStoryCards(window.painPoints, painGrid, "Trigger");
  renderTrustCards();
  renderStoryCards(window.safetyCards, safetyGrid, "Safety");
  renderPowerGains();
  renderPricing();
  renderAddons();
  renderTestimonials();
  initVehicleSelector();
  initMenu();
  initSmoothAnchors();
  initLeadForm();
  initObserver();
}

document.addEventListener("DOMContentLoaded", init);
