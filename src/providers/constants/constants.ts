import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsProvider {
  constructor(public http: Http) {
  }
  AFFINITY_URL="http://iglnewuiecstage.qison.com:7373";
  URL="http://iglnewuiecstage.qison.com:7373/qspplatform/services/v1/";
  AUTHENTICATE_URL="user/authenticate";
  CATEGORYLIST_URL="category/categoriesPrimaryInfo";
  GETUSERDETAILS_URL="user/getDetail";
  FEATURED_CONTENT="featured/getFeaturedContentsForAllCategories";
  PROMOTED_CONTENT="promotedContent/getContentsForMember";
  GETSEARCH_URL="search/getSearchResults";
  ISUSERLOGGEDIN_URL="user/isUserLoggedIn";
  GETARTICLES_URL="article/getArticles";
  GETALBUMS_URL="album/getAlbums";
  GETPOLLS_URL="poll/getPolls";
  GETQUESTIONANDANSWERS_URL="qa/getQuestions";
  GETACTIVITIES_URL="activity/getActivities";
}