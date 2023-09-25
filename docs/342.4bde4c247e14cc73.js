"use strict";(self.webpackChunklive_score=self.webpackChunklive_score||[]).push([[342],{342:(y,l,o)=>{o.r(l),o.d(l,{StandingsFeatureModule:()=>M});var c=o(6814),r=o(3760),u=o(7398),m=o(6306),f=o(6232),t=o(9291),g=o(9396);let h=(()=>{var e;class s{constructor(){this.teamId=new t.vpe}goToDetails(){this.teamId.next(this.standing.team.id)}}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ls-standing"]],inputs:{standing:"standing"},outputs:{teamId:"teamId"},decls:19,vars:9,consts:[[1,"standing-details",3,"click"],["alt","club logo",3,"src"],[1,"medium"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return a.goToDetails()}),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._UZ(4,"img",1),t.qZA(),t.TgZ(5,"p",2),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p",2),t._uU(16),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA()()),2&n&&(t.xp6(2),t.Oqu(a.standing.rank),t.xp6(2),t.Q6J("src",a.standing.team.logo,t.LSH),t.xp6(2),t.Oqu(a.standing.team.name),t.xp6(2),t.Oqu(a.standing.all.played),t.xp6(2),t.Oqu(a.standing.all.win),t.xp6(2),t.Oqu(a.standing.all.lose),t.xp6(2),t.Oqu(a.standing.all.draw),t.xp6(2),t.Oqu(a.standing.goalsDiff),t.xp6(2),t.Oqu(a.standing.points))},styles:[".standing-details[_ngcontent-%COMP%]{width:100%;height:40px;margin-top:5px;display:flex;flex-direction:row;justify-content:space-around;background-color:#faebd7;font-size:medium;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:500}.standing-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:5%;display:flex;justify-content:center;align-items:center}.standing-details[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%]{width:20%}.standing-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}.standing-details[_ngcontent-%COMP%]:hover{background-color:beige}"]}),s})();function v(e,s){if(1&e&&(t.TgZ(0,"div",4)(1,"p",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8,"-"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p",5),t._UZ(14,"img",6),t.qZA()()),2&e){const i=s.$implicit;t.xp6(2),t.Q6J("src",i.teams.home.logo,t.LSH),t.xp6(2),t.Oqu(i.teams.home.name),t.xp6(2),t.Oqu(i.goals.home),t.xp6(4),t.Oqu(i.goals.away),t.xp6(2),t.Oqu(i.teams.away.name),t.xp6(2),t.Q6J("src",i.teams.away.logo,t.LSH)}}function x(e,s){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,v,15,6,"div",3),t.qZA()),2&e){const i=s.ngIf;t.xp6(1),t.Q6J("ngForOf",i)}}let p=(()=>{var e;class s{constructor(n,a,d){this.soccerService=n,this.activatedRoute=a,this.router=d,this.backClicked=new t.vpe}ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.fixtureDetails={leagueId:n.leagueId,teamId:n.teamId},void 0!==this.fixtureDetails.leagueId&&void 0!==this.fixtureDetails.teamId?this.getFixtures():console.log("Could not fetch fixtures data because route parameters were incorrect!")})}getFixtures(){this.fixtures$=this.soccerService.getTenLastFixtures(this.fixtureDetails.leagueId,this.fixtureDetails.teamId).pipe((0,u.U)(n=>n),(0,m.K)(n=>(console.error(n),f.E)))}buttonBackClick(){void 0!==this.fixtureDetails.leagueId&&void 0!==this.fixtureDetails.teamId?(this.backClicked.next(!0),this.router.navigate(["/standings/"+this.fixtureDetails.leagueId])):console.log("Could not navigateback because route parameters were incorrect!")}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(g.$),t.Y36(r.gz),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ls-team-matches-view"]],outputs:{backClicked:"backClicked"},decls:4,vars:3,consts:[["class","fixtures-details-container",4,"ngIf"],[3,"click"],[1,"fixtures-details-container"],["class","fixutre-container",4,"ngFor","ngForOf"],[1,"fixutre-container"],[1,"img"],["alt","teamLogo",3,"src"]],template:function(n,a){1&n&&(t.YNc(0,x,2,1,"div",0),t.ALo(1,"async"),t.TgZ(2,"button",1),t.NdJ("click",function(){return a.buttonBackClick()}),t._uU(3,"Back"),t.qZA()),2&n&&t.Q6J("ngIf",t.lcZ(1,1,a.fixtures$))},dependencies:[c.sg,c.O5,c.Ov],styles:[".fixtures-details-container[_ngcontent-%COMP%]{width:100%;margin:30px 0;display:flex;flex-direction:column}.fixtures-details-container[_ngcontent-%COMP%]   .fixutre-container[_ngcontent-%COMP%]{width:100%;margin-top:10px;display:flex;flex-direction:row;justify-content:space-evenly;font-size:medium;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:500}.fixtures-details-container[_ngcontent-%COMP%]   .fixutre-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:10%;display:flex;justify-content:center;align-items:center}.fixtures-details-container[_ngcontent-%COMP%]   .fixutre-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}button[_ngcontent-%COMP%]{width:100px;height:30px;background-color:#00f;color:#fff;margin-left:50px}"]}),s})();function C(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"ls-standing",8),t.NdJ("teamId",function(a){t.CHM(i);const d=t.oxw(3);return t.KtG(d.goToFixtures(a))}),t.qZA()}2&e&&t.Q6J("standing",s.$implicit)}function Z(e,s){if(1&e&&(t.TgZ(0,"div",6),t.YNc(1,C,1,1,"ls-standing",7),t.qZA()),2&e){const i=s.ngIf;t.xp6(1),t.Q6J("ngForOf",i.standings[0])}}function T(e,s){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"div")(3,"div"),t.TgZ(4,"div",4),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"div"),t._uU(7,"Games"),t.qZA(),t.TgZ(8,"div"),t._uU(9,"W"),t.qZA(),t.TgZ(10,"div"),t._uU(11,"L"),t.qZA(),t.TgZ(12,"div"),t._uU(13,"D"),t.qZA(),t.TgZ(14,"div",4),t._uU(15,"Goal Difference"),t.qZA(),t.TgZ(16,"div"),t._uU(17,"Points"),t.qZA()(),t.YNc(18,Z,2,1,"div",5),t.ALo(19,"async"),t.qZA()),2&e){const i=t.oxw();t.xp6(18),t.Q6J("ngIf",t.lcZ(19,1,i.leaugeStandings$))}}function w(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"div",9)(1,"ls-team-matches-view",10),t.NdJ("backClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.resetView())}),t.qZA()()}}const O=[{path:":leagueId",component:(()=>{var e;class s{constructor(n,a,d){this.soccerService=n,this.activatedRoute=a,this.router=d,this.fixtureNavigationClicked=!1}ngOnInit(){this.standingsSubscription=this.activatedRoute.params.subscribe(n=>{this.currentLeaugeId=n.leagueId,this.leaugeStandings$=this.soccerService.getStandings(n.leagueId).pipe((0,u.U)(a=>a.league),(0,m.K)(a=>(console.error(a),f.E)))})}goToFixtures(n){this.fixtureNavigationClicked=!0,this.currentTeamId=n,void 0!==this.currentLeaugeId&&void 0!==n?this.router.navigate(["/standings/"+this.currentLeaugeId+"/team/"+n]):console.log("Could not fetch team data!")}resetView(){this.fixtureNavigationClicked=!1}ngOnDestroy(){this.standingsSubscription.unsubscribe()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(g.$),t.Y36(r.gz),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ls-standings-view"]],decls:2,vars:2,consts:[["class","container",4,"ngIf"],["class","fixturesContainer",4,"ngIf"],[1,"container"],[1,"standings-header-container"],[1,"medium"],["class","standings-container",4,"ngIf"],[1,"standings-container"],[3,"standing","teamId",4,"ngFor","ngForOf"],[3,"standing","teamId"],[1,"fixturesContainer"],[3,"backClicked"]],template:function(n,a){1&n&&(t.YNc(0,T,20,3,"div",0),t.YNc(1,w,2,0,"div",1)),2&n&&(t.Q6J("ngIf",0==a.fixtureNavigationClicked),t.xp6(1),t.Q6J("ngIf",a.fixtureNavigationClicked))},dependencies:[c.sg,c.O5,h,p,c.Ov],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .standings-header-container[_ngcontent-%COMP%]{width:100%;min-height:40px;margin-top:20px;display:flex;flex-direction:row;justify-content:space-around;background-color:#faebd7;font-size:medium;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:500}.container[_ngcontent-%COMP%]   .standings-header-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5%;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .standings-header-container[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%]{width:20%}.container[_ngcontent-%COMP%]   .standings-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}"]}),s})()},{path:":leagueId/team/:teamId",component:p}];let _=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(O),r.Bz]}),s})(),M=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[g.$],imports:[c.ez,_,_]}),s})()}}]);