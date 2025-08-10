import "./src/styles/global.css"

// Initialize HumanBehavior SDK
import { HumanBehaviorTracker } from 'humanbehavior-js';

export const onClientEntry = () => {
  const apiKey = process.env.GATSBY_HUMANBEHAVIOR_API_KEY;
  if (apiKey) {
    HumanBehaviorTracker.init(apiKey);
    console.log('HumanBehavior SDK initialized for Gatsby');
  }
};