(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42aeca0e"],{"0608":function(e,t,i){},"316e":function(e,t,i){"use strict";var r=i("9d75"),c=i.n(r);c.a},"8d4c":function(e,t,i){e.exports=i.p+"img/family.fe098762.png"},9983:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("FamilyRecipePreviewList")],1)},c=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h1",[e._v(" Family Recipes "),r("img",{attrs:{id:"familyImg",src:i("8d4c")}}),e._t("default")],2),0!=e.recipes.length?r("div",[r("b-row",e._l(e.recipes,(function(e){return r("b-col",{key:e.recipe_id},[r("FamilyRecipePreview",{staticClass:"FamilyRecipesPreview",attrs:{recipe:e}})],1)})),1)],1):r("div",[r("h3",[e._v(" You have no family recipes... ")])])])},a=[],n=i("2909"),l=(i("96cf"),i("1da1")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"mb-2 myrecipecard",staticStyle:{"max-width":"20rem"},attrs:{"no-body":"",title:e.recipe.title,"img-top":"",tag:"article"}},[r("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"familyfullrecipe",params:{recipeId:e.recipe.recipe_id}}}},[r("b-card-img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})],1),r("div",{staticClass:"recipe-footer"},[r("b-card-title",{staticClass:"recipe-title text-center",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),r("ul",{staticClass:"recipe-overview"},[r("b-row",[r("b-col",[r("b-icon",{attrs:{icon:"clock"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" "),r("span",{staticStyle:{"font-size":"10px"}},[e._v(" minutes ")])],1),r("b-col",[r("b-icon",{attrs:{icon:"hand-thumbs-up"}}),e._v(" "+e._s(e.recipe.popularity)+" "),r("span",{staticStyle:{"font-size":"10px"}},[e._v("likes ")])],1)],1),r("b-row",{staticClass:"rowtocenter"},[e.recipe.vegan?r("b-col",{attrs:{sm:"4"}},[r("img",{staticClass:"veganImg",attrs:{src:i("5e60")}})]):e.recipe.vegetarian?r("b-col",{attrs:{sm:"4"}},[r("img",{staticClass:"vegetarianImg",attrs:{src:i("8dde")}})]):e._e(),r("b-col",{attrs:{sm:"4"}},[e.recipe.glutenFree?r("img",{staticClass:"glutenfreeImg",attrs:{src:i("97fd")}}):e._e()])],1)],1)],1)],1)],1)},o=[],u={props:{recipe:{type:Object,required:!0}}},m=u,d=(i("e7b2"),i("2877")),f=Object(d["a"])(m,p,o,!1,null,"190f52e6",null),v=f.exports,b={name:"FamillyRecipePreviewList",components:{FamilyRecipePreview:v},data:function(){return{recipes:[]}},mounted:function(){this.show_family_recipes()},methods:{show_family_recipes:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("https://bgnbrecipes.cs.bgu.ac.il/users/familyrecipes");case 3:r=t.sent,c=r.data,e.recipes=[],(i=e.recipes).push.apply(i,Object(n["a"])(c)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},g=b,_=(i("316e"),Object(d["a"])(g,s,a,!1,null,"96a411be",null)),y=_.exports,w={components:{FamilyRecipePreviewList:y},name:"FamilyRecipesPage",data:function(){return{}},mounted:function(){},methods:{}},h=w,x=Object(d["a"])(h,r,c,!1,null,"99229d8c",null);t["default"]=x.exports},"9d75":function(e,t,i){},e7b2:function(e,t,i){"use strict";var r=i("0608"),c=i.n(r);c.a}}]);
//# sourceMappingURL=chunk-42aeca0e.c8cacac9.js.map