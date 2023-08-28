const page2 = document.querySelector(".page2");
								const vvv = document.querySelector(".title-head");
								const nav = document.querySelector(".burger");
							const sidenav = document.querySelector(".side-nav");
							const sidecon = document.querySelector(".side-container");
							const listanimal = document.querySelector(".animal-list");
							
						
		  const animl1 = document.querySelector("#animl1");
	  	const animl2 = document.querySelector("#animl2");
			const animl3 = document.querySelector("#animl3");
			const animl4 = document.querySelector("#animl4");
			const animl5 = document.querySelector("#animl5");
			const animl6 = document.querySelector("#animl6");
			const animlk1 = document.querySelector("#animlk1");
		  const animlk2 = document.querySelector("#animlk2");
			const animlk3 = document.querySelector("#animlk3");
			const animlk4 = document.querySelector("#animlk4");
			const animlk5 = document.querySelector("#animlk5");
			const animlk6 = document.querySelector("#animlk6");
			
const bpic = document.querySelector("#bpic");
const newb = document.querySelector(".newb");
const page3 = document.querySelector(".page3");
const updname = document.querySelector("#updname");
const updname2 = document.querySelector("#updname2");
const exit = document.querySelector(".exit");
							nav.addEventListener("click", function (){
										nav.classList.toggle("rotate");
										sidenav.classList.toggle("addcss-in");
										sidecon.classList.toggle("fade");
							})
							let forcond =0;
let reverse=60.0;

page3.addEventListener("scroll", function (e){
						forcond = parseInt(page3.scrollTop);
						
						if(forcond < 50 ){
						exit.style.opacity="1"	;
								exit.style.transform="scale(1)"	;	
						}else{exit.style.transform="scale(0)"	;	
						exit.style.opacity="0"	;
						}
					if(forcond < 100){
						reverse = 40 - (page3.scrollTop / 5);
						updname.style.fontSize = `${reverse}px`;	
						updname.style.fontWeight="normal";
						}
						else{
								reverse = 20;
						updname.style.fontSize = `${reverse}px`;
						updname.style.fontWeight="bold";
						}
				console.log(page3.scrollTop);
			console.log(reverse);
			
			
		if( forcond > 30){
	console.log("umay");
				newb.classList.add("btoggle");
			
		}else{
							newb.classList.remove("btoggle");
							
							}					
							});
							exit.addEventListener("click", function (){
											
											page3.style.display="none";
							});
					document.onclick = function(e){
						console.log(e.target.id);
						 if(e.target.id === "side-container" ){
									sidenav.classList.toggle("addcss-in");	
									sidecon.classList.toggle("fade");
								nav.classList.toggle("rotate");
									}
										
									if(e.target.id === "link1"){
									     page2.classList.add("addpage2");
									     
													vvv.textContent = "Pet Animals";
													animl1.textContent = "Dog";
													animl2.textContent = "Camel";
animl3.textContent = "Cat";
animl4.textContent = "Donkey";
animl5.textContent = "Ferret";
animl6.textContent = "Goat";


animlk1.style.backgroundImage=`url("./images/${animlk1.textContent}2.jpeg")`
animlk2.style.backgroundImage=`url("./images/${animlk2.textContent}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent}2.jpeg")`
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent}2.jpeg")`

									}
									if(e.target.id === "link2"){
									     page2.classList.add("addpage2");
									     
													vvv.textContent = "Forest Animals";
														animl1.textContent = "Antelope";
													animl2.textContent = "Caracal";
animl3.textContent = "Cheetah";
animl4.textContent = "Crocodile";
animl5.textContent = "Deer";
animl6.textContent = "Dhole";

animlk1.style.backgroundImage=`url("./images/${animlk1.textContent}2.jpeg")`
animlk2.style.backgroundImage=`url("./images/${animlk2.textContent}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent}2.jpeg")`
animlk3.style.backgroundPosition="right";
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent}2.jpeg")`

									}
									if(e.target.id === "link3"){
										
									     page2.classList.add("addpage2");
													vvv.textContent = "Ocean Animals";
														animl1.textContent = "Shark";
													animl2.textContent = "Octopus";
animl3.textContent = "Squid";
animl4.textContent = "Crab";
animl5.textContent = "Clam";
animl6.textContent = "Turtle";

animlk1.style.backgroundImage=`url("./images/${animlk1.textContent}2.jpeg")`
animlk2.style.backgroundImage=`url("./images/${animlk2.textContent}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent}2.jpeg")`
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent}2.jpeg")`
									}
									if(e.target.id === "link4"){
										
									     page2.classList.add("addpage2");
													vvv.textContent = "Reptiles";
														animl1.textContent = "Snake";
													animl2.textContent = "Lizard";
animl3.textContent = "Dinosaurs";
animl4.textContent = "Chameleon";
animl5.textContent = "Iguanidae";
animl6.textContent = "Horned lizard";

animlk1.style.backgroundImage=`url("./images/${animlk1.textContent}2.jpeg")`
animlk2.style.backgroundImage=`url("./images/${animlk2.textContent}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent}2.jpeg")`
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent.replace(/\s/g,'')}2.jpeg")`		
									}
									if(e.target.id === "link6"){
									
									     page2.classList.add("addpage2");
													vvv.textContent = "Tiger species";
														animl1.textContent = "Siberian tiger";
													animl2.textContent = "Bengal tiger";
animl3.textContent = "South China tiger";
animl4.textContent = "Javan tiger";
animl5.textContent = "Sumatran tiger";
animl6.textContent = "Bali tiger";

animlk1.style.backgroundImage=`url("./images/${animlk1.textContent.replace(/\s/g,'')}2.jpeg")`
animlk2.style.backgroundImage=`url("./images/${animlk2.textContent.replace(/\s/g,'')}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent.replace(/\s/g,'')}2.jpeg")`
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent.replace(/\s/g,'')}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent.replace(/\s/g,'')}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent.replace(/\s/g,'')}2.jpeg")`

									}
									if(e.target.id === "link5"){
									
									     page2.classList.add("addpage2");
													vvv.textContent = "Insects";
														animl1.textContent = "Dragonfly";
													animl2.textContent = "Beetle";
animl3.textContent = "Bee";
animl4.textContent = "Butterfly";
animl5.textContent = "Ant";
animl6.textContent = "Mosquito";

animlk1.style.backgroundImage=`url("./images/${animlk1.textContent}2.jpeg")`

animlk2.style.backgroundImage=`url("./images/${animlk2.textContent}2.jpeg")`
animlk3.style.backgroundImage=`url("./images/${animlk3.textContent}2.jpeg")`
animlk4.style.backgroundImage=`url("./images/${animlk4.textContent}2.jpeg")`
animlk5.style.backgroundImage=`url("./images/${animlk5.textContent}2.jpeg")`
animlk6.style.backgroundImage=`url("./images/${animlk6.textContent}2.jpeg")`
									}

									if(e.target.id === "closebtn"){
									
									     page2.classList.remove("addpage2");
										
									}
									if(e.target.id === "animlk1"){
													page3.style.display = "block";
													updname.textContent= `${animlk1.textContent}`
													updname2.textContent= `${animlk1.textContent}`
									bpic.style.backgroundImage=`url("./images/${animlk1.textContent.replace(/\s/g,'')}2.jpeg")`;
									
									
									}
										if(e.target.id === "animlk2"){
												updname.textContent= `${animlk2.textContent}`		
												updname2.textContent= `${animlk2.textContent}`
												page3.style.display = "block";
												bpic.style.backgroundImage=`url("./images/${animlk2.textContent.replace(/\s/g,'')}2.jpeg")`;
										}
											if(e.target.id === "animlk3"){
															updname.textContent= `${animlk3.textContent}`
															updname2.textContent= `${animlk3.textContent}`
															page3.style.display = "block";
															bpic.style.backgroundImage=`url("./images/${animlk3.textContent.replace(/\s/g,'')}2.jpeg")`;
											}
												if(e.target.id === "animlk4"){
																updname.textContent= `${animlk4.textContent}`
																updname2.textContent= `${animlk4.textContent}`
																page3.style.display = "block";
																bpic.style.backgroundImage=`url("./images/${animlk4.textContent.replace(/\s/g,'')}2.jpeg")`;
												}
													if(e.target.id === "animlk5"){
																	updname.textContent= `${animlk5.textContent}`
																	updname2.textContent= `${animlk5.textContent}`
																	page3.style.display = "block";
									bpic.style.backgroundImage=`url("./images/${animlk5.textContent.replace(/\s/g,'')}2.jpeg")`;								
													}
														if(e.target.id === "animlk6"){
																		updname.textContent= `${animlk6.textContent}`
																		updname2.textContent= `${animlk6.textContent}`
																		page3.style.display = "block";
																		bpic.style.backgroundImage=`url("./images/${animlk6.textContent.replace(/\s/g,'')}2.jpeg")`;
														}
														
														//description updates #copy&paste
											
										console.log(page2.innerHTML);		
													
	const descanimal = document.querySelector("#descofaniml");
	
	//Pet Animals Description
