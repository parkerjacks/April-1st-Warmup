
const container = document.getElementById("container"); 
const banner = document.createElement("header");  
container.style.display = "flex" 
container.style.flexDirection = "column"
container.style.justifyContent = "space-between" 
container.style.height = "600px"
container.appendChild(banner); 
banner.style.backgroundColor = "blue"; 
banner.style.display = "flex" 
banner.style.flexDirection = "row"
banner.style.color = "white"; 
banner.style.width = "100vw"; 
banner.style.height = "100px";  
banner.style.justifyContent = "space-around";
const header = document.createElement("h1"); 
header.textContent = "HighOnCoding" 
header.style.fontStyle = "bold"
banner.appendChild(header);
// header.style.display= "flex"; 
// header.style.fontSize = "50px"; 
// header.style.flexDirection = "row" 
// header.style.justifyContent = "left" 

const home = document.createElement("h1") ; 
banner.appendChild(home); 
home.textContent = " Home"; 
home.style.color = "white";  

const categories = document.createElement("h1");
banner.appendChild(categories);
categories.textContent = " Categories"; 
categories.style.color = "white";



const column1 = document.createElement("div") 
container.appendChild(column1)  
column1.style.display = "flex"
column1.style.flexDirection = "column" 
column1.style.justifyContent = "flex-start"
const header2 = document.createElement("h2")  
column1.style.backgroundColor = "lightgray"
header2.style.color = "black"  
header2.textContent = "Curse of the Current Reviews"   
column1.appendChild(header2);  
const cursePar = document.createElement("p");
column1.appendChild(cursePar);  
cursePar.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews. "
cursePar.style.color = "darkgray";

const column2 = document.createElement("div");  
container.appendChild(column2) 
column2.style.backgroundColor = "white"; 
column2.style.display = "flex"; 
column2.style.flexDirection = "column"
const header3 = document.createElement("h2"); 
header3.style.color = "blue"; 
header3.textContent = "Hello Watchkit"; 
column2.appendChild(header3); 
const helloPar = document.createElement("p"); 
helloPar.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The Watchkit framework enable the developers to creat Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
helloPar.style.color = "black"; 
column2.appendChild(helloPar);
const feedbackBar = document.createElement("div"); 
feedbackBar.style.width = "80vw"; 
feedbackBar.style.height = "40px"; 
feedbackBar.style.backgroundColor = "orange";
feedbackBar.style.display = "flex";
feedbackBar.style.flexDirection = "row";
feedbackBar.style.alignItems = "left";
column2.appendChild(feedbackBar); 
const comment1 = document.createElement("p"); 
feedbackBar.appendChild(comment1) ;
comment1.textContent = "12 comments" ;
comment1.style.color = "white"; 
comment1.style.fontSize = "20px"; 
comment1.style.fontStyle = "bold"; 
const like1 = document.createElement("p"); 
like1.style.color = "white";
like1.style.fontSize = "20px"; 
like1.style.fontStyle = "bold"; 
like1.textContent = "124 likes"; 
feedbackBar.appendChild(like1);  
feedbackBar.style.justifyContent= "space-between";

const column3 = document.createElement("div"); 
column3.style.display = "flex"; 
column3.style.flexDirection = "column"; 
const header4 = document.createElement("h2"); 
header4.textContent = "Introduction to Swift"; 
header4.style.color = "blue"; 
container.appendChild(column3);
column3.appendChild(header4); 
const introPar = document.createElement("p"); 
introPar.style.color = "black";
introPar.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started." 
column3.appendChild(introPar); 
const feedbackBar2 = document.createElement("div"); 
column3.appendChild(feedbackBar2)
feedbackBar2.style.width = "80vw"; 
feedbackBar2.style.height = "40px"; 
feedbackBar2.style.backgroundColor = "orange"; 
feedbackBar2.style.display = "flex"; 
feedbackBar2.style.flexDirection = "row"; 
const comment2 = document.createElement("p") 
comment2.style.color = "white"; 
comment2.textContent = "15 comments";
feedbackBar2.appendChild(comment2);
const like2 = document.createElement("p"); 
like2.textContent = "45 likes"; 
like2.style.color= "white"; 
feedbackBar2.appendChild(like2); 
feedbackBar2.style.justifyContent = "space-between"; 
like2.style.fontSize = "20px";
like2.style.fontStyle = "bold"; 
comment2.style.fontSize = "20px"; 
comment2.style.fontStyle="bold"; 
feedbackBar2.style.alignItems = "center"; 
feedbackBar.style.alignItems = "center";