<script setup>
import { computed, ref } from "vue";

const donationAmounts = [
  {
    amount: 25,
    label: "School supplies",
    description: "Helps provide notebooks, pens, and classroom basics.",
  },
  {
    amount: 50,
    label: "Food support",
    description: "Supports nutritious food relief for a vulnerable family.",
  },
  {
    amount: 100,
    label: "Health outreach",
    description: "Helps cover wellness checks and practical care support.",
  },
  {
    amount: 250,
    label: "Community project",
    description: "Moves clean water, education, or relief work forward.",
  },
];

const donationMethods = [
  "One-time donation",
  "Monthly giving",
  "Corporate support",
  "In-kind gifts",
];

const selectedAmount = ref(donationAmounts[1].amount);
const customAmount = ref("");
const selectedMethod = ref(donationMethods[0]);

const activeAmount = computed(() => {
  const amount = Number(customAmount.value);
  return amount > 0 ? amount : selectedAmount.value;
});

const chooseAmount = (amount) => {
  selectedAmount.value = amount;
  customAmount.value = "";
};
</script>

<template>
  <section id="donate" class="donation-section" aria-labelledby="donation-title">
    <div class="donation-section__inner">
      <div class="donation-section__banner">
        <div class="donation-section__banner-copy">
          <p class="donation-section__eyebrow">His Grace Foundation</p>
          <h2 id="donation-title">Donations</h2>
          <p>
            Support the work with gifts that help us respond to urgent needs
            and long-term care.
          </p>
        </div>

        <div class="donation-section__banner-media">
          <img src="/images/real1.jpeg" alt="Children and families supported by donations" />
          <div class="donation-section__banner-card">
            <strong>${{ activeAmount }}</strong>
            <span>{{ selectedMethod }}</span>
          </div>
        </div>
      </div>

      <div class="donation-section__content">
        <div class="donation-section__panel">
          <div class="donation-section__panel-header">
            <p class="donation-section__eyebrow">Choose an amount</p>
            <h3>Support the work today</h3>
          </div>

          <div class="donation-section__amounts" aria-label="Donation amount options">
            <button
              v-for="item in donationAmounts"
              :key="item.amount"
              type="button"
              class="donation-section__amount"
              :class="{ 'donation-section__amount--active': selectedAmount === item.amount && !customAmount }"
              :aria-pressed="selectedAmount === item.amount && !customAmount"
              @click="chooseAmount(item.amount)"
            >
              <strong>${{ item.amount }}</strong>
              <span>{{ item.label }}</span>
            </button>
          </div>

          <label class="donation-section__custom">
            <span>Custom amount</span>
            <input
              v-model="customAmount"
              type="number"
              min="1"
              inputmode="numeric"
              placeholder="Enter amount"
            />
          </label>

          <div class="donation-section__methods" aria-label="Donation method options">
            <button
              v-for="method in donationMethods"
              :key="method"
              type="button"
              class="donation-section__method"
              :class="{ 'donation-section__method--active': selectedMethod === method }"
              :aria-pressed="selectedMethod === method"
              @click="selectedMethod = method"
            >
              {{ method }}
            </button>
          </div>

          <router-link class="donation-section__cta" to="/donations" aria-label="Proceed to complete your donation">
            <span>Continue to donate</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </router-link>
        </div>

        <div class="donation-section__impact">
          <p class="donation-section__eyebrow">Where your gift goes</p>
          <h3>Donations are directed toward care people can feel.</h3>

          <div class="donation-section__impact-list">
            <article
              v-for="item in donationAmounts"
              :key="item.label"
              class="donation-section__impact-item"
            >
              <span>${{ item.amount }}</span>
              <div>
                <h4>{{ item.label }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donation-section {
  padding: clamp(3rem, 5vw, 5rem) 1.5rem;
  background: linear-gradient(180deg, #fff8ef 0%, #fff 100%);
}

@media (max-width: 768px) {
  .donation-section {
    padding: clamp(2rem, 4vw, 3rem) 1rem;
  }
}

.donation-section__inner {
  max-width: 1160px;
  margin: 0 auto;
}

.donation-section__banner {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(320px, 0.72fr);
  overflow: hidden;
  margin-bottom: 1.15rem;
  background: #1f1f1f;
  border-radius: 0.5rem;
  box-shadow: 0 22px 54px rgba(18, 29, 27, 0.14);
}

@media (max-width: 768px) {
  .donation-section__banner {
    grid-template-columns: 1fr;
    min-height: 24rem;
    margin-bottom: 1rem;
  }
}

.donation-section__banner-copy {
  display: grid;
  align-content: center;
  gap: 1rem;
  padding: clamp(2rem, 5vw, 4.5rem);
  color: #fff;
}

@media (max-width: 768px) {
  .donation-section__banner-copy {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    padding: 2rem;
    z-index: 1;
  }
}

.donation-section__eyebrow {
  margin: 0 0 0.65rem;
  color: #ff5d23;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.donation-section__banner-copy .donation-section__eyebrow {
  color: #f0b62a;
}

.donation-section__banner-copy h2 {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(2.5rem, 6vw, 4.8rem);
  line-height: 0.98;
  letter-spacing: 0;
  font-weight: 900;
}

@media (max-width: 768px) {
  .donation-section__banner-copy h2 {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    max-width: 100%;
  }
}

.donation-section__banner-copy p:last-child {
  margin: 0;
  max-width: 40rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.02rem;
  line-height: 1.75;
}

.donation-section__banner-media {
  position: relative;
  min-height: 29rem;
  overflow: hidden;
}

.donation-section__banner-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.55));
}

