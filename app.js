function loadProject(name){
    const contentArea=document.getElementById('mainContainer');
    
    fetch(`Projects/${name}/${name}.html`)
        .then(response => response.text())
        .then(html=>{
            contentArea.innerHTML=html

            const link=document.createElement('link');
            link.rel='stylesheet';
            link.href=`Projects/${name}/${name}Style.css`;
            document.head.appendChild(link);

            const script=document.createElement('script');
            script.src=`Projects/${name}/${name}JS.js`;
            document.body.appendChild(script);
        })
}
