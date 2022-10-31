"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92412],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||s;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16784:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Global Permissions"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",title:"Global Permissions",description:"Permissions are individual access rights that you can assign when selecting a custom permission for a user.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"2022/10/29",frontMatter:{title:"Global Permissions"},sidebar:"tutorialSidebar",previous:{title:"Role-Based Access Control (RBAC)",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac"},next:{title:"Cluster and Project Roles",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"}},p={},m=[{value:"Global Permission Assignment",id:"global-permission-assignment",level:2},{value:"Global Permissions for New Local Users",id:"global-permissions-for-new-local-users",level:3},{value:"Global Permissions for Users with External Authentication",id:"global-permissions-for-users-with-external-authentication",level:3},{value:"Custom Global Permissions",id:"custom-global-permissions",level:2},{value:"Custom Global Permissions Reference",id:"custom-global-permissions-reference",level:3},{value:"Configuring Default Global Permissions",id:"configuring-default-global-permissions",level:3},{value:"Configuring Global Permissions for Individual Users",id:"configuring-global-permissions-for-individual-users",level:3},{value:"Configuring Global Permissions for Groups",id:"configuring-global-permissions-for-groups",level:3},{value:"Refreshing Group Memberships",id:"refreshing-group-memberships",level:3}],c={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Permissions")," are individual access rights that you can assign when selecting a custom permission for a user."),(0,s.kt)("p",null,"Global Permissions define user authorization outside the scope of any particular cluster. Out-of-the-box, there are three default global permissions: ",(0,s.kt)("inlineCode",{parentName:"p"},"Administrator"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Standard User")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"User-base"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Administrator:")," These users have full control over the entire Rancher system and all clusters within it.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{id:"user"}),"**Standard User:** These users can create new clusters and use them. Standard users can also assign other users permissions to their clusters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"User-Base:")," User-Base users have login-access only."))),(0,s.kt)("p",null,"You cannot update or delete the built-in Global Permissions."),(0,s.kt)("h2",{id:"global-permission-assignment"},"Global Permission Assignment"),(0,s.kt)("p",null,"Global permissions for local users are assigned differently than users who log in to Rancher using external authentication."),(0,s.kt)("h3",{id:"global-permissions-for-new-local-users"},"Global Permissions for New Local Users"),(0,s.kt)("p",null,"When you create a new local user, you assign them a global permission as you complete the ",(0,s.kt)("strong",{parentName:"p"},"Add User")," form."),(0,s.kt)("p",null,"To see the default permissions for new users, go to the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,s.kt)("strong",{parentName:"p"},"Security > Roles.")," On the ",(0,s.kt)("strong",{parentName:"p"},"Global")," tab, there is a column named ",(0,s.kt)("strong",{parentName:"p"},"New User Default.")," When adding a new local user, the user receives all  default global permissions that are marked as checked in this column. You can ",(0,s.kt)("a",{parentName:"p",href:"#configuring-default-global-permissions"},"change the default global permissions to meet your needs.")),(0,s.kt)("h3",{id:"global-permissions-for-users-with-external-authentication"},"Global Permissions for Users with External Authentication"),(0,s.kt)("p",null,"When a user logs into Rancher using an external authentication provider for the first time, they are automatically assigned the  ",(0,s.kt)("strong",{parentName:"p"},"New User Default")," global permissions. By default, Rancher assigns the ",(0,s.kt)("strong",{parentName:"p"},"Standard User")," permission for new users."),(0,s.kt)("p",null,"To see the default permissions for new users, go to the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,s.kt)("strong",{parentName:"p"},"Security > Roles.")," On the ",(0,s.kt)("strong",{parentName:"p"},"Global")," tab, there is a column named ",(0,s.kt)("strong",{parentName:"p"},"New User Default.")," When adding a new local user, the user receives all default global permissions that are marked as checked in this column, and you can ",(0,s.kt)("a",{parentName:"p",href:"#configuring-default-global-permissions"},"change them to meet your needs.")),(0,s.kt)("p",null,"Permissions can be assigned to an individual user with ",(0,s.kt)("a",{parentName:"p",href:"#configuring-global-permissions-for-existing-individual-users"},"these steps.")),(0,s.kt)("p",null,"As of Rancher v2.4.0, you can ",(0,s.kt)("a",{parentName:"p",href:"#configuring-global-permissions-for-groups"},"assign a role to everyone in the group at the same time")," if the external authentication provider supports groups."),(0,s.kt)("h2",{id:"custom-global-permissions"},"Custom Global Permissions"),(0,s.kt)("p",null,"Using custom permissions is convenient for providing users with narrow or specialized access to Rancher."),(0,s.kt)("p",null,"When a user from an ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-authentication"},"external authentication source")," signs into Rancher for the first time, they're automatically assigned a set of global permissions (hereafter, permissions). By default, after a user logs in for the first time, they are created as a user and assigned the default ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," permission. The standard ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," permission allows users to login and create clusters."),(0,s.kt)("p",null,"However, in some organizations, these permissions may extend too much access. Rather than assigning users the default global permissions of ",(0,s.kt)("inlineCode",{parentName:"p"},"Administrator")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Standard User"),", you can assign them a more restrictive set of custom global permissions."),(0,s.kt)("p",null,"The default roles, Administrator and Standard User, each come with multiple global permissions built into them. The Administrator role includes all global permissions, while the default user role includes three global permissions: Create Clusters, Use Catalog Templates, and User Base, which is equivalent to the minimum permission to log in to Rancher. In other words, the custom global permissions are modularized so that if you want to change the default user role permissions, you can choose which subset of global permissions are included in the new default user role."),(0,s.kt)("p",null,"Administrators can enforce custom global permissions in multiple ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuring-default-global-permissions"},"Changing the default permissions for new users")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuring-global-permissions-for-individual-users"},"Configuring global permissions for individual users")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuring-global-permissions-for-groups"},"Configuring global permissions for groups"))),(0,s.kt)("h3",{id:"custom-global-permissions-reference"},"Custom Global Permissions Reference"),(0,s.kt)("p",null,"The following table lists each custom global permission available and whether it is included in the default global permissions, ",(0,s.kt)("inlineCode",{parentName:"p"},"Administrator"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Standard User")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"User-Base"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Custom Global Permission"),(0,s.kt)("th",{parentName:"tr",align:null},"Administrator"),(0,s.kt)("th",{parentName:"tr",align:null},"Standard User"),(0,s.kt)("th",{parentName:"tr",align:null},"User-Base"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Create Clusters"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Create RKE Templates"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Authentication"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Catalogs"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Cluster Drivers"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Node Drivers"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage PodSecurityPolicy Templates"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Roles"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Settings"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Manage Users"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Use Catalog Templates"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"User Base","*"," (Basic log-in access)"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"*","This role has two names:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"When you go to the ",(0,s.kt)("b",null,"Users")," tab and edit a user's global role, this role is called ",(0,s.kt)("b",null,"Login Access")," in the custom global permissions list."),(0,s.kt)("li",{parentName:"ul"},"When you go to the ",(0,s.kt)("b",null,"Security")," tab and edit the roles from the roles page, this role is called ",(0,s.kt)("b",null,"User Base.")))),(0,s.kt)("p",null,"For details on which Kubernetes resources correspond to each global permission, you can go to the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view in the Rancher UI. Then click ",(0,s.kt)("strong",{parentName:"p"},"Security > Roles")," and go to the ",(0,s.kt)("strong",{parentName:"p"},"Global")," tab. If you click an individual role, you can refer to the ",(0,s.kt)("strong",{parentName:"p"},"Grant Resources")," table to see all of the operations and resources that are permitted by the role."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Notes:")),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Each permission listed above is comprised of multiple individual permissions not listed in the Rancher UI. For a full list of these permissions and the rules they are comprised of, access through the API at ",(0,s.kt)("inlineCode",{parentName:"li"},"/v3/globalRoles"),"."),(0,s.kt)("li",{parentName:"ul"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,s.kt)("inlineCode",{parentName:"li"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource."))),(0,s.kt)("h3",{id:"configuring-default-global-permissions"},"Configuring Default Global Permissions"),(0,s.kt)("p",null,"If you want to restrict the default permissions for new users, you can remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," permission as default role and then assign multiple individual permissions as default instead. Conversely, you can also add administrative permissions on top of a set of other standard permissions."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Default roles are only assigned to users added from an external authentication provider. For local users, you must explicitly assign global permissions when adding a user to Rancher. You can customize these global permissions when adding the user.")),(0,s.kt)("p",null,"To change the default global permissions that are assigned to external users upon their first log in, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,s.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu. Make sure the ",(0,s.kt)("strong",{parentName:"p"},"Global")," tab is selected.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Find the permissions set that you want to add or remove as a default. Then edit the permission by selecting ",(0,s.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you want to add the permission as a default, Select ",(0,s.kt)("strong",{parentName:"p"},"Yes: Default role for new users")," and then click ",(0,s.kt)("strong",{parentName:"p"},"Save"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you want to remove a default permission, edit the permission and select ",(0,s.kt)("strong",{parentName:"p"},"No")," from ",(0,s.kt)("strong",{parentName:"p"},"New User Default"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The default global permissions are configured based on your changes. Permissions assigned to new users display a check in the ",(0,s.kt)("strong",{parentName:"p"},"New User Default")," column."),(0,s.kt)("h3",{id:"configuring-global-permissions-for-individual-users"},"Configuring Global Permissions for Individual Users"),(0,s.kt)("p",null,"To configure permission for a user,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to the ",(0,s.kt)("strong",{parentName:"p"},"Users")," tab.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On this page, go to the user whose access level you want to change and click ",(0,s.kt)("strong",{parentName:"p"},"\u22ee"," > Edit."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"Global Permissions")," section, click ",(0,s.kt)("strong",{parentName:"p"},"Custom."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the boxes for each subset of permissions you want the user to have access to.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Save.")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Result:")," The user's global permissions have been updated.")),(0,s.kt)("h3",{id:"configuring-global-permissions-for-groups"},"Configuring Global Permissions for Groups"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,s.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to assign permissions to the entire group at once, so that the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,s.kt)("p",null,"After you assign a custom global role to a group, the custom global role will be assigned to a user in the group when they log in to Rancher."),(0,s.kt)("p",null,"For existing users, the new permissions will take effect when the users log out of Rancher and back in again, or when an administrator ",(0,s.kt)("a",{parentName:"p",href:"#refreshing-group-memberships"},"refreshes the group memberships.")),(0,s.kt)("p",null,"For new users, the new permissions take effect when the users log in to Rancher for the first time. New users from this group will receive the permissions from the custom global role in addition to the ",(0,s.kt)("strong",{parentName:"p"},"New User Default")," global permissions. By default, the ",(0,s.kt)("strong",{parentName:"p"},"New User Default")," permissions are equivalent to the ",(0,s.kt)("strong",{parentName:"p"},"Standard User")," global role, but the default permissions can be ",(0,s.kt)("a",{parentName:"p",href:"#configuring-default-global-permissions"},"configured.")),(0,s.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom global role that was assigned to the group. They would continue to have any remaining roles that were assigned to them, which would typically include the roles marked as ",(0,s.kt)("strong",{parentName:"p"},"New User Default.")," Rancher will remove the permissions that are associated with the group when the user logs out, or when an administrator ",(0,s.kt)("a",{parentName:"p",href:"#refreshing-group-memberships"},"refreshes group memberships,")," whichever comes first."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Prerequisites:")," You can only assign a global role to a group if:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"You have set up an ",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,s.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,s.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider"))),(0,s.kt)("p",null,"To assign a custom global role to a group, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the ",(0,s.kt)("strong",{parentName:"li"},"Global")," view, go to ",(0,s.kt)("strong",{parentName:"li"},"Security > Groups.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Assign Global Role.")),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Select Group To Add")," field, choose the existing group that will be assigned the custom global role."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Global Permissions,")," ",(0,s.kt)("strong",{parentName:"li"},"Custom,")," and/or ",(0,s.kt)("strong",{parentName:"li"},"Built-in")," sections, select the permissions that the group should have."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The custom global role will take effect when the users in the group log into Rancher."),(0,s.kt)("h3",{id:"refreshing-group-memberships"},"Refreshing Group Memberships"),(0,s.kt)("p",null,"When an administrator updates the global permissions for a group, the changes take effect for individual group members after they log out of Rancher and log in again."),(0,s.kt)("p",null,"To make the changes take effect immediately, an administrator or cluster owner can refresh group memberships."),(0,s.kt)("p",null,"An administrator might also want to refresh group memberships if a user is removed from a group in the external authentication service. In that case, the refresh makes Rancher aware that the user was removed from the group."),(0,s.kt)("p",null,"To refresh group memberships,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the ",(0,s.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,s.kt)("strong",{parentName:"li"},"Security > Users.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Refresh Group Memberships."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Any changes to the group members' permissions will take effect."))}g.isMDXComponent=!0}}]);