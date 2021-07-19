

(function test(){console.log("test")})();
	{
			let str = [
				{
					name:"Chino",
					lastname:"Concepcion",
					age:20,
					likes:["volleyball"],
					wants:
						{
							phone:'samsung',
							laptop:'acer'
						}
				},
				{
					name:"Chino1",
					lastname:"Concepcion1",
					age:201,
					likes:["computer","cellphone"],
					wants:
						{
							phone:'samsung',
							laptop:'acer'
						}
				},
				{
					name:"Chino2",
					lastname:"Concepcion1",
					age:201,
					likes:["computer","cellphone"],
					wants:
						{
							phone:'samsung',
							laptop:'acer'
						}
				}
				
				];
				console.log(str);
			var text = "";
 			for(var i = 0; i < str.length; i++)
			{			
				text += "<br>" +' '+ str[i].name +' '+ str[i].lastname +' '+ str[i].age +' '+ str[i].likes +' '+ str[i].wants.phone +' '+ str[i].wants.laptop +' ';
					for(var j=0;j<str[i].likes.length;j++)
					{
						if(j<1){
						text += str[i].likes[j] + "";
						}else{
						text += " and " + str[i].likes[j];
						}
				     
					}				
			} 
			
	}

