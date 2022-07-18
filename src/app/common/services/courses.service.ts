import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = "courses"

  constructor(private http: HttpClient) { }

  private getUrl(): string {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id))
  }

  all() {
    return this.http.get(this.getUrl());
  }

  create(item) {
    return this.http.post(this.getUrl(), item)
  }

  update(id, item) {
    return this.http.put(this.getUrlWithId(id), item)
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id))
  }
}
