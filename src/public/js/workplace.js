const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

(async function($, $$) {

  $$("textarea.language-html.fill").forEach(t => t.value = document.head.outerHTML);
  
  var css = await fetch("prism-live.css");
  css = await css.text();
  
  $$("textarea.language-css.fill").forEach(t => {
    t.value = css;
    t.dispatchEvent(new InputEvent("input"));
  });
  
  var js = await fetch("src/prism-live.js");
  js = await js.text();
  
  $$("textarea.language-js.fill").forEach(t => {
    t.value = js;
    t.dispatchEvent(new InputEvent("input"));
  });
  
  
  })(Bliss, Bliss.$);
