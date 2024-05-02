import axios from 'axios';
import { BASE_URL } from '../../.env.json'

export default axios.create({
  BASE_URL,
  //   timeout: 30000,
});