if(	updname.textContent == "Dog"){
				descanimal.textContent=`Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. ... They are a popular pet because they are usually playful, friendly, loyal and listen to humans.
	All dogs are descended from wolves, by domestication and artificial selection. This is known because DNA genome analysis has been done to discover this. They have been bred by humans. The earliest known fossil of a domestic dog is from 31,700 years ago in Belgium.Dogs have lived with people for at least 30,000 years. In 2013, a study was published that showed that the skull and teeth of a canid, dated to 33,000 years ago, had characteristics closer to a dog than to a wolf, and the authors conclude that "this specimen may represent a dog in the very early stages of domestication, i.e. an “incipient” dog." The researchers go on to suggest that it was, however, a line that did not lead to modern dogs. Genetically, this material is closer to that of a modern dog than to that of a wolf. Other signs of domestication are that sometimes, dogs were buried together with humans. Evidence of this is a tomb in Bonn, where a man of about 50 years of age, a woman of about 25 years of age, the remains of a dog, plus other artifacts were found. Radiocarbon dating showed that the human bones were between 13.300 and 14.000 years old.`;
}
if(	updname.textContent == "Cat"){
				descanimal.textContent=`The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.
				The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. A predator that is most active at dawn and dusk, the cat is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals.[7] It secretes and perceives pheromones.[8]
Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to five kittens.[9] Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Failure to control breeding of pet cats by spaying and neutering, as well as abandonment of pets, resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and reptile species, and evoking population control.[10]
Cats were first domesticated in the Near East around 7500 BC.[11] It was long thought that cat domestication was initiated in ancient Egypt, as since around 3100 BC veneration was given to cats in ancient Egypt.[12][13] As of 2021 there are an estimated 220 million owned and 480 million stray cats in the world.[14][15] As of 2017, the domestic cat was the second-most popular pet in the United States, with 95 million cats owned.[16][17][18] In the United Kingdom, 26% of adults have a cat with an estimated population of 10.9 million pet cats as of 2020.[19]`;
}
if(	updname.textContent == "Camel"){
				descanimal.textContent=`A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as "humps" on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat) and textiles (fiber and felt from hair). Camels are working animals especially suited to their desert habitat and are a vital means of transport for passengers and cargo. There are three surviving species of camel. The one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel makes up 6%. The Wild Bactrian camel is a separate species and is now critically endangered.
	The word camel is also used informally in a wider sense, where the more correct term is "camelid", to include all seven species of the family Camelidae: the true camels (the above three species), along with the "New World" camelids: the llama, the alpaca, the guanaco, and the vicuña.[7] The word itself is derived via Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew, Arabic or Phoenician: gāmāl.			
The average life expectancy of a camel is 40 to 50 years.[12] A full-grown adult dromedary camel stands 1.85 m (6 ft 1 in) at the shoulder and 2.15 m (7 ft 1 in) at the hump.[13] Bactrian camels can be a foot taller. Camels can run at up to 65 km/h (40 mph) in short bursts and sustain speeds of up to 40 km/h (25 mph).[14] Bactrian camels weigh 300 to 1,000 kg (660 to 2,200 lb) and dromedaries 300 to 600 kg (660 to 1,320 lb). The widening toes on a camel's hoof provide supplemental grip for varying soil sediments.[15]

The male dromedary camel has an organ called a dulla in its throat, a large, inflatable sac he extrudes from his mouth when in rut to assert dominance and attract females. It resembles a long, swollen, pink tongue hanging out of the side of its mouth.[16] Camels mate by having both male and female sitting on the ground, with the male mounting from behind.[17] The male usually ejaculates three or four times within a single mating session.[18] Camelids are the only ungulates to mate in a sitting position.[19]				`;
}
if(	updname.textContent == "Ferret"){
				descanimal.textContent=`A ferret is a small, furry creature with a cone-shaped nose, long tail and a long, pear-shaped body with short legs and long claws. Ferrets are related to wolverines, ermines, minks and weasels in the Mustela genus. They are popular, though often controversial, pets. ... There are no naturally wild domesticated ferrets.
	The history of the ferret's domestication is uncertain, like that of most other domestic animals, but it is likely that they have been domesticated for at least 2,500 years. They are still used for hunting rabbits in some parts of the world, but increasingly they are kept only as pets.
Being so closely related to polecats, ferrets easily hybridize with them, and this has occasionally resulted in feral colonies of polecat–ferret hybrids that have caused damage to native fauna, especially in New Zealand.[3] As a result, New Zealand and some other parts of the world have imposed restrictions on the keeping of ferrets.			
				`;
}
if(	updname.textContent == "Goat"){
				descanimal.textContent=`
				The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat.[1] It is one of the oldest domesticated species of animal, according to archaeological evidence that its earliest domestication occurred in Iran at 10,000 calibrated calendar years ago.[2]
				Goat, any ruminant and hollow-horned mammal belonging to the genus Capra. Related to the sheep, the goat is lighter of build, has horns that arch backward, a short tail, and straighter hair. Male goats, called bucks or billys, usually have a beard. Females are called does or nannys, and immature goats are called kids`;
}
if(	updname.textContent == "Donkey"){
				descanimal.textContent=`
				The donkey or ass (Equus africanus asinus)[1][2] is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years. There are more than 40 million donkeys in the world, mostly in underdeveloped countries, where they are used principally as draught or pack animals. Working donkeys are often associated with those living at or below subsistence levels. Small numbers of donkeys are kept for breeding or as pets in developed countries. Donkeys can also be used as livestock guardians.
				A donkey is a four-legged domesticated farm animal with hooves that's related to the horse. Donkeys are known for the braying sound they make and their long ears. ... In some places, donkeys are ridden like horses or kept as calming companions for nervous horses.
				A male donkey or ass is called a jack, a female a jenny or jennet;[3][4][5] a young donkey is a foal.[5] Jack donkeys are often used to mate with female horses to produce mules; the biological "reciprocal" of a mule, from a stallion and jenny as its parents instead, is called a hinny.
Asses were first domesticated around 3000 BC, probably in Egypt or Mesopotamia,[6][7] and have spread around the world. They continue to fill important roles in many places today. While domesticated species are increasing in numbers, the African wild ass is a critically endangered species. As beasts of burden and companions, asses and donkeys have worked together with humans for millennia.`;
}
 
 // Forest Animals Description
 
