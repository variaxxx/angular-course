import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
    declarations: [ PostListComponent, PostItemComponent ],
    imports: [ CommonModule, RequestsRoutingModule, HttpClientModule ],
    exports: [],
    providers: [ PostService ],
})
export class RequestsModule {}