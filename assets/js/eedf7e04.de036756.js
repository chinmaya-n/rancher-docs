"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15403],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27915:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Custom Catalog Configuration Reference"},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config",title:"Custom Catalog Configuration Reference",description:"Any user can create custom catalogs to add into Rancher. Besides the content of the catalog, users must ensure their catalogs are able to be added into Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"Custom Catalog Configuration Reference"},sidebar:"tutorialSidebar",previous:{title:"Creating Custom Catalogs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},next:{title:"Creating Catalog Apps",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps"}},p={},c=[{value:"Types of Repositories",id:"types-of-repositories",level:2},{value:"Custom Git Repository",id:"custom-git-repository",level:2},{value:"Custom Helm Chart Repository",id:"custom-helm-chart-repository",level:2},{value:"Catalog Fields",id:"catalog-fields",level:2},{value:"Private Repositories",id:"private-repositories",level:2},{value:"Using Username and Password",id:"using-username-and-password",level:3},{value:"Using an OAuth token",id:"using-an-oauth-token",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any user can create custom catalogs to add into Rancher. Besides the content of the catalog, users must ensure their catalogs are able to be added into Rancher."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#types-of-repositories"},"Types of Repositories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-git-repository"},"Custom Git Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-helm-chart-repository"},"Custom Helm Chart Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#catalog-fields"},"Catalog Fields")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#private-repositories"},"Private Repositories"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-username-and-password"},"Using Username and Password")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-an-oauth-token"},"Using an OAuth token"))))),(0,o.kt)("h2",{id:"types-of-repositories"},"Types of Repositories"),(0,o.kt)("p",null,"Rancher supports adding in different types of repositories as a catalog:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Custom Git Repository"),(0,o.kt)("li",{parentName:"ul"},"Custom Helm Chart Repository")),(0,o.kt)("h2",{id:"custom-git-repository"},"Custom Git Repository"),(0,o.kt)("p",null,"The Git URL needs to be one that ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clone#_git_urls_a_id_urls_a"},"can handle")," and must end in ",(0,o.kt)("inlineCode",{parentName:"p"},".git"),". The branch name must be a branch that is in your catalog URL. If no branch name is provided, it will default to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch. Whenever you add a catalog to Rancher, it will be available almost immediately."),(0,o.kt)("h2",{id:"custom-helm-chart-repository"},"Custom Helm Chart Repository"),(0,o.kt)("p",null,"A Helm chart repository is an HTTP server that contains one or more packaged charts. Any HTTP server that can serve YAML files and tar files and can answer GET requests can be used as a repository server."),(0,o.kt)("p",null,"Helm comes with a built-in package server for developer testing (",(0,o.kt)("inlineCode",{parentName:"p"},"helm serve"),"). The Helm team has tested other servers, including Google Cloud Storage with website mode enabled, S3 with website mode enabled or hosting custom chart repository server using open-source projects like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/chartmuseum"},"ChartMuseum"),"."),(0,o.kt)("p",null,"In Rancher, you can add the custom Helm chart repository with only a catalog name and the URL address of the chart repository."),(0,o.kt)("h2",{id:"catalog-fields"},"Catalog Fields"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"adding your catalog")," to Rancher, you'll provide the following information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name for your custom catalog to distinguish the repositories in Rancher")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Catalog URL"),(0,o.kt)("td",{parentName:"tr",align:null},"URL of your custom chart repository")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Use Private Catalog"),(0,o.kt)("td",{parentName:"tr",align:null},"Selected if you are using a private repository that requires authentication")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username (Optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Username or OAuth Token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Password (Optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"If you are authenticating using a username, enter the associated password. If you are using an OAuth token, use ",(0,o.kt)("inlineCode",{parentName:"td"},"x-oauth-basic"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Branch"),(0,o.kt)("td",{parentName:"tr",align:null},"For a Git repository, the branch name. Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"master"),". For a Helm Chart repository, this field is ignored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Helm version"),(0,o.kt)("td",{parentName:"tr",align:null},"The Helm version that will be used to deploy all of the charts in the catalog. This field cannot be changed later. For more information, refer to the ",(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher#catalog-helm-deployment-versions"},"section on Helm versions."))))),(0,o.kt)("h2",{id:"private-repositories"},"Private Repositories"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,o.kt)("p",null,"Private Git or Helm chart repositories can be added into Rancher using either credentials, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Password"),". Private Git repositories also support authentication using OAuth tokens."),(0,o.kt)("h3",{id:"using-username-and-password"},"Using Username and Password"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"adding the catalog"),", select the ",(0,o.kt)("strong",{parentName:"p"},"Use private catalog")," checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Password")," for your Git or Helm repository."))),(0,o.kt)("h3",{id:"using-an-oauth-token"},"Using an OAuth token"),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://github.blog/2012-09-21-easier-builds-and-deployments-using-git-over-https-and-oauth/"},"using Git over HTTPS and OAuth")," for more details on how OAuth authentication works."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"OAuth token"),"\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"repo")," permission selected, and click ",(0,o.kt)("strong",{parentName:"p"},"Generate token"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"adding the catalog"),", select the ",(0,o.kt)("strong",{parentName:"p"},"Use private catalog")," checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"Username"),", provide the Git generated OAuth token. For ",(0,o.kt)("inlineCode",{parentName:"p"},"Password"),", enter ",(0,o.kt)("inlineCode",{parentName:"p"},"x-oauth-basic"),"."))))}m.isMDXComponent=!0}}]);