.donation-section__banner-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 520ms ease;
}

.donation-section__banner:hover .donation-section__banner-media img {
  transform: scale(1.05);
}

.donation-section__banner-card {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 1;
  display: grid;
  gap: 0.15rem;
  min-width: 9.5rem;
  padding: 1rem;
  background: #fff;
  color: #202020;
  border-left: 0.35rem solid #f0b62a;
  box-shadow: 0 18px 34px rgba(18, 29, 27, 0.2);
}

.donation-section__banner-card strong {
  font-size: 2.35rem;
  line-height: 1;
  font-weight: 900;
}

.donation-section__banner-card span {
  color: #626262;
  font-size: 0.82rem;
  font-weight: 900;
}

.donation-section__content {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.72fr);
  gap: 1.15rem;
}

@media (max-width: 768px) {
  .donation-section__content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.donation-section__panel,
.donation-section__impact {
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.5rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.08);
}

.donation-section__panel {
  padding: 1.35rem;
}

.donation-section__panel-header h3,
.donation-section__impact h3 {
  margin: 0;
  color: #202020;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
  line-height: 1.12;
  letter-spacing: 0;
  font-weight: 900;
}

.donation-section__amounts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.25rem;
}

@media (max-width: 1024px) {
  .donation-section__amounts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .donation-section__amounts {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
}

.donation-section__amount {
  display: grid;
  gap: 0.3rem;
  min-height: 6.8rem;
  padding: 1rem;
  background: #fff8ef;
  color: #202020;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.donation-section__amount:hover {
  transform: translateY(-0.14rem);
  border-color: rgba(255, 93, 35, 0.32);
}

.donation-section__amount--active {
  background: #ff5d23;
  color: #fff;
  border-color: #ff5d23;
  box-shadow: 0 14px 28px rgba(255, 93, 35, 0.22);
}

.donation-section__amount strong {
  font-size: 1.55rem;
  line-height: 1;
  font-weight: 900;
}

.donation-section__amount span {
  font-size: 0.82rem;
  font-weight: 900;
  line-height: 1.35;
}

.donation-section__custom {
  display: grid;
  gap: 0.55rem;
  margin-top: 1rem;
  color: #202020;
  font-size: 0.9rem;
  font-weight: 900;
}

.donation-section__custom input {
  width: 100%;
  min-height: 3rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(31, 31, 31, 0.12);
  border-radius: 0.45rem;
  color: #202020;
  font: inherit;
  font-weight: 800;
  outline: none;
}

.donation-section__custom input:focus {
  border-color: #ff5d23;
  box-shadow: 0 0 0 0.2rem rgba(255, 93, 35, 0.12);
}

.donation-section__methods {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1rem;
}

.donation-section__method {
  min-height: 2.55rem;
  padding: 0.6rem 0.9rem;
  background: #fff;
  color: #4d4d4d;
  border: 1px solid rgba(31, 31, 31, 0.1);
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 900;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.donation-section__method--active {
  background: #1f1f1f;
  border-color: #1f1f1f;
  color: #fff;
}

.donation-section__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  min-height: 3rem;
  margin-top: 1.25rem;
  padding: 0.85rem 1.1rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 0.94rem;
  font-weight: 900;
  text-decoration: none;
  transition:
    all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.25);
}