if(	updname.textContent == "Antelope"){
				descanimal.innerHTML=`Antelopes are deer-like herbivores that vary enormously in size, depending on the species. They have long legs, a slender neck, and large ears. One of the characteristic features of antelopes are their horns, which have a bone core covered in keratin (the same substance which makes our hair and fingernails).
				Antelope comprise a wastebasket taxon (miscellaneous group) within the family Bovidae, encompassing all Old World ruminants that are not bovines, sheep, or goats. A group of antelope is called a herd.[1]
Unlike deer antlers, which are shed and grown annually, antelope horns grow continuously.[2]
The English word "antelope" first appeared in 1417 and is derived from the Old French antelop, itself derived from Medieval Latin ant(h)alopus, which in turn comes from the Byzantine Greek word ἀνθόλωψ, anthólops, first attested in Eustathius of Antioch (c. 336), according to whom it was a fabulous animal "haunting the banks of the Euphrates, very savage, hard to catch and having long, saw-like horns capable of cutting down trees".[3] It perhaps derives from Greek ἀνθος, anthos (flower) and ώψ, ops (eye), perhaps meaning "beautiful eye" or alluding to the animals' long eyelashes. This, however, may be a later folk etymology. The word talopus and calopus, from Latin, came to be used in heraldry. In 1607, it was first used for living, cervine animals.`;
				}
				
if(	updname.textContent == "Cheetah"){
				descanimal.textContent=`
				The cheetah (Acinonyx jubatus) is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph), and as such has several adaptations for speed, including a light build, long thin legs and a long tail. It typically reaches 67–94 cm (26–37 in) at the shoulder, and the head-and-body length is between 1.1 and 1.5 m (3 ft 7 in and 4 ft 11 in). Adults weigh between 20 and 65 kg (44 and 143 lb). Its head is small, rounded, and has a short snout and black tear-like facial streaks. The coat is typically tawny to creamy white or pale buff and is mostly covered with evenly spaced, solid black spots. Four subspecies are recognised.
				The cheetah is the world's fastest land mammal. With acceleration that would leave most automobiles in the dust, a cheetah can go from 0 to 60 miles an hour in only three seconds. These big cats are quite nimble at high speed and can make quick and sudden turns in pursuit of prey.`;
				}
if(	updname.textContent == "Caracal"){
				descanimal.textContent=`
				The caracal (Caracal caracal) /ˈkærəkæl/ is a medium-sized wild cat native to Africa, the Middle East, Central Asia, and arid areas of Pakistan and northwestern India. It is characterised by a robust build, long legs, a short face, long tufted ears, and long canine teeth. Its coat is uniformly reddish tan or sandy, while the ventral parts are lighter with small reddish markings. It reaches 40–50 cm (16–20 in) at the shoulder and weighs 8–19 kg (18–42 lb). It was first scientifically described by German naturalist Johann Christian Daniel von Schreber in 1776. Three subspecies are recognised.
				The caracal is a sleek short-haired cat with a reddish brown coat and long tufts of black hairs on the tips of its pointed ears. Long-legged and short-tailed, it stands 40–45 cm (16–18 inches) tall at the shoulder and varies from 66 to 76 cm (about 26 to 30 inches) in length excluding its 20–25-cm (7.9–9.8-inch) tail.`;
				}
if(	updname.textContent == "Crocodile"){
				descanimal.textContent=`
				Crocodiles (subfamily Crocodylinae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. Crocodylinae, all of whose members are considered true crocodiles, is classified as a biological subfamily. A broader sense of the term crocodile, Crocodylidae (which includes Tomistoma), is not used in this article. The term crocodile here applies to only the species within the subfamily of Crocodylinae. The term is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae), and all other living and fossil Crocodylomorpha.
				Crocodiles have powerful jaws with many conical teeth and short legs with clawed webbed toes. They share a unique body form that allows the eyes, ears, and nostrils to be above the water surface while most of the animal is hidden below. The tail is long and massive, and the skin is thick and plated.`;
				}
