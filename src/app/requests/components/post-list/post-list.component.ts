import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

    public posts$?: Observable<Post[]>;

    constructor(
        private postService: PostService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.posts$ = this.postService.getPosts();
    }

    public postPage(id: number): void {
        this.router.navigate(['request'], {
			relativeTo: this.route,
			queryParams: {id}
		})
    }
}
