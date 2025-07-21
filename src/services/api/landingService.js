import featuresData from "@/services/mockData/features.json";
import personasData from "@/services/mockData/personas.json";
import ctasData from "@/services/mockData/ctas.json";

class LandingService {
  async getFeatures() {
    await this.delay(300);
    return [...featuresData];
  }

  async getPersonas() {
    await this.delay(250);
    return [...personasData];
  }

  async getCTAs() {
    await this.delay(200);
    return [...ctasData];
  }

  async trackCTAClick(trackingId) {
    await this.delay(100);
    console.log(`CTA clicked: ${trackingId}`);
    return { success: true, trackingId };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new LandingService();