if(	updname.textContent == "Deer"){
				descanimal.textContent=`
				Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the red deer, the fallow deer, and the chital; and the Capreolinae, including the reindeer (caribou), the roe deer, the mule deer, and the moose. Female reindeer, and male deer of all species except the Chinese water deer, grow and shed new antlers each year. In this they differ from permanently horned antelope, which are part of a different family (Bovidae) within the same order of even-toed ungulates (Artiodactyla).
				Members of the deer family (Cervidae) are cloven-hoofed ungulates that typically have compact torsos with long, slender legs and small tails — and most males have antlers. The family is quite large, and includes caribou, elk, moose, muntjacs and wapiti.
				The musk deer (Moschidae) of Asia and chevrotains (Tragulidae) of tropical African and Asian forests are separate families that are also in the ruminant clade Ruminantia; they are not especially closely related to Cervidae.

Deer appear in art from Paleolithic cave paintings onwards, and they have played a role in mythology, religion, and literature throughout history, as well as in heraldry, such as red deer that appear in the coat of arms of Åland.[2] Their economic importance includes the use of their meat as venison, their skins as soft, strong buckskin, and their antlers as handles for knives. Deer hunting has been a popular activity since at least the Middle Ages and remains a resource for many families today.
				`;
				}
if(	updname.textContent == "Dhole"){
				descanimal.textContent=`
				The dhole is a canid native to Central, South, East, and Southeast Asia. Other English names for the species include Asian wild dog, Asiatic wild dog, Indian wild dog, whistling dog, red dog, and mountain wolf.
				The dhole (/doʊl/; Cuon alpinus) is a canid native to Central, South, East, and Southeast Asia. Other English names for the species include Asian wild dog, Asiatic wild dog,[2] Indian wild dog,[3] whistling dog, red dog,[4] and mountain wolf.[5][page needed] It is genetically close to species within the genus Canis,[6](Fig. 10) but distinct in several anatomical aspects: its skull is convex rather than concave in profile, it lacks a third lower molar[7] and the upper molars sport only a single cusp as opposed to between two and four.[8] During the Pleistocene, the dhole ranged throughout Asia, Europe, and North America but became restricted to its historical range 12,000–18,000 years ago.[9]
				 `;
				}			
				//Ocean Animals Description
if(	updname.textContent == "Shark"){
				descanimal.textContent=`Though there are exceptions, sharks typically have a tough skin that is dull gray in colour and is roughened by toothlike scales. They also usually have a muscular, asymmetrical, upturned tail; pointed fins; and a pointed snout extending forward and over a crescentic mouth set with sharp triangular teeth.
				Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the rays. However, the term "shark" has also been used for extinct members of the subclass Elasmobranchii outside the Selachimorpha, such as Cladoselache and Xenacanthus, as well as other Chondrichthyes such as the holocephalid eugenedontidans.
				Under this broader definition, the earliest known sharks date back to more than 420 million years ago.[3] Acanthodians are often referred to as "spiny sharks"; though they are not part of Chondrichthyes proper, they are a paraphyletic assemblage leading to cartilaginous fish as a whole. Since then, sharks have diversified into over 500 species. They range in size from the small dwarf lanternshark (Etmopterus perryi), a deep sea species of only 17 centimetres (6.7 in) in length, to the whale shark (Rhincodon typus), the largest fish in the world, which reaches approximately 12 metres (40 ft) in length.[4] Sharks are found in all seas and are common to depths of 2,000 metres (6,600 ft). They generally do not live in freshwater although there are a few known exceptions, such as the bull shark and the river shark, which can be found in both seawater and freshwater.[5] Sharks have a covering of dermal denticles that protects their skin from damage and parasites in addition to improving their fluid dynamics. They have numerous sets of replaceable teeth.[6]`;
				}
if(	updname.textContent == "Squid"){
				descanimal.textContent=`Squid are cephalopods in the superorder Decapodiformes with elongated bodies, large eyes, eight arms and two tentacles. Like all other cephalopods, squid have a distinct head, bilateral symmetry, and a mantle. They are mainly soft-bodied, like octopuses, but have a small internal skeleton in the form of a rod-like gladius or pen, made of chitin.
				Squid diverged from other cephalopods during the Jurassic and occupy a similar role to teleost fish as open water predators of similar size and behaviour. They play an important role in the open water food web. The two long tentacles are used to grab prey and the eight arms to hold and control it. The beak then cuts the food into suitable size chunks for swallowing. Squid are rapid swimmers, moving by jet propulsion, and largely locate their prey by sight. They are among the most intelligent of invertebrates, with groups of Humboldt squid having been observed hunting cooperatively. They are preyed on by sharks, other fish, sea birds, seals and cetaceans, particularly sperm whales.
				`;}
if(	updname.textContent == "Octopus"){
				descanimal.textContent=`
				Octopus (pl. octopuses, see below for variants) are soft-bodied, eight-limbed molluscs of the order Octopoda (/ɒkˈtɒpədə/, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beak, with its mouth at the center point of the eight limbs.[a] The soft body can radically alter its shape, enabling octopuses to squeeze through small gaps. They trail their eight appendages behind them as they swim. The siphon is used both for respiration and for locomotion, by expelling a jet of water. Octopuses have a complex nervous system and excellent sight, and are among the most intelligent and behaviourally diverse of all invertebrates.
				Octopuses (or octopi, if you prefer) are cephalopods, invertebrates that also include squid and cuttlefish. They have bulbous heads, large eyes, and eight very useful arms. “Cephalopod” is Greek for “head-foot,” which makes sense, since their limbs are attached directly to their head.`;}
if(	updname.textContent == "Crab"){
				descanimal.textContent=`
				Crabs are decapod crustaceans which have a very short tail and are covered with a thick shell, or exoskeleton and are armed with a single pair of claws. There are over 6,793 species of crab spread across the oceans, fresh water, and even on land. ... Crabs have five pairs of legs (the first pair are known as the claws).
				Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting "tail" (abdomen) (Greek: βραχύς, romanized: brachys = short,[2] οὐρά / οura = tail[3]), usually hidden entirely under the thorax. They live in all the world's oceans, in fresh water, and on land, are generally covered with a thick exoskeleton, and have a single pair of pincers. Many other animals with similar names – such as hermit crabs, king crabs, porcelain crabs, horseshoe crabs, stone crabs, and crab lice – are not true crabs, but many have evolved features similar to true crabs through a process known as carcinisation.
				`;}				