.donation-section__cta:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #7d2be0 0%, #6a1fb8 100%);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.35);
}

.donation-section__cta svg {
  width: 1rem;
  height: 1rem;
}

.donation-section__impact {
  padding: 1.35rem;
}

.donation-section__impact-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.25rem;
}

.donation-section__impact-item {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1rem;
  background: #fff8ef;
  border-radius: 0.45rem;
}

.donation-section__impact-item > span {
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background: #f0b62a;
  color: #202020;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 900;
}

.donation-section__impact-item h4 {
  margin: 0;
  color: #202020;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 900;
}

.donation-section__impact-item p {
  margin: 0.35rem 0 0;
  color: #626262;
  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .donation-section__banner,
  .donation-section__content {
    grid-template-columns: 1fr;
    gap: 1.35rem;
  }

  .donation-section__banner-copy h2 {
    max-width: 100%;
    font-size: clamp(2.5rem, 6vw, 3.5rem);
  }

  .donation-section__banner-media {
    min-height: 24rem;
  }

  .donation-section__banner-card {
    right: 1.5rem;
    bottom: 1.5rem;
  }

  .donation-section__amounts {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .donation-section__amount {
    min-height: 6.5rem;
    padding: 0.95rem;
  }

  .donation-section__amount strong {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .donation-section {
    padding: 2.5rem 1.25rem;
  }

  .donation-section__banner {
    grid-template-columns: 1fr;
    margin-bottom: 1.2rem;
    border-radius: 8px;
  }

  .donation-section__banner-copy {
    padding: clamp(1.5rem, 4vw, 2.25rem);
  }

  .donation-section__banner-copy h2 {
    font-size: clamp(2.1rem, 6vw, 3rem);
    max-width: 100%;
    line-height: 1.05;
  }

  .donation-section__banner-copy p:last-child {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .donation-section__banner-media {
    min-height: 21rem;
  }

  .donation-section__banner-card {
    right: 1.2rem;
    bottom: 1.2rem;
  }

  .donation-section__banner-card strong {
    font-size: 1.95rem;
  }

  .donation-section__banner-card span {
    font-size: 0.8rem;
  }

  .donation-section__panel,
  .donation-section__impact {
    padding: 1.25rem;
    border-radius: 8px;
  }

  .donation-section__panel-header h3,
  .donation-section__impact h3 {
    font-size: clamp(1.4rem, 4vw, 2rem);
    margin-bottom: 0.3rem;
  }

  .donation-section__amounts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 1.1rem;
  }

  .donation-section__amount {
    min-height: 6rem;
    padding: 1rem;
    border-radius: 8px;
  }

  .donation-section__amount strong {
    font-size: 1.35rem;
  }

  .donation-section__amount span {
    font-size: 0.78rem;
  }

  .donation-section__custom {
    margin-top: 1rem;
    font-size: 0.88rem;
  }

  .donation-section__custom input {
    min-height: 2.8rem;
    padding: 0.8rem 0.95rem;
    border-radius: 6px;
    font-size: 0.95rem;
  }

  .donation-section__methods {
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .donation-section__method {
    min-height: 2.5rem;
    padding: 0.6rem 0.9rem;
    font-size: 0.82rem;
    border-radius: 999px;
  }

  .donation-section__cta {
    min-height: 2.9rem;
    padding: 0.8rem 1.1rem;
    font-size: 0.9rem;
    margin-top: 1.15rem;
    border-radius: 8px;
  }

  .donation-section__impact-list {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  .donation-section__impact-item {
    gap: 1rem;
    padding: 1rem;
    border-radius: 6px;
  }

  .donation-section__impact-item > span {
    width: 3.25rem;
    height: 3.25rem;
    font-size: 0.87rem;
    flex-shrink: 0;
  }

  .donation-section__impact-item h4 {
    font-size: 0.97rem;
  }

  .donation-section__impact-item p {
    font-size: 0.86rem;
  }
}

@media (max-width: 640px) {
  .donation-section {
    padding: 2rem 1rem;
  }

  .donation-section__banner-copy {
    padding: 1.5rem;
    gap: 0.9rem;
  }

  .donation-section__banner-copy h2 {
    font-size: clamp(1.7rem, 7vw, 2.3rem);
    line-height: 1.1;
  }

  .donation-section__eyebrow {
    font-size: 0.73rem;
    margin-bottom: 0.5rem;
  }

  .donation-section__banner-copy p:last-child {
    font-size: 0.9rem;
    max-width: 100%;
    line-height: 1.55;
  }

  .donation-section__banner-media {
    min-height: 19rem;
  }

  .donation-section__banner-card {
    right: 1rem;
    bottom: 1rem;
    min-width: 8rem;
    padding: 0.9rem;
    border-radius: 6px;
  }

  .donation-section__banner-card strong {
    font-size: 1.8rem;
    margin-bottom: 0.1rem;
  }

  .donation-section__banner-card span {
    font-size: 0.76rem;
  }

  .donation-section__panel,
  .donation-section__impact {
    padding: 1.2rem;
  }

  .donation-section__panel-header h3,
  .donation-section__impact h3 {
    font-size: clamp(1.35rem, 6vw, 1.85rem);
  }

  .donation-section__amounts {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .donation-section__amount {
    min-height: 5.8rem;
    padding: 0.9rem;
    border-radius: 6px;
  }

  .donation-section__amount strong {
    font-size: 1.25rem;
  }

  .donation-section__amount span {
    font-size: 0.75rem;
  }

  .donation-section__custom {
    margin-top: 0.95rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }

  .donation-section__custom input {
    min-height: 2.7rem;
    padding: 0.75rem 0.9rem;
    font-size: 0.9rem;
  }

  .donation-section__methods {
    gap: 0.6rem;
    margin-top: 0.95rem;
  }

  .donation-section__method {
    min-height: 2.4rem;
    padding: 0.55rem 0.85rem;
    font-size: 0.78rem;
    border-radius: 999px;
  }

  .donation-section__cta {
    min-height: 2.7rem;
    padding: 0.75rem 1rem;
    font-size: 0.87rem;
    margin-top: 1rem;
    border-radius: 6px;
    width: 100%;
    justify-content: center;
  }

  .donation-section__impact-list {
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .donation-section__impact-item {
    grid-template-columns: auto 1fr;
    gap: 0.9rem;
    padding: 1rem;
    border-radius: 6px;
  }

  .donation-section__impact-item > span {
    width: 3.1rem;
    height: 3.1rem;
    font-size: 0.82rem;
  }

  .donation-section__impact-item h4 {
    font-size: 0.95rem;
  }

  .donation-section__impact-item p {
    font-size: 0.83rem;
    margin-top: 0.3rem;
  }
}

@media (max-width: 480px) {
  .donation-section {
    padding: 1.75rem 0.85rem;
  }

  .donation-section__banner-copy {
    padding: 1.25rem;
    gap: 0.8rem;
  }

  .donation-section__banner-copy h2 {
    font-size: clamp(1.5rem, 8vw, 2rem);
    line-height: 1.15;
  }

  .donation-section__banner-copy p:last-child {
    font-size: 0.85rem;
  }

  .donation-section__banner-media {
    min-height: 17rem;
  }

  .donation-section__banner-card {
    right: 0.8rem;
    bottom: 0.8rem;
    min-width: 7.5rem;
    padding: 0.8rem;
  }

  .donation-section__banner-card strong {
    font-size: 1.6rem;
    margin-bottom: 0.05rem;
  }

  .donation-section__banner-card span {
    font-size: 0.72rem;
  }

  .donation-section__panel,
  .donation-section__impact {
    padding: 1.1rem;
  }

  .donation-section__panel-header h3,
  .donation-section__impact h3 {
    font-size: clamp(1.2rem, 7vw, 1.6rem);
  }

  .donation-section__amounts {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }

  .donation-section__amount {
    min-height: 5.4rem;
    padding: 0.85rem;
  }

  .donation-section__amount strong {
    font-size: 1.15rem;
  }

  .donation-section__amount span {
    font-size: 0.72rem;
  }

  .donation-section__custom input {
    min-height: 2.6rem;
    padding: 0.7rem 0.85rem;
    font-size: 0.9rem;
  }

  .donation-section__method {
    min-height: 2.3rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }

  .donation-section__cta {
    min-height: 2.6rem;
    padding: 0.7rem 1rem;
    font-size: 0.82rem;
    margin-top: 0.9rem;
  }

  .donation-section__impact-item {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    padding: 0.95rem;
  }

  .donation-section__impact-item > span {
    width: 2.9rem;
    height: 2.9rem;
    font-size: 0.78rem;
  }

  .donation-section__impact-item h4 {
    font-size: 0.92rem;
  }

  .donation-section__impact-item p {
    font-size: 0.8rem;
  }
}
</style>
</style>
