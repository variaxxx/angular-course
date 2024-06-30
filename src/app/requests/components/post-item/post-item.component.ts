import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post, PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

    public post?: any;

    public posts?: Observable<Post[]>;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            
        })        
    }
}