if(	updname.textContent == "Clam"){
				descanimal.textContent=`
				Clam is a common name for several kinds of bivalve molluscs. The word is often applied only to those that are edible and live as infauna, spending most of their lives halfway buried in the sand of the seafloor or riverbeds. Clams have two shells of equal size connected by two adductor muscles and have a powerful burrowing foot.[1] They live in both freshwater and marine environments; in salt water they prefer to burrow down into the mud and the turbidity of the water required varies with species and location; the greatest diversity of these is in North America.[2][3][4]
				Clams are invertebrates. Invertebrates are animals that do not have a backbone. Clams belong to a group of invertebrates called mollusks. ... Soft shell clams have two shells so they are known as bivalve mollusks. The shells are held together with a hinge.
				Clams in the culinary sense do not live attached to a substrate (whereas oysters and mussels do) and do not live near the bottom (whereas scallops do). In culinary usage, clams are commonly eaten marine bivalves, as in clam digging and the resulting soup, clam chowder. Many edible clams such as palourde clams are oval or triangular;[5] however, razor clams have an elongated parallel-sided shell, suggesting an old-fashioned straight razor.[6]
				`;
				}
if(	updname.textContent == "Turtle"){
				descanimal.textContent=`Turtles are reptiles with hard shells that protect them from predators. They are among the oldest and most primitive groups of reptiles, having evolved millions of years ago. ... Turtles spend most of their lives in water. They are adapted for aquatic life, with webbed feet or flippers and a streamlined body.
				Turtles are reptiles of the order Chelonia /kɪˈloʊniə/ or Testudines /tɛˈstjuːdɪniːz/. They are characterized by a bony or cartilaginous shell or carapace, developed from their ribs, that acts as a shield.[3] Testudines include both extant (living) and extinct species. Its earliest known members date from the Middle Jurassic.[1] They are one of the oldest reptile groups, more ancient than snakes or crocodilians.
				Turtles are ectotherms—commonly called cold-blooded—meaning that their internal temperature varies according to the ambient environment. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water. Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water.
Turtles have appeared in myths and folktales around the world. Some terrestrial and freshwater species are widely kept as pets. Turtles have been hunted for their meat, for use in traditional medicine, and for their carapaces. Marine turtles are often killed accidentally as bycatch in fishing nets. Turtle habitats around the world are being destroyed. As a result of these pressures, many species are threatened with extinction by 2100.[2][4][2]`;}		

//Reptiles Description

if(	updname.textContent == "Snake"){
				descanimal.textContent=`
		Snakes range in size from the size of a worm to many feet long. Their skin contains scales that may be smooth or ridged. The scales on the belly (called scutes) are thicker than those on the sides and back of a snake to provide protection as it moves. Snakes have some clear differences from other reptiles.	
		Snakes are elongated, limbless, carnivorous reptiles of the suborder Serpentes /sɜːrˈpɛntiːz/.[2] Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca. Lizards have evolved elongate bodies without limbs or with greatly reduced limbs about twenty-five times independently via convergent evolution, leading to many lineages of legless lizards.[3] These resemble snakes, but several common groups of legless lizards have eyelids and external ears, which snakes lack, although this rule is not universal (see Amphisbaenia, Dibamidae, and Pygopodidae).
			`;}			
if(	updname.textContent == "Lizard"){
				descanimal.textContent=`
				Lizards are scaly-skinned reptiles that are usually distinguished from snakes by the possession of legs, movable eyelids, and external ear openings. ... Most of the living species of lizards inhabit warm regions, but some are found near the Arctic Circle in Eurasia and others range to the southern tip of South America.
				Lizards are a widespread group of squamate reptiles, with over 6,000 species,[1] ranging across all continents except Antarctica, as well as most oceanic island chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia; some lizards are more closely related to these two excluded groups than they are to other lizards. Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon.
				Most lizards are quadrupedal, running with a strong side-to-side motion. Others are legless, and have long snake-like bodies. Some such as the forest-dwelling Draco lizards are able to glide. They are often territorial, the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo.
Lizards make use of a variety of antipredator adaptations, including venom, camouflage, reflex bleeding, and the ability to sacrifice and regrow their tails.
				`;}
if(	updname.textContent == "Dinosaurs"){
				descanimal.textContent=`
				Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 million years ago; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are modern feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage to survive the Cretaceous–Paleogene extinction event approximately 66 million years ago. Dinosaurs can therefore be divided into avian dinosaurs, or birds; and the extinct non-avian dinosaurs, which are all dinosaurs other than birds.
				Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years. In 1842, the English naturalist Sir Richard Owen coined the term Dinosauria, derived from the Greek deinos, meaning “fearfully great,” and sauros, meaning “lizard.” Dinosaur fossils have been found on all seven continents.`;}
if(	updname.textContent == "Chameleon"){
				descanimal.textContent=`
				Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015.[1] These species come in a range of colors, and many species have the ability to change color.
				Chameleons are distinguished by their zygodactylous feet; their swaying gait;[2] and crests or horns on their brow and snout. Most species, the larger ones in particular, also have a prehensile tail. Chameleons' eyes are independently mobile, but in aiming at a prey item, they focus forward in coordination, affording the animal stereoscopic vision.

Chameleons are adapted for climbing and visual hunting. They live in warm habitats that range from rainforest to desert conditions, with various species occurring in Africa, Madagascar, southern Europe, and across southern Asia as far as Sri Lanka. They have been introduced to Hawaii, California, and Florida.[3]
				A chameleon is a very unique lizard that belongs to the Chamaeleonidae family. They inhabit warm locations such as rainforests and deserts. They are known to change colors, rapidly shoot their long tongues outward, and move their eyes independently.`;}				
if(	updname.textContent == "Iguanidae"){
				descanimal.textContent=`The Iguanidae are a family of lizards composed of iguanas and related species.[1] This family consists of species such as the Green Iguana (Iguana iguana), the Lesser Antillean Iguana (Iguana delicatissima), and marine iguana (Amblyrhynchus cristatus), just to name a few.[2]
				Iguanas and iguana-type species are diverse in terms of size, appearance, and habitat. They typically flourish in tropical, warm climates, such as regions of South America and islands in the Caribbean and in the Pacific. Iguanas typically possess dorsal spines across their back, a dewlap on the neck, sharp claws, a long whip-like tail, and a stocky, squat build. Most iguanas are arboreal, living in trees, but some species tend to be more terrestrial, which means they prefer the ground. Iguanas are typically herbivores and their diets vary based on what plant life is available within their habitat. Iguanas across many species remain oviparious, and exhibit little to no parental care when their eggs hatch. They do, however, display nest-guarding behavior. Like all reptiles, they are poikilothermic, and also rely on regular periods of basking under the sun to thermoregulate.[4]
				`;}
