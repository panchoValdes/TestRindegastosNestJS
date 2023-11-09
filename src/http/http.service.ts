// http.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
  private readonly axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
  });

  async get(endpoint: string) {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(
        `Error al hacer la petición GET a ${endpoint}: ${error.message}`,
      );
    }
  }
}
