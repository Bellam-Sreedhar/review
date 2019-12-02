import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { PromotedContentCardComponent } from './promoted-content-card/promoted-content-card';
import { ArticleContentCardComponent } from './article-content-card/article-content-card';
import { PollContentCardComponent } from './poll-content-card/poll-content-card';
import { AlbumContentCardComponent } from './album-content-card/album-content-card';
import { QuestionAndAnswersContentCardComponent } from './question-and-answers-content-card/question-and-answers-content-card'
import { LimitTheTextComponent } from './limit-the-text/limit-the-text';
import { LimitTheTitleComponent } from './limit-the-title/limit-the-title';
@NgModule({
	declarations: [HeaderComponent,
    PromotedContentCardComponent,
    ArticleContentCardComponent,
    PollContentCardComponent,
    AlbumContentCardComponent,
    QuestionAndAnswersContentCardComponent,
    LimitTheTextComponent,
    LimitTheTitleComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PromotedContentCardComponent,
    ArticleContentCardComponent,
    PollContentCardComponent,
    AlbumContentCardComponent,
    QuestionAndAnswersContentCardComponent,
    LimitTheTextComponent,
    LimitTheTitleComponent]
})
export class ComponentsModule {}