if(	updname.textContent == "Horned lizard"){
				descanimal.textContent=`Horned lizards (Phrynosoma), also known as horny toads or horntoads, are a genus of North American lizards and the type genus of the family Phrynosomatidae. The common names refer directly to their flattened, rounded bodies and blunt snouts.
				The genus name Phrynosoma means "toad-bodied". In common with true toads (family Bufonidae), horned lizards tend to move sluggishly, often remain motionless, and rely on their remarkable camouflage to avoid detection by predators. They are adapted to arid or semiarid areas. The spines on the lizard's back and sides are modified reptile scales, which prevent water loss through the skin, whereas the horns on the head are true horns (i.e. they have a bony core). Of the 22 species of horned lizards, 15 are native to the United States. The largest-bodied and most widely distributed of the US species is the Texas horned lizard.
				Horned lizard populations continue to disappear throughout the Southwest despite protective legislation. The Texas horned lizard has disappeared from almost half of its geographic range. Population declines are attributed to loss of habitat, human eradication of the ant populations upon which the lizards prey, displacement of native ant populations by invading fire ants (aided by synergistic effects of native ant eradication), and predation by domestic dogs and cats.

				`;}					
							//Insects Descriptions

if(	updname.textContent == "Dragonfly"){
				descanimal.textContent=`
				A dragonfly is an insect belonging to the order Odonata, infraorder Anisoptera (from Greek ἄνισος anisos, "unequal" and πτερόν pteron, "wing", because the hindwing is broader than the forewing). Adult dragonflies are characterized by large, multifaceted eyes, two pairs of strong, transparent wings, sometimes with coloured patches, and an elongated body. Dragonflies can be mistaken for the related group, damselflies (Zygoptera), which are similar in structure, though usually lighter in build; however, the wings of most dragonflies are held flat and away from the body, while damselflies hold their wings folded at rest, along or above the abdomen. Dragonflies are agile fliers, while damselflies have a weaker, fluttery flight. Many dragonflies have brilliant iridescent or metallic colours produced by structural colouration, making them conspicuous in flight. An adult dragonfly's compound eyes have nearly 24,000 ommatidia each.				Fossils of very large dragonfly ancestors in the Protodonata are found from 325 million years ago (Mya) in Upper Carboniferous rocks; these had wingspans up to about 750 mm (30 in). About 3,000 extant species are known. Most are tropical, with fewer species in temperate regions. Loss of wetland habitat threatens dragonfly populations around the world.
Dragonflies are predators, both in their aquatic larval stage, when they are known as nymphs or naiads, and as adults. In some species, the nymphal stage lasts for up to five years, and the adult stage may be as long as ten weeks, but most species have an adult lifespan in the order of five weeks or less, and some survive for only a few days.[2] They are fast, agile fliers, sometimes migrating across oceans, and often live near water. They have a uniquely complex mode of reproduction involving indirect insemination, delayed fertilization, and sperm competition. During mating, the male grasps the female at the back of the head, and the female curls her abdomen under her body to pick up sperm from the male's secondary genitalia at the front of his abdomen, forming the "heart" or "wheel" posture.
				`;};
if(	updname.textContent == "Beetle"){
				descanimal.textContent=`
				Beetles are a group of insects that form the order Coleoptera (/koʊliːˈɒptərə/), in the superorder Endopterygota. Their front pair of wings are hardened into wing-cases, elytra, distinguishing them from most other insects. The Coleoptera, with about 400,000 species, is the largest of all orders, constituting almost 40% of described insects and 25% of all known animal life-forms; new species are discovered frequently. The largest of all families, the Curculionidae (weevils), with some 83,000 member species, belongs to this order. Found in almost every habitat except the sea and the polar regions, they interact with their ecosystems in several ways: beetles often feed on plants and fungi, break down animal and plant debris, and eat other invertebrates. Some species are serious agricultural pests, such as the Colorado potato beetle, while others such as Coccinellidae (ladybirds or ladybugs) eat aphids, scale insects, thrips, and other plant-sucking insects that damage crops.
				Beetles typically have a particularly hard exoskeleton including the elytra, though some such as the rove beetles have very short elytra while blister beetles have softer elytra. The general anatomy of a beetle is quite uniform and typical of insects, although there are several examples of novelty, such as adaptations in water beetles which trap air bubbles under the elytra for use while diving. Beetles are endopterygotes, which means that they undergo complete metamorphosis, with a series of conspicuous and relatively abrupt changes in body structure between hatching and becoming adult after a relatively immobile pupal stage. Some, such as stag beetles, have a marked sexual dimorphism, the males possessing enormously enlarged mandibles which they use to fight other males. Many beetles are aposematic, with bright colours and patterns warning of their toxicity, while others are harmless Batesian mimics of such insects. Many beetles, including those that live in sandy places, have effective camouflage.
				`;};				
if(	updname.textContent == "Bee"){
				descanimal.textContent=`
				Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey. Bees are a monophyletic lineage within the superfamily Apoidea. They are presently considered a clade, called Anthophila. There are over 16,000 known species of bees in seven recognized biological families.[1][2] Some species – including honey bees, bumblebees, and stingless bees – live socially in colonies while most species (>90%) – including mason bees, carpenter bees, leafcutter bees, and sweat bees – are solitary.
				Bees are found on every continent except for Antarctica, in every habitat on the planet that contains insect-pollinated flowering plants. The most common bees in the Northern Hemisphere are the Halictidae, or sweat bees, but they are small and often mistaken for wasps or flies. Bees range in size from tiny stingless bee species, whose workers are less than 2 millimetres (0.08 in) long,[3] to Megachile pluto, the largest species of leafcutter bee, whose females can attain a length of 39 millimetres (1.54 in).

Bees feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. Most pollen is used as food for their larvae. Vertebrate predators of bees include primates and birds such as bee-eaters; insect predators include beewolves and dragonflies.
				`;};							
