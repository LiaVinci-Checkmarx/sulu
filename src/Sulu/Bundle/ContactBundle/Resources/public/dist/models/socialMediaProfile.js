define(["mvc/relationalmodel","mvc/hasone","sulucontact/models/socialMediaProfileType"],function(a,b,c){return a({urlRoot:"",defaults:{id:null,username:"",socialMediaProfileType:null},relations:[{type:b,key:"socialMediaProfileType",relatedModel:c}]})});