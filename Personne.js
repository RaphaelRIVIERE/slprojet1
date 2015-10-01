// Classe Personne : Recupere les items personnes dans le ficher personne.js et retourne les valeurs de chaque champs au Controlleur


function Personne(){

	var id = null;
	var nom = null;
	var prenom = null;
	var file = "personne.json";
	

// ************** CONSTRUCTOR *********************s


constructor(){
	id = null;
	nom = null;
	prenom = null;
	file = "personne.json";
}

// ************** METHODE getNext *********************s


	this.getNext = function(){
	if (id==null){id=-1;}
	
	id = id + 1
	
	if(file.length() < id ){
	$.each (file, function (key, val)){
		if key == id{
			this.id = val.id;
			this.nom = val.nom;
			this.prenom = val.prenom;
			}
	}
	return (this.id,this.nom,this.prenom);
	}
	}
	
	
	// ************** METHODE GETTEURS *********************

	this.getId = function(){
		return this.id;
	}
	
	this.getName = function(){
		return this.nom;
	}
	
	this.getPrenom = function(){
		return this.Prenom;
	}
	
	
	// ************** METHODE SETTEURS *********************
	
	
	this.setId = function(id){
		this.id = id;
	}
	
	
	this.setNom = function(nom){
		this.nom = nom;
	}
	
	this.setPrenom = function(prenom){
		this.prenom = prenom;
	}