if(	updname.textContent == "Butterfly"){
				descanimal.textContent=`
				Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.
				Butterflies have the typical four-stage insect life cycle. Winged adults lay eggs on the food plant on which their larvae, known as caterpillars, will feed. The caterpillars grow, sometimes very rapidly, and when fully developed, pupate in a chrysalis. When metamorphosis is complete, the pupal skin splits, the adult insect climbs out, and after its wings have expanded and dried, it flies off. Some butterflies, especially in the tropics, have several generations in a year, while others have a single generation, and a few in cold locations may take several years to pass through their entire life cycle.
Butterflies are often polymorphic, and many species make use of camouflage, mimicry and aposematism to evade their predators. [1] Some, like the monarch and the painted lady, migrate over long distances. Many butterflies are attacked by parasites or parasitoids, including wasps, protozoans, flies, and other invertebrates, or are preyed upon by other organisms. Some species are pests because in their larval stages they can damage domestic crops or trees; other species are agents of pollination of some plants. Larvae of a few butterflies (e.g., harvesters) eat harmful insects, and a few are predators of ants, while others live as mutualists in association with ants. Culturally, butterflies are a popular motif in the visual and literary arts.
				`;};
if(	updname.textContent == "Ant"){
				descanimal.textContent=`
				There are more than 12,000 species of ants all over the world.
An ant can lift 20 times its own body weight. If a second grader was as strong as an ant, she would be able to pick up a car!
Some queen ants can live for many years and have millions of babies!
Ants don’t have ears. Ants "hear" by feeling vibrations in the ground through their feet.
When ants fight, it is usually to the death!
When foraging, ants leave a pheromone trail so that they know where they’ve been.
Queen ants have wings, which they shed when they start a new nest.
Ants don’t have lungs. Oxygen enters through tiny holes all over the body and carbon dioxide leaves through the same holes.
When the queen of the colony dies, the colony can only survive a few months. Queens are rarely replaced and the workers are not able to reproduce.
Although ants are frustrating when they get into your home or when you’re having a picnic, ants do help the environment. They are social insects, which means they live in large colonies or groups. Depending on the species, ant colonies can consist of millions of ants.
There are three kinds of ants in a colony: The queen, the female workers, and males. The queen and the males have wings, while the workers don’t have wings. The queen is the only ant that can lay eggs. The male ant’s job is to mate with future queen ants and they do not live very long afterwards. Once the queen grows to adulthood, she spends the rest of her life laying eggs! Depending on the species, a colony may have one queen or many queens.
				`;};
if(	updname.textContent == "Mosquito"){
				descanimal.textContent=`
				Mosquitoes are members of a group of about 3,500 species of small flies within the family Culicidae (from the Latin culex meaning "gnat"). The word "mosquito" (formed by mosca and diminutive -ito)[2] is Spanish and Portuguese for "little fly".[3][4] Mosquitoes have a slender segmented body, one pair of wings, one pair of halteres, three pairs of long hair-like legs, and elongated mouthparts.
				The mosquito life cycle consists of egg, larva, pupa, and adult stages. Eggs are laid on the water surface; they hatch into motile larvae that feed on aquatic algae and organic material. The adult females of most species have tube-like mouthparts (called a proboscis) that can pierce the skin of a host and feed on blood, which contains protein and iron needed to produce eggs. Thousands of mosquito species feed on the blood of various hosts ⁠— vertebrates, including mammals, birds, reptiles, amphibians, and some fish; along with some invertebrates, primarily other arthropods. This loss of blood is seldom of any importance to the host.
The mosquito's saliva is transferred to the host during the bite, and can cause an itchy rash. In addition, many species can ingest pathogens while biting, and transmit them to future hosts. In this way, mosquitoes are important vectors of diseases such as malaria, yellow fever, Chikungunya, West Nile, dengue fever, filariasis, Zika and other arboviruses. By transmitting diseases, mosquitoes cause the deaths of more people than any other animal taxon: over 700,000 each year.[5][6] It has been claimed that almost half of the people who have ever lived have died of mosquito-vectored disease,[7] but this claim is disputed, with more conservative estimates placing the death toll closer to 5% of all humans.[8]
				`;};
if(	updname.textContent == "Siberian tiger"){
				descanimal.textContent=`
				The Siberian tiger is a tiger from a specific population of the Panthera tigris tigris subspecies native to the Russian Far East, Northeast China,[3] and possibly North Korea.[4] It once ranged throughout the Korean Peninsula, north China, and eastern Mongolia. The population currently inhabits mainly the Sikhote-Alin mountain region in southwest Primorye Province in the Russian Far East. In 2005, there were 331–393 adult and subadult Siberian tigers in this region, with a breeding adult population of about 250 individuals. The population had been stable for more than a decade because of intensive conservation efforts, but partial surveys conducted after 2005 indicate that the Russian tiger population was declining.[1] An initial census held in 2015 indicated that the Siberian tiger population had increased to 480–540 individuals in the Russian Far East, including 100 cubs.[5][6] This was followed up by a more detailed census which revealed there was a total population of 562 wild Siberian tigers in Russia.[7] As of 2014, about 35 individuals were estimated to range in the international border area between Russia and China.[8]
				The Siberian tiger is genetically close to the extinct Caspian tiger. Results of a phylogeographic study comparing mitochondrial DNA from Caspian tigers and living tiger subspecies indicate that the common ancestor of the Siberian and Caspian tigers colonized Central Asia from eastern China, via the Gansu−Silk Road corridor, and then subsequently traversed Siberia eastward to establish the Siberian tiger population in the Russian Far East.[9] The Caspian and Siberian tiger populations were the northernmost in mainland Asia.[10][11]
The Siberian tiger was also called "Amur tiger", "Manchurian tiger", "Korean tiger",[4] and "Ussurian tiger", depending on the region where individuals were observed.[10][12]
				`;};
if(	updname.textContent == "Bengal tiger"){
				descanimal.textContent=`
				The Bengal tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to the Indian subcontinent.[3] It is threatened by poaching, loss, and fragmentation of habitat, and was estimated at comprising fewer than 2,500 wild individuals by 2011. None of the Tiger Conservation Landscapes within its range is considered large enough to support an effective population of more than 250 adult individuals.[1] India's tiger population was estimated at 1,706–1,909 individuals in 2010.[4] By 2018, the population had increased to an estimated 2,603–3,346 individuals.[5] Around 300–500 tigers are estimated in Bangladesh, 220–274 tigers in Nepal and 103 tigers in Bhutan.[1][6][7]
				The tiger is estimated to be present in the Indian subcontinent since the Late Pleistocene, for about 12,000 to 16,500 years.[8][9][10]
The Bengal tiger ranks among the biggest wild cats alive today.[2][11] It is considered to belong to the world's charismatic megafauna.[12] It is the national animal of both India and Bangladesh.[13] It used to be called Royal Bengal tiger.[14]
				`;};				
