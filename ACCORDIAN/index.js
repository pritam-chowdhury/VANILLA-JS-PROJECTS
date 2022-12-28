const data = [
    {
      value: 'html',
      title: 'HTML',
      contents:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      value: 'css',
      title: 'CSS',
      contents:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      value: 'javascript',
      title: 'JavaScript',
      contents:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
  ]
  const accordian = document.querySelector(".accordian");
  function initialize(items){
    const fragment = document.createDocumentFragment();
    items.forEach(element => {
        fragment.appendChild(creatAccordian(element));
    });
    accordian.appendChild(fragment);
    attachEvents();
  }

  function creatAccordian(item){
    const accodianItem = document.createElement("div");
    const accordianHeader = document.createElement("div");
    const accordianContent = document.createElement("div");
    const icon = document.createElement("span");
    icon.classList.add("accordion-icon");
    accodianItem.classList.add("accordian-item");
    accordianHeader.classList.add("accordian-header");
    accordianContent.classList.add("accordian-item");
    accordianHeader.innerHTML = item.title;
    accordianContent.innerHTML = item.contents;
    accordianContent.hidden = true;
    accordianHeader.appendChild(icon);
    accodianItem.appendChild(accordianHeader);
    accodianItem.appendChild(accordianContent);
    return accodianItem;
  }

  function attachEvents(){
    const accordianHeader = document.querySelectorAll(".accordian-header");
    accordianHeader.forEach((elem)=>{
       elem .addEventListener("click", function(e){
            const target = e.target;
            const icon = target.querySelector(".accordion-icon");
            icon.classList.toggle("accordion-icon--rotated");
            target.nextSibling.hidden = !target.nextSibling.hidden;
        });
    });
  }

  initialize(data);