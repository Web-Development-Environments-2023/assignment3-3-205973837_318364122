(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f39955"],{"21ab":function(e,t,i){"use strict";var s=i("71ef"),r=i.n(s);r.a},"23b5":function(e,t,i){},"71ef":function(e,t,i){},"92e4":function(e,t,i){"use strict";var s=i("23b5"),r=i.n(s);r.a},f0af:function(e,t,i){e.exports=i.p+"img/hat.4114ef13.png"},fda7:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("MyRecipesPreviewList")],1)},r=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("h1",[e._v(" My Recipes "),s("img",{attrs:{id:"hatImg",src:i("f0af")}}),e._t("default")],2),e._l(e.all_recipes,(function(t,i){return s("b-row",{key:i},e._l(t,(function(e){return s("b-col",{key:e.recipe_id},[s("MyRecipesPreview",{staticClass:"MyRecipesPreview",attrs:{recipe:e}})],1)})),1)}))],2)},a=[],n=i("2909"),p=(i("96cf"),i("1da1")),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"no-body":"",title:e.recipe.title,"img-top":"",tag:"article"}},[s("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"myfullrecipe",params:{recipeId:e.recipe.recipe_id}}}},[s("b-card-img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})],1),s("div",{staticClass:"recipe-footer"},[s("b-card-title",{staticClass:"recipe-title text-center",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),s("ul",{staticClass:"recipe-overview"},[s("b-row",[s("b-col",[s("b-icon",{attrs:{icon:"clock"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" "),s("span",{staticStyle:{"font-size":"10px"}},[e._v(" minutes ")])],1),s("b-col",[s("b-icon",{attrs:{icon:"hand-thumbs-up"}}),e._v(" "+e._s(e.recipe.aggregateLikes)+" "),s("span",{staticStyle:{"font-size":"10px"}},[e._v("likes ")])],1)],1),s("b-row",{staticClass:"rowtocenter"},[e.recipe.vegan?s("b-col",{attrs:{sm:"4"}},[s("img",{staticClass:"veganImg",attrs:{src:i("5e60")}})]):e.recipe.vegetarian?s("b-col",{attrs:{sm:"4"}},[s("img",{staticClass:"vegetarianImg",attrs:{src:i("8dde")}})]):e._e(),s("b-col",{attrs:{sm:"4"}},[e.recipe.glutenFree?s("img",{staticClass:"glutenfreeImg",attrs:{src:i("97fd")}}):e._e()])],1)],1)],1)],1)],1)},o=[],u={props:{recipe:{type:Object,required:!0}}},f=u,m=(i("92e4"),i("2877")),b=Object(m["a"])(f,l,o,!1,null,"48515230",null),v=b.exports,d={name:"RecipePreviewList",components:{MyRecipesPreview:v},data:function(){return{recipes:[],all_recipes:[]}},mounted:function(){this.show_my_recipes()},methods:{show_my_recipes:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("https://bgnbrecipes.cs.bgu.ac.il/users/myrecipes");case 3:s=t.sent,r=s.data,e.recipes=[],(i=e.recipes).push.apply(i,Object(n["a"])(r)),e.calcAllRecipes(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},calcAllRecipes:function(){for(var e=0,t=[],i=0;i<this.recipes.length;i++)2==e||i===this.recipes.length-1?(t.push(this.recipes[i]),this.all_recipes.push(t),t=[],e=0):(t.push(this.recipes[i]),e++)}}},g=d,h=(i("21ab"),Object(m["a"])(g,c,a,!1,null,"2ba88050",null)),_=h.exports,w={components:{MyRecipesPreviewList:_},name:"MyRecipesPage",data:function(){return{}},mounted:function(){},methods:{}},y=w,x=Object(m["a"])(y,s,r,!1,null,"538d3620",null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-25f39955.3c9d5ac5.js.map