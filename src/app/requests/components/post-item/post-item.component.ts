import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post, PostService, Comment } from '../../services/post.service';
import { Observable, switchMap, tap } from 'rxjs';
import { map } from 'rxjs';

@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

    public post?: Post;

	public comments?: Comment[];

    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(
			switchMap((data) => {
				return this.postService.getPost(data["id"]).pipe(tap(data => {
					this.post = data
				}));
			})
		).subscribe()
		this.route.queryParams.pipe(
			switchMap((data) => {
				return this.postService.getComments(data["id"]).pipe(tap(data => {
					this.comments = data
				}));
			})
		).subscribe()
    }
}
