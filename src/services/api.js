/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Api configuration to connect do DB
 */

// Importing dependencies
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3028',
});

export default api;
