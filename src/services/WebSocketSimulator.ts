import { store } from '../store/store';
import { updatePrices } from '../store/cryptoSlice';

export class WebSocketSimulator {
  private interval: number | null = null;

  start() {
    this.interval = window.setInterval(() => {
      const assets = store.getState().crypto.assets;
      
      assets.forEach(asset => {
        // Generate random price changes
        const priceChange = asset.price * (Math.random() * 0.02 - 0.01); // ±1%
        const newPrice = asset.price + priceChange;
        
        // Update percentage changes
        const percentChange1h = asset.percentChange1h + (Math.random() * 0.4 - 0.2);
        const percentChange24h = asset.percentChange24h + (Math.random() * 0.4 - 0.2);
        const percentChange7d = asset.percentChange7d + (Math.random() * 0.4 - 0.2);
        
        // Update volume
        const volumeChange = asset.volume24h * (Math.random() * 0.04 - 0.02); // ±2%
        const newVolume = asset.volume24h + volumeChange;

        store.dispatch(updatePrices({
          id: asset.id,
          updates: {
            price: newPrice,
            percentChange1h,
            percentChange24h,
            percentChange7d,
            volume24h: newVolume,
          }
        }));
      });
    }, 2000); // Update every 2 seconds
  }

  stop() {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.interval = null;
    }
  }
} 