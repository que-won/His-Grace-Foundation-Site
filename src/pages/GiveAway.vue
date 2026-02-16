<script setup lang="ts">
import { RouterLink } from 'vue-router'

const giveaways = [
  {
    id: 1,
    title: 'Books & Educational Materials',
    description: 'We collect and distribute books, notebooks, pens, and other educational materials to students in need. Help provide learning resources to underprivileged children.',
    image: 'https://via.placeholder.com/300x200?text=Books+Giveaway',
    category: 'Education',
    items: 'Books, Stationery'
  },
  {
    id: 2,
    title: 'Clothing Drive',
    description: 'Donate new or gently used clothing for children, adults, and families. We organize regular clothing distribution events in communities.',
    image: 'https://via.placeholder.com/300x200?text=Clothes+Giveaway',
    category: 'Fashion',
    items: 'Clothes, Shoes'
  },
  {
    id: 3,
    title: 'Household Essentials',
    description: 'Distribute household items like blankets, utensils, bedding, and toiletries to families in need. Create comfort and dignity for everyone.',
    image: 'https://via.placeholder.com/300x200?text=Household+Items',
    category: 'Essentials',
    items: 'Blankets, Utensils, Toiletries'
  },
  {
    id: 4,
    title: 'Electronics & Technology',
    description: 'Donate refurbished computers, tablets, and smartphones to schools and individuals. Bridging the digital divide for underdeveloped communities.',
    image: 'https://via.placeholder.com/300x200?text=Technology+Donation',
    category: 'Technology',
    items: 'Computers, Tablets, Phones'
  },
  {
    id: 5,
    title: 'Food & Groceries',
    description: 'Contribute packaged foods, groceries, and produce to food banks. Your donation helps families with food security and nutrition.',
    image: 'https://via.placeholder.com/300x200?text=Food+Giveaway',
    category: 'Food',
    items: 'Groceries, Food Items'
  },
  {
    id: 6,
    title: 'Medical Supplies',
    description: 'Donate first aid supplies, medicines, and medical equipment. Supporting healthcare initiatives in remote and rural areas.',
    image: 'https://via.placeholder.com/300x200?text=Medical+Supplies',
    category: 'Healthcare',
    items: 'Medicines, Medical Supplies'
  }
]
</script>

<template>
  <div class="giveaway-page">
    <!-- Banner -->
    <div class="banner">
      <div class="banner-content">
        <h1>Give Away & Donate Items</h1>
        <p>Share what you have, change what you can</p>
      </div>
    </div>

    <!-- Giveaway Items Grid -->
    <div class="container">
      <div class="intro-text">
        <h2>Donation Categories</h2>
        <p>We accept various items to help communities. Whether it's clothing, books, food, or household items, your donations make a real difference.</p>
      </div>

      <div class="giveaway-grid">
        <div v-for="item in giveaways" :key="item.id" class="giveaway-card">
          <div class="item-image">
            <img :src="item.image" :alt="item.title">
            <span class="category-tag">{{ item.category }}</span>
          </div>
          <div class="item-content">
            <h3>{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <div class="items-list">
              <strong>Items:</strong> {{ item.items }}
            </div>
            <button class="donate-item-btn">Donate Items</button>
            <RouterLink :to="`/give-away/${item.id}`" class="learn-more-btn">Learn More →</RouterLink>
          </div>
        </div>
      </div>

      <!-- Donation Process -->
      <div class="process-section">
        <h2>How to Donate Items</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <h4>Select Category</h4>
            <p>Choose what you want to donate from the categories above</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <h4>Gather Items</h4>
            <p>Collect items in good condition. Clean and package them properly</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <h4>Schedule Pickup</h4>
            <p>Contact us to arrange pickup or drop-off at our collection centers</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <h4>Distribution</h4>
            <p>We verify and distribute items to those who need them most</p>
          </div>
        </div>
      </div>

      <!-- Drop-off Locations -->
      <div class="locations-section">
        <h2>Collection Centers</h2>
        <p>Find a collection center near you</p>
        <div class="locations-grid">
          <div class="location">
            <h4>📍 Downtown Center</h4>
            <p>123 Main Street, City Center</p>
            <p class="hours">Mon-Fri: 9 AM - 6 PM</p>
          </div>
          <div class="location">
            <h4>📍 North Ward Hub</h4>
            <p>456 North Avenue, North Ward</p>
            <p class="hours">Mon-Sat: 10 AM - 5 PM</p>
          </div>
          <div class="location">
            <h4>📍 East Side Depot</h4>
            <p>789 East Road, Eastside</p>
            <p class="hours">Tue-Sun: 8 AM - 7 PM</p>
          </div>
          <div class="location">
            <h4>📍 South Valley Point</h4>
            <p>321 South Lane, South Valley</p>
            <p class="hours">Wed-Sun: 11 AM - 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.giveaway-page {
  width: 100%;
}

.banner {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.banner-content h1 {
  font-size: 3rem;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.banner-content p {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.intro-text {
  text-align: center;
  margin-bottom: 50px;
}

.intro-text h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.intro-text p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.giveaway-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.giveaway-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.giveaway-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.item-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(250, 112, 154, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.item-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.item-content h3 {
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}

.items-list {
  background: #f9f9f9;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 0.95rem;
  color: #555;
}

.donate-item-btn {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
}

.donate-item-btn:hover {
  opacity: 0.9;
}

.learn-more-btn {
  display: inline-block;
  background: #fa709a;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 10px;
}

.learn-more-btn:hover {
  background: #f85a8c;
  transform: translateX(3px);
}

.process-section {
  margin: 60px 0;
  text-align: center;
}

.process-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}

.timeline-item {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.timeline-item h4 {
  font-size: 1.2rem;
  color: #333;
  margin: 15px 0 10px 0;
}

.timeline-item p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.locations-section {
  margin-top: 60px;
  text-align: center;
}

.locations-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.locations-section > p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.location {
  background: white;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #fa709a;
}

.location h4 {
  color: #333;
  margin: 0 0 10px 0;
  font-size: 1.1rem;
}

.location p {
  color: #666;
  margin: 5px 0;
  line-height: 1.5;
}

.location .hours {
  color: #fa709a;
  font-weight: 600;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2rem;
  }

  .giveaway-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    grid-template-columns: 1fr;
  }

  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
