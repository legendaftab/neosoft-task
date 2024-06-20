import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortKey: string = '';
  sortOrder: boolean = true;

  constructor(private myS: ApiService) {}

  ngOnInit(): void {
    this.myS.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  onSearch(): void {
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSort(key: string): void {
    this.sortKey = key;
    this.sortOrder = !this.sortOrder;
    this.filteredPosts.sort((a, b) => {
      if (a[key] < b[key]) {
        return this.sortOrder ? -1 : 1;
      } else if (a[key] > b[key]) {
        return this.sortOrder ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}