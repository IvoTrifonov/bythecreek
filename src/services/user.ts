const baseUrl = 'http://localhost:3000/auth';
import axios from 'axios';

interface User {
  username: string;
  password: string;
}

export default {
  async signIn(user: User): Promise<void> {
    const url = baseUrl + '/signin';
    await axios.post(url, user);
  },
  async signUp(user: User): Promise<void> {
    const url = baseUrl + '/signup';
    console.log(user);
    await axios.post(url, user);
  }
}