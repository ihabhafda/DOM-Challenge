                                                                // #101 - DOM Challenge
// header
let head = document.createElement("div");
let logo = document.createElement("h2");
let menu = document.createElement("ul");
let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");
let list4 = document.createElement("li");

logo.className = "logo";
head.className = "head";
menu.className = "menu";

let ptext = document.createTextNode("Elzero");
let text1 = document.createTextNode("Home");
let text2 = document.createTextNode("About");
let text3 = document.createTextNode("Service");
let text4 = document.createTextNode("Contact");

logo.appendChild(ptext);
list1.appendChild(text1);
list2.appendChild(text2);
list3.appendChild(text3);
list4.appendChild(text4);
menu.appendChild(list1);
menu.appendChild(list2);
menu.appendChild(list3);
menu.appendChild(list4);

head.appendChild(logo);
head.appendChild(menu);


document.body.style = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial";
head.style.cssText = "display: flex; padding: 20px; justify-content: space-between; align-items: center; background-color: rgb(255, 255, 255)";
logo.style.cssText = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px";
menu.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none";
list1.style.cssText = "padding-left: 20px; opacity: 0.7;";
list2.style.cssText = "padding-left: 20px; opacity: 0.7;";
list3.style.cssText = "padding-left: 20px; opacity: 0.7;";
list4.style.cssText = "padding-left: 20px; opacity: 0.7;";

                                                        document.body.prepend(head);




// content
let content = document.createElement("div");
content.className = "content";

for (let number = 1; number <= 15; number++) {
    
    let product = document.createElement("div");
    product.className = "product";
    let span = document.createElement("span");
    span.innerText = [number];    // hiye l2ar2am mn 1 la 15
    
    let spantext = document.createTextNode("Product");
    
    content.appendChild(product);
    product.appendChild(span);
    product.appendChild(spantext);
    
    
    content.style.cssText =
        "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
    
    product.style.cssText =
        "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    
    span.style.cssText =
        "font-size: 30px; font-weight: normal; color: black; display: block; margin-bottom: 10px; margin-top: 10px;";

                                                        document.body.appendChild(content);
                                                        head.after(content);
    }


    // footer
    let foot = document.createElement("div");
    foot.className = "footer";
    
    let textfoot = document.createTextNode("Copyright 2011");

    foot.appendChild(textfoot);

    
    foot.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255)";
    
                                                        document.body.append(foot);
                                                        content.after(foot);