if(	updname.textContent == "South China tiger"){
				descanimal.textContent=`
				The South China tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to southern China.[2] The population mainly inhabited the Fujian, Guangdong, Hunan and Jiangxi provinces. It has been listed as Critically Endangered on the IUCN Red List since 1996 and is possibly extinct in the wild since no wild individual has been recorded since the late 1980s.[1] In the late 1990s, continued survival was considered unlikely because of low prey density, widespread habitat degradation and fragmentation, and other human pressures.[3] In the fur trade, it used to be called Amoy tiger.[4]
				Analysis of South China tiger skulls showed that they differ in shape from tiger skulls of other regions. Because of this phenomenon the South China tiger is considered a relict population of the "stem" tiger.[5] Results of a phylogeographic study indicate that southern China or northern Indochina was likely the center of Pleistocene tiger radiation.[6]
In 2017, the Cat Classification Taskforce of the Cat Specialist Group subsumed all mainland Asian tiger populations to P. t. tigris.[2] However, a genetic study published in 2018 supported six monophyletic clades, with the South Chinese tiger being distinct from other mainland Asian populations, thus supporting the traditional concept of six subspecies.[7]
				`;};							
if(	updname.textContent == "Javan tiger"){
				descanimal.textContent=`
				The Javan tiger was a Panthera tigris sondaica population native to the Indonesian island of Java until its extinction in the mid-1970s.[4][5] It was hunted to extinction, and its natural habitat converted for agricultural land use and infrastructure.[1] It was one of the three tiger populations in the Sunda Islands.[6]
				Formerly, it was regarded as a distinct tiger subspecies, which had been assessed as extinct on the IUCN Red List in 2008.[5] In 2017, felid taxonomy was revised and the Javan tiger subordinated to P. t. sondaica along with the Sumatran tiger and the Bali tiger.[4]
Results of mitochondrial DNA analysis of 23 tiger samples from museum collections indicate that tigers colonized the Sunda Islands throughout the last glacial period 11,000–12,000 years ago.[7]
The Javan tiger used to inhabit most of Java, but had retreated to remote montane and forested areas by 1940. Around 1970, the only known tigers lived in the region of Meru Betiri, the highest mountain in Java's southeast. This rugged region with sloping terrain had not been settled. An area of 500 km2 (190 sq mi) was gazetted as wildlife reserve in 1972. The last tigers were sighted there in 1976.[1][14]
				`;};
if(	updname.textContent == "Sumatran tiger"){
				descanimal.textContent=`
				The Sumatran tiger is a population of Panthera tigris sondaica on the Indonesian island of Sumatra.[2][3] This population was listed as Critically Endangered on the IUCN Red List in 2008, as it was estimated at 441 to 679 individuals, with no subpopulation larger than 50 individuals and a declining trend.[1]
				The Sumatran tiger is the only surviving tiger population in the Sunda Islands, where the Bali and Javan tigers are extinct.[4] Sequences from complete mitochondrial genes of 34 tigers support the hypothesis that Sumatran tigers are diagnostically distinct from mainland subspecies.[5]
In 2017, the Cat Classification Task Force of the Cat Specialist Group revised felid taxonomy and recognizes the living and extinct tiger populations in Indonesia as P. t. sondaica.[2]
Analysis of DNA is consistent with the hypothesis that Sumatran tigers became isolated from other tiger populations after a rise in sea level that occurred at the Pleistocene to Holocene border about 12,000–6,000 years ago. In agreement with this evolutionary history, the Sumatran tiger is genetically isolated from all living mainland tigers, which form a distinct group closely related to each other.[5] The isolation of the Sumatran tiger from mainland tiger populations is supported by multiple unique characters, including two diagnostic mitochondrial DNA nucleotide sites, ten mitochondrial DNA haplotypes and 11 out of 108 unique microsatellite alleles. The relatively high genetic variability and the phylogenetic distinctiveness of the Sumatran tiger indicates that the gene flow between island and mainland populations was highly restricted.[10]
				`;};
if(	updname.textContent == "Bali tiger"){
				descanimal.textContent=`
				The Bali tiger was a Panthera tigris sondaica population on the Indonesian island of Bali[2] which has been extinct since the 1950s.[1]
				It was formerly regarded as a distinct tiger subspecies with the scientific name Panthera tigris balica, which had been assessed as extinct on the IUCN Red List in 2008.[1] In 2017, felid taxonomy was revised, and it was subordinated to P. t. sondaica, which also includes the still surviving Sumatran tiger.[2]
Results of a mitochondrial DNA analysis of 23 tiger samples from museum collections indicate that tigers colonized the Sunda Islands throughout the last glacial period 11,000–12,000 years ago.[3] In Bali, the last tigers were recorded in the late 1930s. A few individuals likely survived into the 1940s and possibly 1950s. The population was hunted to extirpation and its natural habitat converted for human use.[4]
The Bali tiger was described as the smallest tiger in the Sunda islands.[6] In the 20th century, only seven skins and skulls of tigers from Bali were known to be preserved in museum collections. The common feature of these skulls is the narrow occipital plane, which is analogous with the shape of tiger skulls from Java.[9] Skins of males measured between the pegs are 220 to 230 cm (87 to 91 in) long from head to end of tail; those of females 190 to 210 cm (75 to 83 in). The weight of males ranged from 90 to 100 kg (200 to 220 lb), and of females from 65 to 80 kg (143 to 176 lb).[10]
				`;};				
																				
		};
		
const icon= document.querySelector(".icon");

		icon.addEventListener("click",function () {
			
			
	let dark = document.body.classList.contains("dark-theme");
					if(dark){
					console.log("dark");	document.body.classList.remove("dark-theme");		
						icon.src="./images/moon.png";			
						icon.style.animation="glowformoon 1s linear";
					}
					else{
									document.body.classList.add("dark-theme");
				icon.src="./images/nsun.png";
					icon.style.animation="glowforsun 1s linear";
					}
		});
		
