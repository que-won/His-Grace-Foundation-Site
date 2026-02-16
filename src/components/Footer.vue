<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    submitted.value = true
    email.value = ''
    setTimeout(() => {
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>His Grace Foundation</h3>
          <p>Creating lasting change in communities across Africa through education, healthcare, and essential resources.</p>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <a href="#home" class="footer-link">Home</a>
          <a href="#about" class="footer-link">About Us</a>
          <a href="#mission" class="footer-link">Our Mission</a>
          <a href="#activities" class="footer-link">Activities</a>
        </div>

        <div class="footer-section">
          <h4>Get In Touch</h4>
          <a href="tel:+12673850667" class="footer-link">📞 +1 (267) 385-0667</a>
          <a href="mailto:contact@hisgrace.org" class="footer-link">📧 contact@hisgrace.org</a>
          <p class="address">123 Foundation Road<br />Nairobi, Kenya</p>
        </div>

        <div class="footer-section">
          <h4>Stay Updated</h4>
          <div class="newsletter">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="email-input"
              @keyup.enter="handleSubscribe"
            />
            <button @click="handleSubscribe" class="subscribe-btn">Subscribe</button>
          </div>
          <p v-if="submitted" class="success-message">✓ Thank you for subscribing!</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 His Grace Foundation. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Donate</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--primary);
  color: white;
  padding: 4rem 0 0;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.footer-section h4 {
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.address {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: var(--accent);
  color: white;
}

.footer-link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--accent);
  padding-left: 0.5rem;
}

.newsletter {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
}

.email-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.email-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}

.subscribe-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
}

.subscribe-btn:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}

.success-message {
  color: var(--accent);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  animation: slideIn 0.3s ease;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
    gap: 1rem;
  }

  .newsletter {
    flex-direction: column;
  }

  .subscribe-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-wrap: wrap;
  }

  .footer-bottom {
    padding: 1.5rem 0;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
